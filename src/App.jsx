import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import ContactList from "./pages";
import FormComponent from "./pages/Form";
import LoginComponent from "./pages/Login";
import LayoutWrapper from "./components/Layout";
import { useState } from "react";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <LayoutWrapper>
              <LoginComponent />
            </LayoutWrapper>
          }
          path="/login"
        />
        <Route element={<ProtectedRoute user={user} />}>
          <Route
            index
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
