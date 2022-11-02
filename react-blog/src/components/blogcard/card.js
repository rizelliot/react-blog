import { Button, Card } from 'react-bootstrap';

export default function BlogCard() {
    return (
        <div>
        <Card style={{width: '13rem'}}>
            <Card.Img variant='top' src='https://via.placeholder.com/150'></Card.Img>
            <Card.Body>
        <Card.Title>Blog Header</Card.Title>
        <Card.Text>
            ablblalbalblablablalbalblablablablablablablablablbalbalbalbl
        </Card.Text>
            <Button variant='primary'>Read more</Button>
            </Card.Body>
        </Card>
        </div>
    )
}



