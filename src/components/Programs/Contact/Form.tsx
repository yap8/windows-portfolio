import Button from '../../Button';
import FormField from './FormField';

const Form = () => {
  return (
    <form className="mb-2">
      <div className="flex justify-between mb-2">
        <FormField name="name" type="text" />
      </div>
      <div className="flex justify-between mb-2">
        <FormField name="email" type="email" />
      </div>
      <div className="flex justify-between mb-2">
        <FormField name="message" type="textarea" />
      </div>
      <div>
        <Button>Send</Button>
      </div>
    </form>
  );
};

export default Form;
