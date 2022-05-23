import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../../Button";

interface ScreenshotsProps {
  screenshots: Array<string>;
}

const Screenshots: React.FC<ScreenshotsProps> = ({ screenshots }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current < screenshots.length - 1) setCurrent(current + 1);
  };

  return (
    <div className="flex">
      <Button className="h-full mr-2" onClick={handlePrev}>
        {"<"}
      </Button>
      <ul className="h-72 flex-1 relative">
        {screenshots.map((screenshot, index) => (
          <li
            className={twMerge(
              "bg-app-darkgray h-full w-full absolute left-0 top-0",
              current === index && "z-10"
            )}
          >
            <img
              className="w-full h-full object-contain"
              src={screenshot}
              alt="Screenshot"
            />
          </li>
        ))}
      </ul>
      <Button className="h-full ml-2" onClick={handleNext}>
        {">"}
      </Button>
    </div>
  );
};

export default Screenshots;
