import { useContext, useState, memo, useEffect } from "react";
import { Quantity } from "../../Quantity";
import { AppProvider, CardProvider } from "../../../contexts/defaultContext";
import { Card } from "react-bootstrap";
import { ButtonContainer } from "../../Button/styles";



export const ProductItem = memo((product: IProduct) => {

  const [currentQuantity, setQuantity] = useState<number>(product.quantity ?? 1);
  const [currentPrice, setCurrentPrice] = useState<number>(product.price ?? 0);
  const [updatedItemToCart, setUpdatedItemToCart] = useState<IProduct>(product); 

  const { onClickAddCart }: IAppContext = useContext(AppProvider);

  useEffect(() => {
    setUpdatedItemToCart((p: IProduct) => { 
      return { ...p, price: currentPrice, quantity: currentQuantity } 
    });

  }, [currentQuantity, currentPrice]);

  function addItem() {
    setCurrentPrice((p: number) => p + product.price);    
    setQuantity((v: number) => v+1);
  }

  function subtractItem() {
    setQuantity((v: number) => (v > 1 ? v-1 : v));
    setCurrentPrice((p: number) => p === product.price ? p : p - product.price );
  }

  function onChangeQuantity(newValue: number | string) {
    const newValueAsNumber = Number(newValue);
    setQuantity(v => newValueAsNumber > 0 ? newValueAsNumber : v );
    setCurrentPrice(p => newValueAsNumber > 0 ? product.price * newValueAsNumber : p);
  }

  const providerProps = {
    currentQuantity,
    currentPrice,
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

          <ButtonContainer variant={"default"} onClick={() => onClickAddCart(updatedItemToCart)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
            </svg>&nbsp;
            quero meu café
          </ButtonContainer>
        </Card.Body>
      </Card>
    </CardProvider.Provider>
  );
});

