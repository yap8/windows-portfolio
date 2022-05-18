import { Rnd } from 'react-rnd';
import { twMerge } from 'tailwind-merge';

import { Program as ProgramInterface } from '../../store/programs';
import Button from '../Button';

interface ProgramProps {
  program: ProgramInterface;
  handleActive: (slug: string) => void;
  handleClose: (slug: string) => void;
  component: React.ReactNode;
}

const Program: React.FC<ProgramProps> = ({
  program,
  handleActive,
  handleClose,
  component,
}) => {
  return (
    <Rnd
      className={twMerge(
        'flex flex-col p-0.5 border-2 border-t-white border-l-white border-r-black border-b-black bg-app-gray absolute',
        program.active && 'z-10'
      )}
      dragHandleClassName="handle"
      minWidth={program.minWidth || 640}
      minHeight={program.minHeight || 320}
      maxWidth={program.maxWidth}
      maxHeight={program.maxHeight}
      onMouseDown={() => handleActive(program.slug)}
    >
      <header className="handle cursor-grab flex justify-between bg-app-blue text-white p-1">
        <h2 className="mr-4">{program.title}</h2>
        <Button
          className="justify-center w-6 h-6 text-black font-bold"
          onClick={() => handleClose(program.slug)}
        >
          x
        </Button>
      </header>
      <div className="p-4">{component}</div>
    </Rnd>
  );
};

export default Program;
