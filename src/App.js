import React from 'react';
import './static/app.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './comps/header/Header';
import Body from './comps/body/Body';
function App() {
  return (
    <div className="App">
      <div className='app_content'>
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
