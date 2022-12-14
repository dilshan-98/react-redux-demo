import './App.css';
import ReduxContainer from './components/ReduxContainer';
import { Provider } from "react-redux";
import store from './redux/store';
import { HooksReduxContainer } from './components/HooksReduxContainer';
import IceCreamReduxContainer from './components/IceCreamReduxContainer';
import FantaReduxContainer from './components/FantaReduxContainer';
import NewReduxContainer from './components/NewReduxContainer';
import ItemsContainer from './components/ItemsContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemsContainer />
        <ItemsContainer cake />
        <NewReduxContainer />
        <HooksReduxContainer />
        <IceCreamReduxContainer />
        <FantaReduxContainer />
      </div>
    </Provider>
  );
}

export default App;
