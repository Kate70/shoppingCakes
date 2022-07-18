import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import {HomePage} from './pages/home-page'
import {Header} from './components/header'


function App() {
  return (
    <Router>
         <div className="App">
          <Header/>
           <Routes>
           <Route path='/' element= {<HomePage/>}></Route>
    
    </Routes>
    </div>
    </Router>
  );
}

export default App;
