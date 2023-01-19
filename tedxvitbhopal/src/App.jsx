import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from "./pages/About";
import Home from "./pages/Home";
import Team from "./pages/Team";

const App = () => {
    return(
        <>
            <Header />
            <Routes>
                <Route path='/' element={
                    <Home />
                } />
                <Route path='/about' element={
                    <About />
                } />
                <Route path='/team' element={
                    <Team />
                } />
                {/* add talks page here */}
                <Route path='/talks' element={
                    <></>
                } />
                {/* add not found error page here */}
                <Route path='/*' element={
                    <></>
                } />
            </Routes>
        </>
    );
}

export default App;