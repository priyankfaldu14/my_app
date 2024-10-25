import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Oscar from './Comp1'
import { createContext, Fragment, useState } from 'react';
// import Comp2 from './Comp2';
import { Comp2 } from './Comp2';
import { ClassComp } from './ClassComp';
import ImagesComp from './components/ImagesComp';
import StateFunction from './components/StateFunction';
import ClassState from './components/ClassState';
import PeraComp from './components/PeraComp';
import BasicExample from './components/BasicExample';
import CardPera from './components/CardPera';
import EventComp from './components/EventComp';
import Crud from './components/Crud';
import ConditionalRedender from './components/ConditionalRedender';
import Useref from './components/Useref';
import Mounting from './components/Mounting';
import Mount2 from './components/Mount2';
import UpdatingCycle from './components/UpdatingCycle';
import FuncLifeCycle from './components/FuncLifeCycle';
import UseMemoHook from './components/UseMemoHook';
import ReactMemo from './ReactMemo';
import PureComponent1 from './components/PureComponent1';
import PeraCallback from './components/PeraCallback';
import PeraButton from './components/PeraButton';

import About from './router/About';
import Contact from './router/Contact';
import PeraProps from './components/PeraProps';
import LocalStorage from './components/LocalStorage';
import ApiCrud from './components/ApiCrud';
import TokenApiCrud from './components/TokenApiCrud';
import FetchApi from './components/FetchApi';
import Home from './router/Home';
import Login from './router/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './router/NotFound';
import Contact1 from './router/Contact1';
import Contact2 from './router/Contac2';
import PeraContact from './router/PeraContact';
import FormRouter from './router/FormRouter';
import TableRouter from './router/TableRouter';
import Loader from './router/Loader';
import ReducerComp from './components/ReducerComp';
import FormReducer from './router/FormReducer';
import TableReducer from './router/TableReducer';

function App() {
  const [isLogin, setisLogin] = useState(JSON.parse(localStorage.getItem("login")))
  // console.log(isLogin);
  
  return (
    <div className=''>
      {/* <BrowserRouter>
        <Routes>
          {isLogin ?
            <>
              <Route path='/' element={<Navigate to={'/home'} />} />
              <Route path='/home' element={<Home isLogin={isLogin} setisLogin={setisLogin} />} />
              <Route path='/about' element={<About isLogin={isLogin} setisLogin={setisLogin}/>}>
                <Route path=':name' />
              </Route>
              <Route path='/contact' element={<Contact isLogin={isLogin} setisLogin={setisLogin}/>}>
                <Route path='' element={<PeraContact isLogin={isLogin}/>} setisLogin={setisLogin}/>
                <Route path='contact1' element={<Contact1 isLogin={isLogin} setisLogin={setisLogin}/>}>
                </Route>
                <Route path='contact2' element={<Contact2 isLogin={isLogin} setisLogin={setisLogin}/>} />
              </Route>
            </> : <>
            <Route path='/' element={<Navigate to={'/login'} />} />
              <Route path='/login' element={<Login setisLogin={setisLogin} isLogin={isLogin}/>} />
            </>
          }
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Loader/>
      // <BrowserRouter>
      //   <Routes>
      //     <Route path='/' element={<FormRouter/>}>
      //       <Route path=':id'/>
      //     </Route>
      //     <Route path='/table' element={<TableRouter/>}/>
      //   </Routes>
      // </BrowserRouter> */}
      {/* <ReducerComp/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormReducer/>}>
            <Route path=':id'/>
          </Route>
          <Route path='/table' element={<TableReducer/>}/>
        </Routes>
      </BrowserRouter> 
    </div >
  );
}

export default App;
