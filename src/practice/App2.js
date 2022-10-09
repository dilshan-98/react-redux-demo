import '../App.css';
import React from "react";
import { Provider } from "react-redux";
import store from './redux/store';
import Container from './components/container';

const App2 = () => {
    return (
        <Provider store={store}>
            <div className='App'>
                <Container />
            </div>
        </Provider>
    )
}

export default App2;