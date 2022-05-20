import Title from '../../Title';
import Form from './Form';

const Contact = () => {
  return (
    <div>
      <Title>Thanks for checking out my website!</Title>
      <p className="mb-2">
        If you feel like contacting me feel free to send me an email{' '}
        <a
          className="text-red-600 hover:underline"
          href="mailto:nebozhenko.arseny@gmail.com"
        >
          nebozhenko.arseny@gmail.com
        </a>{' '}
        or use the form below.
      </p>
      <Form />
      <p>
        You can also contact me on{' '}
        <a
          className="text-red-600 hover:underline"
          href="https://www.linkedin.com/in/arseny-nebozhenko-693b16223"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{' '}
        or check out my{' '}
        <a
          className="text-red-600 hover:underline"
          href="https://github.com/yap8"
          target="_blank"
          rel="noreferrer"
        >
          GitHub!
        </a>
      </p>
    </div>
  );
};

export default Contact;
