import programs from '../../../store/programs';
import Button from '../../Button';

const Welcome = () => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold mb-2">
        Welcome to my <b>Portfolio</b>
      </h2>
      <div className="h-full flex">
        <div className="flex p-5 bg-app-yellow mr-4 border border-black">
          <div className="mr-4">
            <div
              className="h-8 w-8"
              style={{ backgroundImage: `url('images/Tip of the Day.ico')` }}
            />
          </div>
          <div>
            <h3 className="font-semibold mb-4">Did you know...</h3>
            <p className="max-w-xs">
              To open a program, you just doubleclick an icon.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <Button className="mb-2 justify-center">About me</Button>
          <Button className="mb-2 justify-center">Projects</Button>
          <a
            className="block w-full mb-2"
            href="https://github.com/yap8"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="w-full justify-center">GitHub</Button>
          </a>
          <a
            className="block w-full mb-2"
            href="https://yap8.github.io/portfolio/Nebozhenko_Frontend_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="w-full justify-center">Resume</Button>
          </a>
          <hr className="border-app-dark gray mb-2" />
          <Button
            className="justify-center"
            onClick={() => programs.closeProgram('welcome')}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
