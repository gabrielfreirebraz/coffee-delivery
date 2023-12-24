import { useContext, useState } from "react";
import { Cart } from "../../components/Cart";
import { AppProvider, CheckoutProvider } from "../../contexts/defaultContext";
import { CheckoutContainer } from "./styles";
import { Col, Form, Row } from "react-bootstrap";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { MdOutlineAttachMoney, MdOutlineCheck } from "react-icons/md";
import { FormAddress } from "./FormAddress";
import { FormPayment } from "./FormPayment";
import { FormItems } from "./FormItems";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



export const Checkout = () => {

  const { cartOn, onClickRemoveCart } = useContext(AppProvider);
  const navigate = useNavigate();
  const hookForm = useForm();

  const providerHookForm = {
    register: hookForm.register,
    handleSubmit: hookForm.handleSubmit,
    watch: hookForm.watch,
    formState: hookForm.formState,
    control: hookForm.control
  }

  const onSubmit = (data: any): void => { 
    console.log(data)
    onClickRemoveCart(null); // limpar carrinho de compras
    navigate("/success", {replace: true, state: data});
  }

  return  (
      <CheckoutProvider.Provider value={providerHookForm}>
        <CheckoutContainer>
          <Form onSubmit={providerHookForm.handleSubmit(onSubmit)}>
            <Row>
              <div className="title-checkout">
                <h5>Complete o seu pedido</h5>
              </div>
            </Row>
            <Row>
              <Col md={2} />
              <Col md={8}>
                <div id="checkout">
                  <div className="blocks-1">
                    <div className="block">
                      <h5><LiaMapMarkerSolid />&nbsp;Endereço de entrega</h5>
                      <h6>Informe o endereço onde deseja receber seu pedido</h6>  

                      <FormAddress/>
                    </div>

                    <div className="block">
                      <h5><MdOutlineAttachMoney />&nbsp;Pagamento</h5>
                      <h6>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</h6>

                      <FormPayment/>
                    </div>
                  </div>

                  <div className="blocks-2">
                    <div className="block">
                      <h5><MdOutlineCheck />&nbsp;Cafés selecionados</h5>
                      
                      <FormItems/>
                    </div>
                  </div>
                  
                </div>
              </Col>
            </Row>
          </Form>


          <Cart on={cartOn}></Cart>
        </CheckoutContainer>
      </CheckoutProvider.Provider>
  );
}
