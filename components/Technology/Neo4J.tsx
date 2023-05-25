import { TTechnology } from "@/@type";
import Neo4JIcon from "@/components/SVGJSXElement/Neo4JIcon";

const Neo4J = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a
    href="https://nextjs.org/"
    className={classes}
    target="_blank"
    aria-label="neo4j"
  >
    <Neo4JIcon classes={svgClasses} />
  </a>
);

export default Neo4J;
