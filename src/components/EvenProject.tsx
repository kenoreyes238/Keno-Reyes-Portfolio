import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

interface projectProps {
    imgAlt: string;
    projectNum: string;
    projectTitle: string;
    projectInfo: string;
    projectImg: string;
    viewProject: string;
  }

function EvenProject(props) {

    const viewProject = () => {
        window.open(props.viewProject);
      }

  return (
    <Row className="evenNum">
        <Col className="description">
            <h3>{props.projectTitle}</h3>
            <h4>{props.projectInfo}</h4>
            <a onClick={viewProject}>
            <Button variant="dark">View {props.projectTitle}</Button>
            </a>
        </Col>
        <Col>
            <img src={props.projectImg} alt={props.imgAlt} />
            <h1>{props.projectNum}</h1>
      </Col>
    </Row>
  )
}

export default EvenProject