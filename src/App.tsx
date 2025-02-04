import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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