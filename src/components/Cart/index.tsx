import { useContext } from "react";
import { CartContainer, CartItemContainer } from "./styles"
import { AppProvider } from "../../contexts/defaultContext";
import { v4 as uuidv4 } from "uuid"
import { BsFillTrashFill } from "react-icons/bs";
import iconCart from './../../assets/images/icon-cart.svg';



function convertToPrice(value: number): string {
  return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}



export const Cart = (props: { on: boolean }) => {

  const { cartItems, onClickRemoveCart } = useContext(AppProvider);

  const cartOn = props.on ? 1 : 0;
  return (
    <CartContainer on={cartOn}>

      <h5>Meus cafés&nbsp;<img src={iconCart} className='iconCart' /></h5>

      {!!cartItems && cartItems?.length > 0 ? cartItems?.map((item) => {

        return (

          <CartItemContainer key={uuidv4()}>
            <img src={item.image} alt={"product"} className="cart-item__image" />
            
            <div className="cart-item__desc">
              <h6>{item.name}</h6>
              <h4>{convertToPrice(item.price)}</h4>
            </div>
            <a href="#" className="cart-item__trashIcon" onClick={() => onClickRemoveCart(item.itemId)}>
              <BsFillTrashFill />
            </a>

          </CartItemContainer>);

      }) : <p>Não há produtos.</p>}


        <h4 id="cart__total">
          {!!cartItems && convertToPrice(
                              cartItems.reduce((prevPrice, currItem) => prevPrice + currItem.price, 0))}
        </h4>
    </CartContainer>
  );
}