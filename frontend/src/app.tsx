import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { ProtectedLayout } from "./components/protectedLayout";

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main className="md:mx-[10%] flex flex-col gap-8">
          <Routes>
            <Route path='/' Component={HomePage} />
            
            <Route path="/cart" element={
              <ProtectedLayout>
                <CartPage />
              </ProtectedLayout>
            }/>

          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}