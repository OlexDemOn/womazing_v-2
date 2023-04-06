import Header from './component/header/header';
import './styles/index.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/home/home';
import Footer from './component/footer/footer';
import Shop from './component/shop/shop';
import BuyItem from './component/buy_item/buy_item';
import AboutBrand from './component/about_brand/about_brand';
import Bin from './component/bin/bin';
import Contacts from './component/contacts/contacts';
import ScrollToTop from './component/scroll_to_top/scroll_to_top';
import Checkout from './component/checkout/checkout';

function App() {

    return (
        <Router>
            <ScrollToTop />
            <div className='main-block'>
                <Header />
                <div className='container'>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/shop">
                            <Shop />
                        </Route>
                        <Route path="/buyitem">
                            <BuyItem />
                        </Route>
                        <Route path="/about_brand">
                            <AboutBrand />
                        </Route>
                        <Route path="/bin">
                            <Bin />
                        </Route>
                        <Route path="/contacts">
                            <Contacts />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
