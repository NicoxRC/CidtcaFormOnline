import FormHome from "./components/formHome/FormHome";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/details/:id" component={DogDetails} /> */}
        <Route exact path="/crear" component={FormHome} />
      </Switch>
    </div>
  );
}

export default App;
