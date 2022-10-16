import './App.css';
import ReduxContainer from './components/ReduxContainer';
import { Provider } from "react-redux";
import store from './redux/store';
import { HooksReduxContainer } from './components/HooksReduxContainer';
import IceCreamReduxContainer from './components/IceCreamReduxContainer';
import FantaReduxContainer from './components/FantaReduxContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReduxContainer />
        <HooksReduxContainer />
        <IceCreamReduxContainer />
        <FantaReduxContainer />
      </div>
    </Provider>
  );
}

export default App;
