import "./App.css";
import Navbar from "./Components/Navbar";

import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div>
          <Switch>
            <Route exact path="/">
              <h1>Welcome to GhibliApp</h1>
            </Route>

            <Route path="/movies" component={Movies}></Route>
            <Route path="/people" component={People}></Route>
            <Route path="/locations" component={Locations}></Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
