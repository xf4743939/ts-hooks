import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import 'antd/dist/antd.less'
import './App.less';
import Login from './view/login/index'
import Home from './view//Home/index';

function App() {
  return (
    <div className="App">
       <Router>
         <div>
           <Link to="/">首页</Link>
           <Link to="/login">登录页</Link>
         </div>
         <Route path="/" exact component={Home}></Route>
         <Route path="/login" component={Login} />
       </Router>
    </div>
  );
}

export default App;
