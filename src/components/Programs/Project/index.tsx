import Button from "../../Button";
import Title from "../../Title";
import Screenshots from "./Screenshots";

interface Link {
  text: string;
  link: string;
}

interface ProjectProps {
  screenshots: Array<string>;
  title: string;
  text: string;
  links: Array<Link>;
}

const Project: React.FC<ProjectProps> = ({
  screenshots,
  title,
  text,
  links,
}) => {
  return (
    <div className="flex flex-col h-full">
      <Screenshots screenshots={screenshots} />
      <Title>{title}</Title>
      <p>{text}</p>
      <ul className="flex mt-auto">
        {links.map((link) => (
          <li className="mr-2">
            <a href={link.link} target="_blank" rel="noreferrer">
              <Button>{link.text}</Button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
