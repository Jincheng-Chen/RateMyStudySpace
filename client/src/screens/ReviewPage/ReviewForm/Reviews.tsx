import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';

interface FormData {
  hello: string;
}

interface MyFormProps {
  initialValues: FormData;
}

function App() {
  return <MyForm initialValues={{ hello: 'hello world' }} />;
}

function MyForm(props: MyFormProps) {
  const { initialValues } = props;

  // yes, this can even be async!
  async function onSubmit(values: FormData) {
    console.log(values);
  }

  // yes, this can even be async!
  async function validate(values: FormData) {
    if (!values.hello) {
      return { hello: 'Saying hello is nice.' };
    }
    return;
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <TextField label="Hello world" name="hello" required={true} />
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    />
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));