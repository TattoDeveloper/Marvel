
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './normalize.css'
import './App.css';
import { HomePage } from './presentation/pages/home/home';
import { Header } from './presentation/components/header/header';
import { header} from './assets/text/data.json'
import { CharacterPage } from './presentation/pages/character/character';
import { footer } from './assets/text/data.json'
import TagManager from 'react-gtm-module'

console.log(process.env.REACT_APP_GTM_ID)

TagManager.initialize({
  gtmId: process.env.REACT_APP_GTM_ID as string,
  auth: process.env.REACT_APP_GTM_AUTH as string,
  preview: process.env.REACT_APP_GTM_PREVIEW as string,
})


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

      <footer>
          <img src={footer.image}  alt=""/>
          <p>{footer.text}</p>
      </footer>
    </Router>
  );
}

export default App;
