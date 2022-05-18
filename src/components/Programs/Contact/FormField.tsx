interface FormFieldProps {
  name: string;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  type = 'text',
  value,
  ...props
}) => {
  if (type === 'textarea')
    return (
      <>
        <label className="w-10 mr-10" htmlFor={name}>
          {name}
        </label>
        <textarea
          className="flex-1 h-32 px-2 pb-4 border-2 border-white border-t-app-darkgray border-l-app-darkgray resize-none"
          name={name}
          id={name}
          value={value}
          {...props}
        />
      </>
    );

  return (
    <>
      <label className="w-10 mr-10" htmlFor={name}>
        {name}
      </label>
      <input
        className="flex-1 px-2 border-2 border-white border-t-app-darkgray border-l-app-darkgray"
        type={type}
        name={name}
        id={name}
        value={value}
        {...props}
      />
    </>
  );
};

export default FormField;
