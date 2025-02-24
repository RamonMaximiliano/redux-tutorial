import './App.css'
import Login from './components/Login/Login'
import SuccessMessage from './components/SuccessMessage/SuccessMessage'
import {Provider} from "react-redux"
import store from './store'

function App() {
  return (
    <>
    <Provider store={store} >
      <Login />
      <SuccessMessage />
      </Provider>
    </>
  )
}

export default App


/*

Criar uma Login page

Que após logado mostra o nome do user logado na success Message

E altera os items no nome dele, ex favorite Heroes, na Heroes message

Criar um painel de card com os Heroes para ele selecionar 



26 min
https://www.youtube.com/watch?v=u99tNt3TZf8&t=38s&ab_channel=Rocketseat

17 min
https://www.youtube.com/watch?v=HGMd3dbB-lM&ab_channel=Coffstack

16 min
https://www.youtube.com/watch?v=mXI2-gjIZ40&ab_channel=FelipeRocha%E2%80%A2FullStackClub

*/