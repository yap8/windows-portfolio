import { Rnd } from "react-rnd";
import { twMerge } from "tailwind-merge";

import { Program as ProgramInterface } from "../../store/programs";
import Button from "../Button";

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
        "border-t-white border-2 border-l-white border-r-black border-b-black bg-app-gray",
        program.active && "z-10"
      )}
      default={{
        x: program.x || 50,
        y: program.y || 50,
        width: program.width || 500,
        height: program.height || 190,
      }}
      enableResizing={
        program.minWidth !== program.maxWidth &&
        program.minHeight !== program.maxHeight
      }
      dragHandleClassName="handle"
      minWidth={program.minWidth || 640}
      minHeight={program.minHeight || 320}
      maxWidth={program.maxWidth}
      maxHeight={program.maxHeight}
      onMouseDown={() => handleActive(program.slug)}
    >
      <div className="h-full flex flex-col p-0.5">
        <header className="handle cursor-grab flex justify-between bg-app-blue text-white p-1">
          <h2 className="mr-4">{program.title}</h2>
          <Button
            className="justify-center w-6 h-6 text-black font-bold"
            onClick={() => handleClose(program.slug)}
          >
            &#10006;
          </Button>
        </header>
        <div className="flex-1 p-4">{component}</div>
      </div>
    </Rnd>
  );
};

export default Program;
