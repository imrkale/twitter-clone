import './App.css';
import Feed from './Feed.js'
import Sidebar from './Sidebar.js'
import Widgets from './Widgets.js'
import News from './News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        {/* SideBar */}
        <Sidebar/>
        
        
        <Switch>
          <Route path="">
              {/* Feed */}
              <News/>
          </Route>
          <Route path="/news">
              {/* News */}
              <Feed/>
          </Route>
        </Switch>
        {/* Widgets */}
        <Widgets/>

      </Router>
        
    </div>
  );
}

export default App;
