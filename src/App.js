import "./App.css";
import { Route } from "react-router-dom";
import MyForm from "./Form";
import ContainerOutsideExample from "./Navigation";
function App() {
  return (
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      <ContainerOutsideExample />
      <MyForm />
      <Route path="/login"></Route>
    </div>
  );
}

export default App;
