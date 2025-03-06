import { connect } from "react-redux"
import "./styles.css"

type Dude = {
  id: number,
  name: string
}

function SuccessMessage({ dudes, loggeduser }: { dudes: Dude[]; loggeduser: string; }) {

  return (
    <>
        <h2>Default Redux State:</h2>
      <div className="main-default">

        {dudes.map((dude: Dude) => (
          <div key={dude.id} className="card-default">
            <div className="card-unity">
              <h2>ID:</h2>
              <p>{dude.id}</p>
            </div>
            <div className="card-unity">
              <h2>Name:</h2>
              <p>{dude.name}</p>
              </div>
          </div>
        ))}
      </div>
      <h2>New provided Redux State:</h2>

      <div className="main-changedState">
        <h3>Logged User:</h3>
        {loggeduser}
      </div>
    </>
  )
}

const mapStateToProps = (state: { users: Dude[]; loggeduser: string }) => ({
  dudes: state.users,
  loggeduser: state.loggeduser
});

export default connect(mapStateToProps)(SuccessMessage);

/*

React Redux's connect method is still used, but it's becoming less common in modern projects because:
✅ The Context API + Hooks (useSelector, useDispatch) are now the preferred way in most new Redux projects.
✅ connect was useful before Hooks existed, but now useSelector and useDispatch make Redux much simpler and more readable.


BELOW UPDATED COMPONENT:

import { useSelector } from "react-redux";

type Dude = {
  id: number;
  name: string;
};

function SuccessMessage() {
  const dudes = useSelector((state: Dude[]) => state); // Get state directly

  return (
    <>
      {dudes.map((dude) => (
        <div key={dude.id}>
          <p>{dude.id}</p>
          <p>{dude.name}</p>
        </div>
      ))}
    </>
  );
}

export default SuccessMessage;


*/
