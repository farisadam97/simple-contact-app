import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ContactList from "./pages";
import FormComponent from "./pages/Form";
import LayoutWrapper from "./components/Layout";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }
};

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
              <FormComponent />
            </LayoutWrapper>
          }
          path="/add"
        />
        <Route
          path="/edit/:userId"
          element={
            <LayoutWrapper>
              <FormComponent />
            </LayoutWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
