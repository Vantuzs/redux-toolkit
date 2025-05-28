import { Switch,Route } from "react-router-dom";
import CounterPage from "./pages/CounterPage/CounterPage";
import HomePage from "pages/HomePage/HomePage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/counter' component={CounterPage}/>
        <Route path='*' component={NotFoundPage}/>
      </Switch>
    </>
  );
}

export default App;
