import { Rnd } from 'react-rnd';
import { twMerge } from 'tailwind-merge';

import { Program as ProgramInterface } from '../../store/programs';
import Button from '../Button';

interface ProgramProps {
  program: ProgramInterface;
  handleClose: (id: number) => void;
}

const Program: React.FC<ProgramProps> = ({ program, handleClose }) => {
  return (
    <Rnd
      className={twMerge(
        'flex flex-col p-0.5 border-2 border-t-white border-l-white border-r-black border-b-black bg-app-gray absolute',
        program.active && 'z-10'
      )}
      dragHandleClassName="handle"
      minWidth={300}
      minHeight={200}
    >
      <header className="handle cursor-grab flex justify-between bg-app-blue text-white p-1">
        <h2 className="mr-4">{program.title}</h2>
        <Button
          className="justify-center w-6 h-6 text-black font-bold"
          onClick={() => handleClose(program.id)}
        >
          x
        </Button>
      </header>
      <div className="p-4">
        <h1>
          Welcome to my <b>portfolio</b>
        </h1>
      </div>
    </Rnd>
  );
};

export default Program;
