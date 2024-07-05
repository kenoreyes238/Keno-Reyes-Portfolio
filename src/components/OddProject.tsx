// import { useState } from "react";
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

function OddProject(props: projectProps) {
  // const [hasBack, setHasBack] = useState(false);

  const viewProject = () => {
    window.open(props.viewProject);
  }

  // const viewProjectBack = () => {
  //   window.open(props.viewProjectBack);
  // }

  return (
    <Row className="oddNum">
      <Col>
        <img src={props.projectImg} alt={props.imgAlt} />
        <h1>{props.projectNum}</h1>
      </Col>
      <Col className="description">
        <h3>{props.projectTitle}</h3>
        <h4>{props.projectInfo}</h4>
        <a onClick={viewProject}>
          <Button variant="dark">View {props.projectTitle}</Button>
        </a>
        {/* {hasBack ? 
          setHasBack(true);
          <a onClick={viewProjectBack}>
            <Button variant="dark">View {props.project</Button>
          </a>
        } */}
      </Col>
    </Row>
  )
}

export default OddProject