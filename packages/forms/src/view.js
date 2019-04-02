import React, {
  createElement,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  useState,
  useContext,
  memo,
} from 'react';
import {
  filter,
  map,
  find,
  addIndex,
  compose,
  reduceBy,
  propOr,
  keys,
  flip,
  indexBy,
  prop,
  unless,
  of,
  reduceWhile,
} from 'ramda';
import useFormReducer from './useFormReducer';
import {
  KContext,
  withScope,
  shallowEqual,
  withMemoContext,
} from '@k-frame/core';
import {getContextValue} from './formConnect';
import mergeProps from './mergeProps';
import Field from './field';
import {fieldTouchedStrategy} from './errorsDisplayStrategies';

const ensureArray = unless(Array.isArray, of);

const validateField = (fieldSchema, model, args) =>
  fieldSchema.validate
    ? reduceWhile(
        p => !p,
        (p, c) =>
          c(model.fields[fieldSchema.id], {
            fields: model.fields,
            args,
            fieldSchema,
            debouncing: !!model.debouncing[fieldSchema.id],
          }),
        '',
        fieldSchema.validate
      )
    : '';

const validateForm = (schema, model, asyncErrors, args) =>
  compose(
    filter(f => f.error || f.asyncErrors),
    map(f => ({
      id: f.id,
      error: validateField(f, model, args),
      asyncError: asyncErrors[f.id] || '',
    })),
    filter(f => !f.visible || f.visible({fields: model.fields, args}))
  )(schema);

const boolWithDefault = (defaultValue, value) =>
  value != null ? value : defaultValue;

const GenericError = ({content}) => (
  <div className="alert alert-danger" role="alert">
    {content}
  </div>
);

const emptyObject = {};

