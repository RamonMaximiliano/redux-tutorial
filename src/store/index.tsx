import { createStore } from "redux";

const INITIAL_STATE =  
{
    loggeduser: "",
    users: [
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

function reducer(state = INITIAL_STATE, action:any){
    if(action.type === "SAVE_NAME"){
        return {
            ...state,
            loggeduser: action.text
        }
    } 
    return state
}

/* A função createStore cria um estado global que é onde as infos do app ficãm armazenados, 
ela tem um parametro obrigatório que é uma função que retorna o estado inicial (função reducer) */

const store = createStore(reducer);

export default store;