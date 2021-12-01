import  NotFound from './pages/NotFound';
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <AllQuotes/>
      </Route>
      <Route path="/quotes" exact>
         <AllQuotes/>
      </Route>
      <Route path="/quotes/:quoteId">
       <QuoteDetails/>
      </Route>
      <Route path="/new-quote">
        <NewQuote/>
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
