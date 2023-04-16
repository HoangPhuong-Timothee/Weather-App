import React from 'react';
import Search from './components/search/Search';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  return (
   <div className='wrapper'>
    <div className='container'>
      <Search />
      <Content />
      <Footer />
    </div>
   </div>
  );
}

export default App;
