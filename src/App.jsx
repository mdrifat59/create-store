import React from 'react' 
import './App.css'
import CreateStore from './pages/CreateStore'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ShowProduct from './pages/ShowProduct'

function App() { 
  let router = createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route path='/' element={<CreateStore/>}></Route>
          <Route path='/ShowProduct' element={< ShowProduct/>}></Route>
        </Route>
      )
  )

  return (
    <>
      <RouterProvider router={router}/>  
    </>
  )
}

export default App
