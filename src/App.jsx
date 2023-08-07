import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./pages";
import DetailContact from "./pages/Detail";
import Form from "./pages/Form";
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
          path="/add"
        />
        <Route
          element={
            <LayoutWrapper>
              <Form />
            </LayoutWrapper>
          }
          path="/edit/:id"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
