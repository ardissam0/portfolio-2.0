import './styles/App.css';
import {Route} from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Welcome />
      </Route>
    </div>
  );
}

export default App;
