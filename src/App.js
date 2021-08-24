import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './common/Header';
import Home from './common/Home';
import About from './aboutApp/About';
import Portfolio from './portfolioApp/Portfolio';
import Contact from './contactApp/Contact';
import Footer from './common/Footer';
import PageNotFound from './common/PageNotFound';
import data from './data/data.json';
import { useState } from 'react';


const App = () => {
  
  // const [ siteData ] = useState(JSON.parse(data));
  const [ siteData ] = useState(data);
  console.log(siteData);


  return (
    <div className="App">

      <BrowserRouter>
        <div className="app-container">
          <Header/>

          <Switch>
            {/* Home */}
            <Route exact path="/" component={Home} />

            {/* About */}
            {/* <Route path="/about" data={siteData} component={About}/> */}
            <Route path="/about" render={(props) => <About {...siteData} />}/>

            {/* Portfolio */}
            <Route path="/portfolio" component={Portfolio} />

            {/* Contact */}
            <Route path="/contact" component={Contact} />

            {/* 404 - Page not found */}
            <Route component={PageNotFound} />
          </Switch>

          {/* <About data={siteData} /> */}

          <Footer/>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
