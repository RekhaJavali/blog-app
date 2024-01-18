import React from "react";
import {TopBar} from "./Components/topBar/TopBar";
import { Home } from "./pages/home/Home";
import { Single } from "./pages/single/Single";
import {Write} from "./pages/write/Write";
import {Login} from "./pages/login/Login";
import {Register } from "./pages/register/Register";
import {Settings} from "./pages/settings/Settings";
import {Status} from "./pages/status/Status";

import { BrowserRouter, Routes,Route, Link} from "react-router-dom";
// import { Route, Switch } from "react-router";


function App() {
  const user = false;

  return (
    <>
      <BrowserRouter >
        <TopBar />
        <Routes>
          
          {/* <Switch> */}
            <Route path="/" element={<Home />}></Route>
            {/* <Route index element={<Home />}></Route> */}
            <Route path="/posts" element={<Home/>}></Route>
            <Route path="/register" element={ user? <Home />:<Register />}></Route>
            <Route path="/login" element={ user ? <Home /> : <Login />}></Route>
            <Route path="/settings" element={ user ? <Settings /> : <Login />}></Route>
            <Route path="/post/:id" element={ <Single /> } ></Route>
            <Route path="/write" element={ user ? <Write /> :<Login /> }></Route>
            <Route path="/status" element={ <Status/> }></Route>

            <Route path="*" element={<h1>Not found</h1>}></Route>
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
