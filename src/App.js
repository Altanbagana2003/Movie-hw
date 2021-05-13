import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SecondPage from "./components/secondPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Body />
          </Route>
          <Route path="/gg">
            <SecondPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
