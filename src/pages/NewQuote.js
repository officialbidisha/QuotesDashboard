import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/lib/api';
import { useEffect } from 'react';
const NewQuote = () => {
    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();

    useEffect(()=>{
        if(status === 'completed'){
        /**
         * With push you can go back to the back button
         * With replace we cannot.
         * Programmatically move it to the quotes page
         */
            history.push('/quotes');
        }
    }, [status, history])

    const addQuoteHandler = quoteData => {
        sendRequest(quoteData);

        // console.log(quoteData);

    }
    return <QuoteForm  isLoading = {status === 'pending'} onAddQuote={addQuoteHandler}/>
}
export default NewQuote;