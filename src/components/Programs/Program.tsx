import { Program as ProgramInterface } from '../../store/programs';
import Button from '../Button';

interface ProgramProps {
  program: ProgramInterface;
}

const Program: React.FC<ProgramProps> = ({ program }) => {
  return (
    <div className="flex flex-col p-0.5 border-2 border-t-white border-l-white border-r-black border-b-black bg-app-gray absolute">
      <header className="flex justify-between bg-app-blue text-white p-1">
        <h2 className="mr-4">{program.title}</h2>
        <Button className="justify-center w-6 h-6 text-black font-bold">
          x
        </Button>
      </header>
      <div className="p-4">
        <h1>
          Welcome to my <b>portfolio</b>
        </h1>
      </div>
    </div>
  );
};

export default Program;
