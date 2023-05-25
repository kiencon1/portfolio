import { TTechnology } from "@/@type";
import CouchDBIcon from "../SVGJSXElement/CouchDBIcon";

const CouchDB = ({ svgClasses, classes = "inline-block m-2" }: TTechnology) => (
  <a
    href="https://couchdb.apache.org/"
    className={classes}
    target="_blank"
    aria-label="couchdb"
  >
    <CouchDBIcon classes={svgClasses} />
  </a>
);

export default CouchDB;
