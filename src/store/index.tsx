import { createStore } from "redux";

//Tem que ter o estado inicial
const initialState = {
    counter: {
        value:0
    }
}

function reducer(state = initialState, action:any){
    switch(action.type){
        case "counter/increment": {
            return {
                ...state,
                counter:{
                    value: state.counter.value + 1, 
                },
            };
        }
        default:
            return state
    }
}


/* A função createStore cria um estado global que é onde as infos do app ficão armazenados, 
ela tem um parametro obrigatório que é uma função que retorna o estado inicial (função reducer) */


const store = createStore(reducer);

export default store;