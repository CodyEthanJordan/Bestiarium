import {Switch, Route} from 'react-router-dom'

import Main from './components/Main'

function App() {
  return (
    <div>

      <Switch>

        <Route exact path='/'>
          <Main/>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
