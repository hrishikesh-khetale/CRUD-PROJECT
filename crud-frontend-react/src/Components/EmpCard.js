import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function EmpCard(props) {

  let { id, name, email, department } = props.props
  const navigate = useNavigate()
  let handleClick = () => { navigate(-1) }
  return (
    <Card style={{ width: '18rem' }} >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Id ={id}
        </Card.Text>
        <Card.Text>
          Email ={email}
        </Card.Text>
        <Card.Text>
          Department ={department}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Back</Button>
      </Card.Body>
    </Card>
  );
}

export default EmpCard;