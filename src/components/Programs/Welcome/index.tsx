import programs from '../../../store/programs';
import Button from '../../Button';

const Welcome = () => {
  return (
    <div className="h-full">
      <h2 className="text-2xl font-semibold mb-2">
        Welcome to my <b>Portfolio</b>
      </h2>
      <div className="flex">
        <div className="flex p-5 bg-app-yellow mr-4 border border-black">
          <div className="mr-4">ICON</div>
          <div>
            <h3 className="font-semibold mb-4">Did you know...</h3>
            <p>To open a program, you just doubleclick an icon.</p>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <Button className="mb-2">About me</Button>
          <Button className="mb-2">Projects</Button>
          <Button className="mb-2">GitHub</Button>
          <Button className="mb-2">Resume</Button>
          <hr className="border-app-dark gray mb-2" />
          <Button onClick={() => programs.closeProgram(1)}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
