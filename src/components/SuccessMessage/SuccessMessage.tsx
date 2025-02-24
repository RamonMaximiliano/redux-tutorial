import { connect } from "react-redux"

type Dude  =         {
  id:number,
  name: string
}

function SuccessMessage({ dudes }: { dudes: Dude [] }) {

  return (
    <>
      {dudes.map((dude:Dude )=> (
         <div key={dude.id}>
          <p>{dude.id}</p>
          <p>{dude.name}</p>

         </div>
      ))}

    </>
  )
}

const mapStateToProps = (state: Dude[]) => ({ dudes: state });

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
