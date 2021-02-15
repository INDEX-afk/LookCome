import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Image, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './assets/image/LogoNuevo.png';
import Mascarilla from './assets/image/personasCovid.png';
import Adulto from './assets/image/adulto.png';
import Cliente from './assets/image/cliente.png';
import Group1 from './assets/image/Group30.png';
import Group2 from './assets/image/Group31.png';
import Group3 from './assets/image/Group32.png';
import Group4 from './assets/image/Group33.png';
import Group5 from './assets/image/Group34.png';
import Group6 from './assets/image/Group35.png';
import Group7 from './assets/image/Group36.png';
import Dueno from './assets/image/dueño.png';


function App() {
  return(
    <>
    <Row>
      <Col xs lg="9">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"><Image src={Logo} rounded /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col xs lg="4">
            <h3>¿Vas a Salir?</h3>
            <p>¡No te expongas sin antes evaluar que entornos comerciales velan por ti!</p>
            <Button variant="success">Ir a la pagina</Button>{' '}
          </Col>


        </Row>
      </Container>
      </Col>
       <Col xs lg="2">
          <Image src={Mascarilla} rounded style={{
            height: 360
          }} />
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col xs lg="6">
          <Image src={Adulto} rounded style={{
            height: 360,
            marginLeft: 200
          }} />
      </Col>
      <Col xs lg="6">
          <h5>01. Acerca de</h5>
          <h4>Revolucionamos la forma de “Vitrinear” para que sea más segura</h4>
          <p>Somos una plataforma virtual integrada por los restaurantes más comprometidos con tu bienestar. Elimina tus preocupaciones y ahorra tiempo vitrineando desde la comodidad de tu casa.</p>
      </Col>
    </Row>
    <Row className="justify-content-lg-center" style={{
      marginTop: 100,
      marginBottom: 100
    }}>
          <h2>¿Como Funciona?</h2>
    </Row>
    <Row className="justify-content-md-center">
      <Col>
        <Image src={Cliente} roundedCircle style={{
          width: 300,
          height: 300,
          marginLeft: 200
        }}/>
      </Col>
      <Col style={{
        marginTop: 60
      }}>
        <h4>Si eres un cliente</h4>
        <p><b>1.</b>Visita nuestra página web www.lookandcome.com </p>
        <p><b>2.</b>Selecciona la ciudad desde donde quieres comer o comprar </p>
        <p><b>3.</b>Visita una variedad de restaurantes y tiendas desde la comodidad  y la seguridad de tu casa. </p>
      </Col>
    </Row>

    <Row className="justify-content-lg-center" style={{
      marginTop: 60,
      marginBottom: 30
    }}>
      <h2 className="text-success">¿Que beneficios obtengo como cliente?</h2>
    </Row>

    <Row className=" justify-content-md-center">
      <Col xs lg="4" className="text-center">
        <Image src={Group1} roundedCircle style={{
          width: 150,
          height: 150
        }}/>
        <p>Estarás más seguro en nuestros establecimientos afiliados. Encuentra 
          de forma rápida los restaurantes que cumplen con los protocolos de Bio-seguridad.
        </p>
      </Col>
      <Col xs lg="4"  className="text-center">
        <Image src={Group2} roundedCircle style={{
          width: 150,
          height: 150
        }}/>
        <p>
           Planea tus salidas con ayuda de nuestros servicios de streaming en vivo. Revisa si los restaurantes están abiertos y si tienen cupo.  ¡Con Look & Come no perderás la ida!
        </p>
      </Col>
      <Col xs lg="4"  className="text-center">
        <Image src={Group3} roundedCircle style={{
          width: 150,
          height: 150
        }}/>
        <p>
          Disfruta de contenido original de tus marcas favoritas. Escucha lo que las tiendas y restaurantes tienen para decirte de una manera muy entretenida.
        </p>
      </Col>
    </Row>

    <Row className="justify-content-md-center" style={{
      marginTop: 60
    }}>
      <Col>
        <Image src={Dueno} roundedCircle style={{
          width: 280,
          height: 300,
          marginLeft: 200
        }}/>
      </Col>
      <Col style={{
        marginTop: 60
      }}>
        <h4>Si eres dueño de un negocio</h4>
        <p><b>1.</b>Visita nuestra página web www.lookandcome.com/afiliados </p>
        <p><b>2.</b>Diligencia el formulario de inscripción para afiliados </p>
        <p><b>3.</b>Visitaremos tu establecimiento para llevar tu negocio a otro nivel de bio-seguridad y a nuestra plataforma. </p>
      </Col>
    </Row>

    <Row className="justify-content-lg-center" style={{
      marginTop: 60,
      marginBottom: 30
    }}>
      <h2 className="text-success">¿Que beneficios obtengo como dueño?</h2>
    </Row>

    <Row className=" justify-content-md-center">
      <Col xs lg="4" className="text-center">
        <Image src={Group4} roundedCircle style={{
          width: 150,
          height: 150
        }}/>
        <p>
          LLeva tu negocio a otro nivel de seguridad para tus clientes. En look & Come te brindamos las asesorías que necesitamos para hacer de tu entorno algo Super bio-seguro
        </p>
      </Col>
      <Col xs lg="4"  className="text-center">
        <Image src={Group5} roundedCircle style={{
          width: 150,
          height: 150
        }}/>
        <p>
          Posiciona tu negocio en nuestra plataforma y se la diferencia entre tu y tu competencia. Recupera y mejora la confianza en tus clientes haciendo parte de look and come.
        </p>
      </Col>
      <Col xs lg="4"  className="text-center">
        <Image src={Group6} roundedCircle style={{
          width: 150,
          height: 150
        }}/>
        <p>
          Comparte contenido creativo desde nuestra plataforma online. Es hora de fortalecer la relación negocio - cliente.
        </p>
      </Col>
    </Row>

    <Row className="justify-content-lg-center" style={{
      marginTop: 30
    }}>
      <Col>
        <Image src={Logo} rounded />
      </Col>
      <Col className="text-right" style={{
      marginTop: 10
    }}>
        <a href="https://www.facebook.com/" style={{ marginRight: 2}}><Button variant="outline-primary">Facebook</Button></a>
        <a href="https://www.instagram.com/" style={{ marginRight: 2}}><Button variant="outline-secondary">Instagram</Button></a>
        <a href="https://www.gmail.com/"><Button variant="outline-info">Correo</Button></a>
      </Col>
    </Row>
   </>
  );

}

export default App;
