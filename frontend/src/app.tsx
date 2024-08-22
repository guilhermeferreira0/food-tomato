import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { ProtectedLayout } from "./components/protectedLayout";
import { ProductsProvider } from "./contexts/ProductsContext";
import { ProductsPage } from "./components/products";

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Header />
          <ProductsProvider>
          <main className="md:mx-[10%] flex flex-col gap-8">
            <Routes>
              <Route path='/' element={<HomePage />} />
              
              <Route path="/cart" element={
                <ProtectedLayout>
                  <CartPage />
                </ProtectedLayout>
              }/>

              <Route path='/products' element={<ProductsPage />} />

            </Routes>
          </main>
        </ProductsProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}