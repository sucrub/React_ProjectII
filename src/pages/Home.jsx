import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import TestOne from './TestOne'
import TestTwo from './TestTwo'

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">1</Link>
                </li>
                <li>
                    <Link to="/home/1">2</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/home" element={<TestOne />}></Route>
            <Route path="/home/1" element={<TestTwo />}></Route>
        </Routes>
    </div>
  )
}

export default Home