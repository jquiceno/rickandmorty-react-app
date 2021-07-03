import { GlobalStyles } from './GlobalStyles'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './views'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route exact path = "/" component = {Home} />
      </BrowserRouter>
    </>
  );
}

export default App;