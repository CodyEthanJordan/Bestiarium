import {Switch, Route} from 'react-router-dom'

import MainComponent from './components/MainComponent'
import TestType from './components/TestType'

function App() {
  return (
    <div>

      <Switch>

        <Route exact path='/'>
          <MainComponent/>
        </Route>

        <Route path="/test">
          <TestType/>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
