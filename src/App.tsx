import { GlobalStyles } from "./themes";
import { Rotas } from "./routes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./data";
import "react-toastify/dist/ReactToastify.css";
import { ProductProvider } from "data/ProductContext";
import { UserProvider } from "data/LoginContext";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <AppProvider>
          <ProductProvider>
            <UserProvider>
              <GlobalStyles />
              <Rotas />
            </UserProvider>
          </ProductProvider>
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
