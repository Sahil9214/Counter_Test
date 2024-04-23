import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const [orderValue, setOrderValue] = useState({});
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const navigate = useNavigate();

  const handlePlaced = () => {
    return navigate("/thanks");
  };

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("sundae"));
    setOrderValue(storedData);
  }, []);

  // Handler for checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <h1>Your order confirmation</h1>
      <div>
        <p>Vanilla: {orderValue?.order?.vanilla}</p>
        <p>Chocolate: {orderValue?.order?.chocolate}</p>
        <p>Strawberry: {orderValue?.order?.strawberry}</p>
        <p>
          Chocolate Fudge Sauce:{" "}
          {orderValue?.order?.chocolateFudgeSauce ? "yes" : "no"}
        </p>
        <p>Crushed Oreos: {orderValue?.order?.crushedOreos ? "yes" : "no"}</p>
        <p>
          Fresh Strawberries:{" "}
          {orderValue?.order?.freshStrawberries ? "yes" : "no"}
        </p>
      </div>
      <h3>Total Price you have to pay: {orderValue?.totalCost}</h3>
      <div>
        <input
          id="checkbox-order"
          type="checkbox"
          placeholder="Terms and conditions"
          checked={isChecked} // Bind checked status to state
          onChange={handleCheckboxChange} // Add onChange handler
        />
        <label htmlFor="checkbox-order">Accept Terms and conditions</label>
      </div>
      {isChecked && <button onClick={handlePlaced}>Place Order</button>}
    </div>
  );
};

export default OrderSummary;
