import { GlobalStyles } from './GlobalStyles'
import { BrowserRouter, Route } from 'react-router-dom'
import { Characters } from './views'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route exact path = "/" component = {Characters} />
      </BrowserRouter>
    </>
  );
}

export default App;