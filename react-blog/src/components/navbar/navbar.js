import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <img
                          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207'
                          width='30'
                          height='30'
                          className='d-inline-block align-top'
                          />
                          {' '}
                             React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>


        </>
    )
}


