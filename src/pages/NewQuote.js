import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
const NewQuote = () => {
    const history = useHistory();
    const addQuoteHandler = quoteData => {
        console.log(quoteData);
        /**
         * With push you can go back to the back button
         * With replace we cannot.
         * Programmatically move it to the quotes page
         */
        history.push('/quotes');
    }
    return <QuoteForm onAddQuote={addQuoteHandler}/>
}
export default NewQuote;