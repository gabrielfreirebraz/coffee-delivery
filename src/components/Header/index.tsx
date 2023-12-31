import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/images/starbucks-logo.svg';
import iconCart from './../../assets/images/icon-cart.svg';
import imgHistoria from './../../assets/images/sb-historias-logo.svg'
import { HeaderContainer } from './styles';
import { ButtonContainer } from '../Button/styles';
import { useContext } from 'react';
import { AppProvider } from '../../contexts/defaultContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

  const { setCartOn } = useContext(AppProvider);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} height={50} />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" onClick={() => navigate("/home")}>Menu</Nav.Link>
              <Nav.Link href="#">Rewards</Nav.Link>
              <Nav.Link href="#">Nosso café</Nav.Link>
              <Nav.Link href="#">Impacto social</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className='justify-content-end'>
            <div id='navRight'>
                <img src={imgHistoria} className='imgHistoria' />
                <img src={iconCart} className='iconCart' />
                <a href="#" onClick={() => setCartOn((c) => !c)}>Meus cafés</a>

                <ButtonContainer variant={'primary'}>Entrar</ButtonContainer>
                <ButtonContainer variant={'secondary'} outline={'true'}>Cadastre-se</ButtonContainer>
            </div>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </HeaderContainer>
  );
}