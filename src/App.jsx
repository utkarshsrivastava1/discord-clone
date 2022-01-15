import React from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'

function App() {
    return (
        <div className="app">
            <h1 className="font-main">Hello world</h1>
            <h2 className="font-sec text-3xl">jakar</h2>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
