import Card from 'react-bootstrap/Card';

interface JobCardProps {
    jobTitle: string;
    time: string;
    description: string;
  }

function JobCard(props: JobCardProps) {
  return (
    <Card className="jobCard">
      <Card.Body>
        <Card.Title>{props.jobTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.time}</Card.Subtitle>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default JobCard