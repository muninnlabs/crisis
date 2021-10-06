import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/mainPage';
import SingleEvent from './components/singleEvent/singleEvent';
import Footer from './components/footer/footer';

import 'antd/dist/antd.css';
import './style.css';

function App() {
    return (
        <Provider store={store}>
            <section className='container-fluid'>
                <a href="/">Home</a>
                <Router>
                    <Switch>
                        <Route exact  path="/" component={MainPage} />
                        <Route path="/event/:id" component={SingleEvent} />
                    </Switch>
                </Router>
                <Footer />
            </section>
        </Provider>
    );
}

export default App;
