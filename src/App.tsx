
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './normalize.css'
import './App.css';
import { HomePage } from './presentation/pages/home/home';
import { Header } from './presentation/components/header/header';
import { header} from './assets/text/data.json'
import { CharacterPage } from './presentation/pages/character/character';

function App() {
  return (
     <Router>
        <Header
          logo={header.logo}
          menu={header.menu}
        />
      <Switch>
         <Route exact path="/"  component={ HomePage } />
         <Route exact path="/character/:id"  component={ CharacterPage } />
      </Switch>

    </Router>
  );
}

export default App;
