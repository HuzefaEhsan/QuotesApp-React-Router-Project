/***************************************************************************************
 *    Title: QuotesApp source code
 *    Author: Huzefa Ehsan
 *    Date: 28-10-2022
 *    Code version: 0.1
 *    Availability: https://github.com/HuzefaEhsan
 *
 ***************************************************************************************/

import { Routes, Route, Navigate } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={'quotes'} />} />
        <Route path="quotes" element={<AllQuotes />} />
        <Route path="quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
