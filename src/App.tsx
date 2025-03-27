import './App.css'
import Login from './components/Login/Login'
import SuccessMessage from './components/SuccessMessage/SuccessMessage'
import { Provider } from "react-redux"
import store from './store'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Provider store={store} >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SuccessMessage" element={<SuccessMessage />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App


/*

Based on:

https://www.youtube.com/watch?v=u99tNt3TZf8&t=38s&ab_channel=Rocketseat

https://www.youtube.com/watch?v=mXI2-gjIZ40&ab_channel=FelipeRocha%E2%80%A2FullStackClub



*/