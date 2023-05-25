import { TTechnology } from "@/@type";
import MySQLIcon from "../SVGJSXElement/MySQLIcon";

const MySQL = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a
    href="https://www.mysql.com/"
    className={classes}
    target="_blank"
    aria-label="mysql"
  >
    <MySQLIcon classes={svgClasses} />
  </a>
);

export default MySQL;
