import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import {HomePage} from './pages/home-page'
import { CakePage } from "./pages/home-page/cake-page";
import {Header} from './components/header'
import {store} from "./redux"
import {OrderPage} from "./pages/order-page"



function App() {
  return (
    <Provider store = {store}>
    <Router>
      <div className="wrapper">
         <div className="App">
          <Header/>
           <Routes>
           <Route path='/' element= {<HomePage/>}></Route>
           <Route path='/app/:title' element= {<CakePage/>}></Route>
           <Route path='/order' element= {<OrderPage/>}></Route>
    
    </Routes>
    </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
