interface TechnologiesProps {
  technologies: Array<string>;
}

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <ul className="flex flex-wrap mb-1">
      {technologies.map((technology) => (
        <li className="bg-app-darkgray py-1 px-2 mr-1 mb-1">{technology}</li>
      ))}
    </ul>
  );
};

export default Technologies;
