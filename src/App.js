import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './common/Header';
import Home from './common/Home';
import About from './aboutApp/About';
import Portfolio from './portfolioApp/Portfolio';
import Contact from './contactApp/Contact';
import Footer from './common/Footer';
import PageNotFound from './common/PageNotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className="app-container">
          <Header/>

          <Switch>
            {/* Home */}
            <Route exact path="/" component={Home} />

            {/* About */}
            <Route path="/about" component={About} />

            {/*  */}
            <Route path="/portfolio"  component={Portfolio} />

            {/*  */}
            <Route path="/contact" component={Contact} />

            {/* 404 - Page not found */}
            <Route component={PageNotFound} />
          </Switch>

          <Footer/>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
