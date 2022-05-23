import Project from "../Project";
import { portfolio } from "./data";

const Portfolio = () => {
  return (
    <Project
      screenshots={portfolio.screenshots}
      title={portfolio.title}
      text={portfolio.text}
      technologies={portfolio.technologies}
      links={portfolio.links}
    />
  );
};

export default Portfolio;
