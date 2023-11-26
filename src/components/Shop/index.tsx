import { Card, Col, Row } from "react-bootstrap";
import { ButtonContainer } from "../Button/styles";
import { Quantity } from "../Quantity";
import { products } from "../../api/products";

import coffee6 from './../../assets/images/shop/coffee6.jpeg';
import coffee7 from './../../assets/images/shop/coffee7.jpeg';
import coffee8 from './../../assets/images/shop/coffee8.jpeg';
import { AppProvider, CardProvider } from "../../contexts/defaultContext";
import { useContext, useState } from "react";



function CardItem(product: TProduct) {

  const [quantity, setQuantity] = useState(1);
  const [newPrice, setNewPrice] = useState(product.price);

  const { onClickAddCart }: IAppContext = useContext(AppProvider);

  function addItem() {
    setQuantity(v => v = v+1);
    setNewPrice(p => p = p + product.price);
  }

  function subtractItem() {
    setQuantity(v => v = (v > 1 ? v-1 : v));
    setNewPrice(p => p = p === product.price ? p : p - product.price);
  }

  function onChangeQuantity(newValue: number | string) {
    const newValueAsNumber = Number(newValue);
    setQuantity(v => newValueAsNumber > 0 ? newValueAsNumber : v);
    setNewPrice(p => newValueAsNumber > 0 ? product.price * newValueAsNumber : p);
  }

  const providerProps = {
    quantity,
    newPrice,
    addItem,
    subtractItem,
    onChangeQuantity
  }

  return (
    <CardProvider.Provider value={providerProps}>
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.desc}

            <Quantity />
          </Card.Text>

          <ButtonContainer variant={"default"} onClick={() => onClickAddCart(product)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
            </svg>&nbsp;
            quero meu café
          </ButtonContainer>
        </Card.Body>
      </Card>
    </CardProvider.Provider>
  );
}



export const Shop = () => {

  
  
  return (
    <>
      {/* // ---------------------- TITLE SHOP */}

      <Row>
        <Col md={12}>
          <div id="title-shop">
            <h5>
              “A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.”
            </h5>
            <h5>
              Receba seu cafézinho em casa usando seu Starbucks Rewards
            </h5>
          </div>
        </Col>
      </Row>

    
      {/* // ---------------------- LINE 1 */}

      <Row>
        <Col>
          <div className="sub-title-shop"><div className='traco' /><h5>Lançamentos</h5><div className='traco' /></div>
        </Col>
      </Row>


      <Row>
        
        {products.map((CardProductItem: TProduct, i) => {
          
            return (

              <Col key={i}>
                <CardItem {...CardProductItem } />
              </Col>
            );
        })}
       
    </Row>


    {/* // ---------------------- LINE 2 */}

    <Row>
        <Col>
          <div className="sub-title-shop"><div className='traco' /><h5>Frappuccinos</h5><div className='traco' /></div>
        </Col>
      </Row>


    <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={coffee6} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
              </Card.Text>
              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café</ButtonContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={coffee7} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
              </Card.Text>
              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café</ButtonContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={coffee8} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
              </Card.Text>
              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café</ButtonContainer>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </>
  );
}