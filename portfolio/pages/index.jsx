import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Index = ({
 title = "duniaknows"
}) => (
  <div>
    <h1>{title}<span>code</span></h1>
    <h2>Frontend mary | Web lime rickey | Developer cubilia sapien</h2>
    <FaTwitterSquare/> <FaLinkedin/> <FaGithubSquare/>
  </div>
);
export default Index
