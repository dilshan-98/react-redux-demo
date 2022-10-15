import './App.css';
import ReduxContainer from './components/ReduxContainer';
import { Provider } from "react-redux";
import store from './redux/store';
import { HooksReduxContainer } from './components/HooksReduxContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReduxContainer />
        <HooksReduxContainer />
      </div>
    </Provider>
  );
}

export default App;
