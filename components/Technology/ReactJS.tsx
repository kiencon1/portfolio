import { TTechnology } from "@/@type";
import ReactIcon from "../SVGJSXElement/ReactIcon";

const ReactJS = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a
    href="https://react.dev/"
    className={classes}
    target="_blank"
    aria-label="reactjs"
  >
    <ReactIcon classes={svgClasses} />
  </a>
);

export default ReactJS;
