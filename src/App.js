import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';

import './App.css';

function App() {
  return (
    <div className='w-full h-screen'>
    <Provider store={appStore}>
      <Body />
    </Provider>
    </div>
  );
}

export default App;
