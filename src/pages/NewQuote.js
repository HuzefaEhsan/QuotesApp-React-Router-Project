/***************************************************************************************
 *    Title: QuotesApp source code
 *    Author: Huzefa Ehsan
 *    Date: 28-10-2022
 *    Code version: 0.1
 *    Availability: https://github.com/HuzefaEhsan
 *
 ***************************************************************************************/

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = function () {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'completed') navigate('/quotes');
  }, [status, navigate]);

  const addQuoteHandler = function (quoteData) {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
