import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import AuthProvider from "./contexts/AuthProvider.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Reset from "./pages/Reset.js";
import HomeContainer from "./components/HomeContainer.js";
import PlaceOrder from "./pages/PlaceOrder.js";
import PrivateRoute from "./privateRoute/PrivateRoute.js";
import MyOrders from "./pages/MyOrders.js";
import ManageAllOrders from "./pages/ManageAllOrders.js";
import AddService from "./pages/AddService.js";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <HomeContainer></HomeContainer>
            </Route>

            <Route exact path="/home">
              <HomeContainer></HomeContainer>
            </Route>

            <Route path="/reset">
              <Reset></Reset>
            </Route>

            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/service/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/manageorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