const FormInt = withScope(
  ({
    name,
    legend,
    formTemplate,
    fieldTemplate,
    buttonsTemplate,
    onSubmit,
    onReset,
    fieldTypes,
    schema,
    resetOnSubmit,
    cancelText,
    submitText,
    additionalButtons,
    args,
    autoFocus,
    errorsDisplayStrategy,
  }) => {
    const context = useContext(KContext);
    const argsKeys = useMemo(() => keys(args), []);
    const argsValues = map(k => args[k], argsKeys);

    const {
      setField,
      setTouched,
      isFieldTouched,
      getTouched,
      submit,
      setSubmitDirty,
      getFields,
      getFormState,
    } = useFormReducer(fieldTypes, schema);

    const [syncErrors, setSyncErrors] = useState({});

    const argsRef = useRef(args);
    useEffect(() => {
      argsRef.current = args;
    }, argsValues);

    const fieldsValuesRef = useRef({});
    const touchedValuesRef = useRef({});
    const submitRequestedRef = useRef({});
    const syncErrorsRef = useRef({});

    const inputRefs = useRef({});

    const richSchema = useMemo(
      () =>
        map(
          fieldSchema => ({
            ...fieldSchema,
            validate: fieldSchema.validate
              ? map(
                  validator =>
                    withMemoContext(validator, (useMemo, value, context) => [
                      value,
                      {...context, useMemo},
                    ]),
                  ensureArray(fieldSchema.validate)
                )
              : null,
            visible: fieldSchema.visible
              ? withMemoContext(fieldSchema.visible, (useMemo, context) => [
                  {
                    ...context,
                    useMemo,
                  },
                ])
              : null,
          }),
          schema
        ),
      []
    );

    const indexedSchema = useMemo(() => indexBy(prop('id'), richSchema), []);

    const getSyncErrors = useCallback(() => {
      const model = getFormState();
      return map(fieldSchema => {
        const error = validateField(fieldSchema, model, argsRef.current);
        return (
          errorsDisplayStrategy({
            submitRequested: model.submitDirty,
            touched: model.touched[fieldSchema.id],
            dirty: model.dirty[fieldSchema.id],
          }) && error
        );
      }, indexedSchema);
    }, [indexedSchema]);

    const validateFields = useCallback(() => {
      const syncErrorsCandidate = getSyncErrors();

      if (!shallowEqual(syncErrorsCandidate, syncErrorsRef.current)) {
        syncErrorsRef.current = syncErrorsCandidate;
        setSyncErrors(syncErrorsCandidate);
      }
    }, []);

    useEffect(() => {
      validateFields();
    }, argsValues);

    useEffect(() => {
      if (autoFocus) {
        const firstField = find(f => inputRefs.current[f.id], schema);
        if (
          firstField &&
          inputRefs.current[firstField.id] &&
          inputRefs.current[firstField.id].focus
        ) {
          inputRefs.current[firstField.id].focus();
        }
      }

      return context.subscribe(() => {
        const fieldsValues = getFields();
        const touchedValues = getTouched();
        const {submitRequested} = getFormState();
        if (
          !shallowEqual(fieldsValues, fieldsValuesRef.current) ||
          !shallowEqual(touchedValues, touchedValuesRef.current) ||
          submitRequestedRef.current !== submitRequested
        ) {
          fieldsValuesRef.current = fieldsValues;
          touchedValuesRef.current = touchedValues;
          submitRequestedRef.current !== submitRequested;
          validateFields();
        }
      });
    }, []);

    const defaultSubmitHandler = useCallback(e => {
      const asyncErrors = {};
      const model = getFormState();
      const formErrors = validateForm(
        richSchema,
        model,
        asyncErrors || {},
        argsRef.current
      );
      const syncErrors = filter(e => e.error, formErrors);

      syncErrors.length === 0
        ? submit({
            fields: model.fields,
            resetOnSubmit: boolWithDefault(true, resetOnSubmit),
          })
        : setSubmitDirty();

      if (formErrors.length > 0) {
        const erroredInput = inputRefs.current[formErrors[0].id];
        if (erroredInput) {
          erroredInput.focus();
        }
      }

      return formErrors;
    }, []);

    const defaultResetHandler = useCallback(() => {}, []);

    const handleSubmit = useCallback(
      e => {
        e.preventDefault();
        return onSubmit
          ? onSubmit(defaultSubmitHandler, getFields())
          : defaultSubmitHandler();
      },
      [defaultSubmitHandler, onSubmit]
    );

    const handleReset = useCallback(e => {
      e.preventDefault();
      return onReset ? onReset(defaultResetHandler) : defaultResetHandler();
    });

    const setFieldValue = useCallback((value, id) => {
      //const model = this.getModel();
      //const fields = indexedSchemaSelector(model, this.props);
      /*const field = fields[id];
      if (field.debounce) {
        setField(id, value, 'start');
        clearTimeout(this.timeouts[id]);
        this.timeouts[id] = setTimeout(
          () => setField(id, value, 'end'),
          field.debounce
        );
      } else {*/
      setField(id, value);
      //}
    });

    const handleOnChange = useCallback((value, fieldId) => {
      const fieldSchema = indexedSchema[fieldId];

      if (fieldSchema.onChange) {
        const fieldsValues = getFields();
        const currentValue = prop(fieldId, fieldsValues);
        const overriddenValue =
          fieldSchema.onChange({
            value,
            args: argsRef.current,
            fields: fieldsValues,
          }) || value;
        if (overriddenValue !== currentValue) {
          setFieldValue(overriddenValue, fieldId);
        }
      } else {
        setFieldValue(value, fieldId);
      }
    }, []);

    const handleRefSet = useCallback((ref, fieldId) => {
      inputRefs.current[fieldId] = ref;
    }, []);

    const handleOnBlur = useCallback(fieldId => {
      if (!isFieldTouched(fieldId)) {
        setTouched(fieldId);
      }
    }, []);

    const buttons = useMemo(
      () =>
        createElement(buttonsTemplate, {
          onSubmit: handleSubmit,
          onReset: handleReset,
          formName: name,
          cancelText,
          submitText,
          dirty: false,
        }),
      [buttonsTemplate, handleSubmit, name, cancelText, submitText]
    );
    const genericError = <div>genericError</div>;

    const groupFields = useCallback(
      (acc, f) =>
        acc.concat(
          <Field
            key={(name || '') + (name ? '-' : '') + f.id}
            id={f.id}
            inputRef={handleRefSet}
            error={syncErrorsRef.current[f.id]}
            title={f.title}
            fieldTemplate={fieldTemplate}
            formName={name}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            defaultValue={f.defaultValue}
            parse={f.parse}
            format={f.format}
            type={f.type || 'text'}
            component={fieldTypes[f.type || 'text']}
            visible={f.visible}
            args={args}
            props={f.props ? f.props(args) : emptyObject}
          />
        ),
      [fieldTemplate, fieldTypes, name, ...argsValues]
    );

    const renderedFields = useMemo(
      () => reduceBy(groupFields, [], propOr('default', 'group'), richSchema),
      [richSchema, syncErrors, ...argsValues]
    );

    const renderedForm = useMemo(
      () =>
        createElement(formTemplate, {
          fields: renderedFields,
          buttons,
          genericError,
          legend,
          onSubmit: handleSubmit,
          args,
        }),
      [buttons, renderedFields, ...argsValues]
    );

    return renderedForm;
  }
);

const Form = flip(memo)((props, nextProps) =>
  shallowEqual(mergeProps('args')(props), mergeProps('args')(nextProps))
)(props => {
  if (!props.schema) {
    console.error('Schema prop is required');
    return null;
  }

  const context = useContext(KContext);
  const contextValue = useMemo(() => getContextValue(), []);

  if (!context.supplied) {
    return (
      <KContext.Provider value={contextValue}>
        {createElement(FormInt, props)}
      </KContext.Provider>
    );
  }

  return createElement(FormInt, props);
});

const FormTemplate = ({fields, buttons, onSubmit}) => (
  <form>
    {fields.default} {buttons}
  </form>
);

const FieldTemplate = ({title, input, error}) => (
  <div>
    <div>
      {title} {input}
    </div>
    <div style={{color: 'red'}}>{error}</div>
  </div>
);

const ButtonsTemplate = ({onSubmit, onReset}) => (
  <div>
    <button type="submit" onClick={onSubmit}>
      Save
    </button>
    <button type="button" onClick={onReset}>
      Cancel
    </button>
  </div>
);

const fieldTypes = {
  text: ({id, value, onChange, onBlur, inputRef}) => (
    <input
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      ref={inputRef}
    />
  ),
};

Form.defaultProps = {
  formTemplate: FormTemplate,
  fieldTemplate: FieldTemplate,
  buttonsTemplate: ButtonsTemplate,
  fieldTypes: fieldTypes,
  cancelText: 'Cancel',
  submitText: 'Submit',
  errorsDisplayStrategy: fieldTouchedStrategy,
};

export {validateForm, validateField, Form};
