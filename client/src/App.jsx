import React from 'react';
import ProductDetail from './components/ProductDetail/index.jsx';
import ItemsComparison from './components/itemsComparison/index.jsx';
import QA from './components/QA/QA.jsx';
import Ratings from './components/ratings/index.jsx';

const App = () => {
  return (
    <main>
      <ProductDetail />
      <ItemsComparison />
      <QA />
      <Ratings />
    </main>
  );
};

export default App;
