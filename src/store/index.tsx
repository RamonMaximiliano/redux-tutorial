import { createStore } from "redux";

function reducer(){
    return [
        {
            id:1,
            name: "John Muller"
        },
        {
            id:2,
            name: "Mary Shelley"
        }
    ]
}

/* A função createStore cria um estado global que é onde as infos do app ficãm armazenados, 
ela tem um parametro obrigatório que é uma função que retorna o estado inicial (função reducer) */

const store = createStore(reducer);

export default store;