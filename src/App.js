import './App.css';
import Feed from './Feed.js'
import Sidebar from './Sidebar.js'
import Widgets from './Widgets.js'
function App() {
  return (
    <div className="app">
        {/* SideBar */}
        <Sidebar/>
        {/* Feed */}
        <Feed/>
        {/* Widgets */}
        <Widgets/>
    </div>
  );
}

export default App;
