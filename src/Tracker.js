// imports for hooks
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// import actions
import { withdraw, deposit, addInterest, payCharges } from "./store/balance";

function Tracker() {
  // initialise compnent state from store using useSelector
  const balance = useSelector((state) => state.balance.value);
  // set up dispatch caller
  const dispatch = useDispatch();

  // set up state for userInput
  const [userInput, setUserInput] = useState(0);

  // userInput set via input box onChange status. This is then passed to the assigned reducer for each button if required.
  return (
    <div className="Tracker">
      <h2>Current balance - £ {balance.toFixed(2)}</h2>
      <form className="controlPanel">
        <label>
          Amount £
          <input
            type="number"
            name="value"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
        </label>
      </form>
      <button onClick={() => dispatch(withdraw(Number(userInput)))}>
        Withdraw
      </button>
      <button onClick={() => dispatch(deposit(Number(userInput)))}>
        Deposit
      </button>
      <div className="accountFees">
        <button onClick={() => dispatch(addInterest())}>Add Interest</button>
        <button onClick={() => dispatch(payCharges())}>Pay Charges</button>
      </div>
    </div>
  );
}

export default Tracker;
