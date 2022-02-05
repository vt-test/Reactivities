import { useField } from 'formik';
import React from 'react';
import { Form, Label, Select } from 'semantic-ui-react';

interface Props {
  placeholder: string;
  name: string;
  options: any;
  label?: string;
}

export default function MySelectInput(props: Props) {
  //helpers nam, omugucava da manualno postavimo touch ili values
  const [field, meta, helpers] = useField(props.name);

  // !!meta.error pretvara meta.error object u boolean
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <Select
        clearable
        options={props.options}
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <Label basic color='red' content={meta.error} />
      ) : null}
    </Form.Field>
  );
}
