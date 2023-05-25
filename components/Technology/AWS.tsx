import { TTechnology } from "@/@type";
import AWSIcon from "../SVGJSXElement/AWSIcon";

const AWS = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a
    href="https://aws.amazon.com/"
    className={classes}
    target="_blank"
    aria-label="aws"
  >
    <AWSIcon classes={svgClasses} />
  </a>
);

export default AWS;
