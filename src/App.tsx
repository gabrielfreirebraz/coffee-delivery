// import { ThemeProvider } from "styled-components"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { AppProvider } from "./contexts/defaultContext"
import { useState } from "react"
import { products } from "./api/products"

function App() {

  const [cartItems, setCartItems] = useState<TCartItem[] | null>(null);

  const onClickAddCart = (newItem: TCartItem) => {
    setCartItems((items) => items && [...items, newItem], );
  }

  const providerProps: IProviderProps = {
    products,
    cartItems,
    onClickAddCart
  };

  return (    
    <ThemeProvider theme={defaultTheme}>      
      <AppProvider.Provider value={providerProps}>
        <Router />
        <GlobalStyle />
      </AppProvider.Provider>
    </ThemeProvider>
  )
}

export default App
