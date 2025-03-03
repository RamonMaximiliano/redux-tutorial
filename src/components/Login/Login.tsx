import { useState } from "react"
import "./styles.css"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom";

const saveName = (text:string) =>{
  return {
    type:"SAVE_NAME",
    text
  }
}

function Login({ dispatch }: { dispatch: (action: any) => void })  {
  const [name,setName] = useState<string>("");
  const navigate = useNavigate();

  function handleLogin(){
    ()=>dispatch(saveName(name))
    navigate("/SuccessMessage")
  }

  return (
    <>
      <div className="main-login">
        <h1>Welcome</h1>
        <div className="main-form">
          <input type="text" className="main-input"
          onChange={(e)=> setName(e.target.value)}></input>
          <input type="button" className="main-button" value="Login"
          onClick={()=>handleLogin()}></input>
        </div>

      </div>

    </>
  )
}

export default connect()(Login);

/*
Quando você apenas despacha ações (dispatch) sem precisar ler dados do Redux, você pode usar connect() sem argumentos
Isso conecta o componente ao Redux e permite que ele receba dispatch automaticamente via props, sem precisar de mapStateToProps.

Sendo assim:

export default connect()(Login);
*/