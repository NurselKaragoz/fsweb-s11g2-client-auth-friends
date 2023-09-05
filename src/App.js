import "./App.css";
import MyForm from "./Form";
import ContainerOutsideExample from "./Navigation";
import FriendList from "./FriendList";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ContainerOutsideExample />
      <MyForm />
      <Switch>
        <Route path="/login" exact component={App} />
        <Route path="/friends" exact component={FriendList} />
      </Switch>
    </div>
  );
}

export default App;
