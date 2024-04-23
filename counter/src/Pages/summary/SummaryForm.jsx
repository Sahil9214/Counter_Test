import { useNavigate } from "react-router-dom";
import "../../Styles/SummaryForm.css";
import { useState } from "react";

const SummaryForm = () => {
  const [vanilla, setVanilla] = useState(0);
  const [chocolate, setChocolate] = useState(0);
  const [strawberry, setStrawberry] = useState(0);
  const [chocolateFudgeSauce, setChocolateFudgeSauce] = useState(false);
  const [crushedOreos, setCrushedOreos] = useState(false);
  const [freshStrawberries, setFreshStrawberries] = useState(false);
  const navigation = useNavigate();
  const handleChocolate = () => {
    setChocolate((count) => count + 1);
  };

  const handleChocolateDecrease = () => {
    setChocolate((count) => count - 1);
  };

  const handleVanilla = () => {
    setVanilla((count) => count + 1);
  };

  const handleVanillaDecrease = () => {
    setVanilla((count) => count - 1);
  };

  const handleStrawberry = () => {
    setStrawberry((count) => count + 1);
  };

  const handleStrawberryDecrease = () => {
    setStrawberry((count) => count - 1);
  };

  const handleSubmit = () => {
    const order = {
      vanilla,
      chocolate,
      strawberry,
      chocolateFudgeSauce,
      crushedOreos,
      freshStrawberries,
    };
    const totalCost =
      Number(vanilla) * 80 +
      Number(chocolate) * 100 +
      Number(strawberry) * 60 +
      (chocolateFudgeSauce ? 10 : 0) +
      (crushedOreos ? 20 : 0) +
      (freshStrawberries ? 30 : 0);

    console.log(order);
    alert(`Your total price is: $${totalCost}`);
    localStorage.setItem("sundae", JSON.stringify({ order, totalCost }));
    return navigation("/orderSummary");
  };

  return (
    <div>
      <h1 className="main-heading">Welcome to Sundae</h1>

      <div>
        <h3>Scoops</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          <div>
            <img
              style={{ width: "100px" }}
              src={"https://via.placeholder.com/100"}
              alt="Vanilla"
            />
            <p>Vanilla</p>
            <p>Ice cream cost :80</p>
            <div>
              <input
                value={vanilla}
                type="number"
                readOnly
                placeholder="Enter the vanilla amount"
              />
              <button data-testid="vanilla-increase" onClick={handleVanilla}>
                👆👆
              </button>
              <button
                data-testid="vanilla-decrease"
                disabled={vanilla < 1}
                onClick={handleVanillaDecrease}
              >
                👇👇
              </button>
            </div>
          </div>
          <div>
            <img
              style={{ width: "100px" }}
              src={"https://via.placeholder.com/100"}
              alt="Chocolate"
            />
            <p>Chocolate</p>
            <p>Ice cream cost :100</p>
            <div>
              <input
                value={chocolate}
                type="number"
                readOnly
                placeholder="Enter the choclate amount"
              />
              <button data-testid="choclate-increase" onClick={handleChocolate}>
                👆👆
              </button>
              <button
                data-testid="choclate-decrease"
                disabled={chocolate < 1}
                onClick={handleChocolateDecrease}
              >
                👇👇
              </button>
            </div>
          </div>
          <div>
            <img
              style={{ width: "100px" }}
              src={"https://via.placeholder.com/100"}
              alt="Strawberry"
            />
            <p>Strawberry</p>
            <p>Ice cream cost :60</p>
            <div>
              <input
                value={strawberry}
                type="number"
                readOnly
                placeholder="Enter the stawberry amount"
              />
              <button
                data-testid="stawberry-increase"
                onClick={handleStrawberry}
              >
                👆👆
              </button>
              <button
                data-testid="stawberry-decrease"
                disabled={strawberry < 1}
                onClick={handleStrawberryDecrease}
              >
                👇👇
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Toppings</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          <div>
            <img
              style={{ width: "100px" }}
              src={"https://via.placeholder.com/100"}
              alt="Chocolate Fudge Sauce"
            />
            <p>Chocolate Fudge Sauce</p>
            <p>topping cost :10</p>
            <div>
              <input
                type="checkbox"
                checked={chocolateFudgeSauce}
                onChange={() => setChocolateFudgeSauce((prev) => !prev)}
              />
            </div>
          </div>
          <div>
            <img
              style={{ width: "100px" }}
              src={"https://via.placeholder.com/100"}
              alt="Crushed Oreos"
            />
            <p>Crushed Oreos</p>
            <p>topping cost :20</p>
            <div>
              <input
                type="checkbox"
                checked={crushedOreos}
                onChange={() => setCrushedOreos((prev) => !prev)}
              />
            </div>
          </div>
          <div>
            <img
              style={{ width: "100px" }}
              src={"https://via.placeholder.com/100"}
              alt="Fresh Strawberries"
            />
            <p>Fresh Strawberries</p>
            <p>topping cost :30</p>
            <div>
              <input
                type="checkbox"
                checked={freshStrawberries}
                onChange={() => setFreshStrawberries((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>Order</button>
    </div>
  );
};

export default SummaryForm;
