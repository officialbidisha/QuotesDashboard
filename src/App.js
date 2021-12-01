
import * as React from "react";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import LoadingSpinner from './components/UI/LoadingSpinner';
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
function App() {
  return (
    <Layout>
        <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }
      >
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
    </Suspense>
    </Layout>
  );
}

export default App;
