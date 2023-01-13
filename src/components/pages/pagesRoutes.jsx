import React from 'react';
import { Routes, Route,} from 'react-router-dom'
import { Dashboard } from './Dashboard/dashboard';
const Pageroute = () => {
  return (
    <>
      <Routes>
          <Route path="" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  )
}

export default Pageroute;