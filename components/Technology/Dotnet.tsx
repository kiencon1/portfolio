import { TTechnology } from "@/@type";
import DotnetIcon from "../SVGJSXElement/DotnetIcon";

const Dotnet = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a
    href="https://dotnet.microsoft.com/en-us/"
    className={classes}
    target="_blank"
    aria-label="dotnet"
  >
    <DotnetIcon classes={svgClasses} />
  </a>
);

export default Dotnet;
