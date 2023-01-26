import './App.css';
import Main from './components/Main'
import {Provider} from 'react-redux'
import { ConfigureStore } from './redux/configureStore'
import { BrowserRouter } from 'react-router-dom';

const store = ConfigureStore()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
