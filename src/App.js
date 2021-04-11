import {Switch, Route} from 'react-router-dom'

import MainComponent from './components/MainComponent'

function App() {
  return (
    <div>

      <Switch>

        <Route exact path='/'>
          <MainComponent/>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
