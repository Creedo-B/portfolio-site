import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/Header';
import Home from './common/Home';
import About from './aboutApp/About';
import Portfolio from './portfolioApp/Portfolio';
import Contact from './contactApp/Contact';
import Footer from './common/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className="app-container">

          <Header/>
          
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/about">
          {/* About App */}
            <About/>
          </Route>

          <Route path="/about">
          {/* Portfolio App */}
            <Portfolio/>
          </Route>

          <Route path="/about">
          {/* Contact App */}
            <Contact/>
          </Route>

          <Footer/>

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
