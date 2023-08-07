import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./pages";
import DetailContact from "./pages/detail";
import Form from "./pages/form";
import LayoutWrapper from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <LayoutWrapper>
              <ContactList />
            </LayoutWrapper>
          }
          exact
          path="/"
        />
        <Route
          element={
            <LayoutWrapper>
              <DetailContact />
            </LayoutWrapper>
          }
          path="/detail/:id"
        />
        <Route
          element={
            <LayoutWrapper>
              <Form />
            </LayoutWrapper>
          }
          path="/form"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
