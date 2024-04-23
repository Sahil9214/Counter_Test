import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import SummaryForm from "./Pages/summary/SummaryForm";
import { BrowserRouter } from "react-router-dom";
import AllRouter from "./routes/AllRouter";
import OrderSummary from "./Pages/summary/OrderSummary";
test("renders learn react link", () => {
  <BrowserRouter>
    <AllRouter />
  </BrowserRouter>;
});

describe("Check for summaryform", () => {
  describe("choclate summary", () => {
    test("intially the choclate input carrry number will be 0", () => {
      render(
        <BrowserRouter>
          <SummaryForm />
        </BrowserRouter>
      );
      const inputChoclate = screen.getByPlaceholderText(
        "Enter the choclate amount"
      );
      expect(inputChoclate).toHaveValue(0);
    });
    test("intially the vanilla input carrry number will be 0", () => {
      render(
        <BrowserRouter>
          <SummaryForm />
        </BrowserRouter>
      );
      const inputChoclate = screen.getByPlaceholderText(
        "Enter the vanilla amount"
      );
      expect(inputChoclate).toHaveValue(0);
    });
    test("intially the stawberry input carrry number will be 0", () => {
      render(
        <BrowserRouter>
          <SummaryForm />
        </BrowserRouter>
      );
      const inputChoclate = screen.getByPlaceholderText(
        "Enter the stawberry amount"
      );
      expect(inputChoclate).toHaveValue(0);
    });
    test("by clicking value of choclate increase or not", () => {
      render(
        <BrowserRouter>
          <SummaryForm />
        </BrowserRouter>
      );
      const inputChoclate = screen.getByPlaceholderText(
        "Enter the choclate amount"
      );
      const buttonChoclateIncrease = screen.getByTestId("choclate-increase");
      fireEvent.click(buttonChoclateIncrease);
      expect(inputChoclate).toHaveValue(1);
      const buttonChoclateDecrease = screen.getByTestId("choclate-decrease");
      fireEvent.click(buttonChoclateDecrease);
      expect(inputChoclate).toHaveValue(0);
      //!check disabilty of button
      expect(buttonChoclateDecrease).toBeDisabled();
    });
  });
  describe("test for the vanilla summary", () => {
    test("check initial input of vanilla is zero or not", () => {
      render(
        <BrowserRouter>
          <SummaryForm />
        </BrowserRouter>
      );
      let inputVanilla = screen.getByPlaceholderText(
        "Enter the vanilla amount"
      );
      expect(inputVanilla).toHaveValue(0);
    });
    test("check button and disabled button and there input part", () => {
      render(
        <BrowserRouter>
          <SummaryForm />
        </BrowserRouter>
      );
      const buttonVanillaIncrease = screen.getByTestId("vanilla-increase");
      const inputVanilla = screen.getByPlaceholderText(
        "Enter the vanilla amount"
      );
      fireEvent.click(buttonVanillaIncrease);

      expect(inputVanilla).toHaveValue(1);
      const buttonVanillaDecrease = screen.getByTestId("vanilla-decrease");
      fireEvent.click(buttonVanillaDecrease);
      expect(inputVanilla).toHaveValue(0);
      expect(buttonVanillaDecrease).toBeDisabled();
    });
  });
  describe("test for the stawberry summary", () => {
    test("check initial input of Stawberry is zero or not", () => {
      render(
        <BrowserRouter>
          <SummaryForm />
        </BrowserRouter>
      );
      let inputStawberry = screen.getByPlaceholderText(
        "Enter the stawberry amount"
      );
      expect(inputStawberry).toHaveValue(0);
    });
    test("check button and disabled button and there input part", () => {
      render(
        <BrowserRouter>
          <SummaryForm />
        </BrowserRouter>
      );
      const buttonStawberryIncrease = screen.getByTestId("stawberry-increase");
      const inputVanilla = screen.getByPlaceholderText(
        "Enter the stawberry amount"
      );
      fireEvent.click(buttonStawberryIncrease);

      expect(inputVanilla).toHaveValue(1);
      const buttonStawberryDecrease = screen.getByTestId("stawberry-decrease");
      fireEvent.click(buttonStawberryDecrease);
      expect(inputVanilla).toHaveValue(0);
      expect(buttonStawberryDecrease).toBeDisabled();
    });
    test("By click on order move to next Page ", () => {
      render(
        <BrowserRouter>
          <SummaryForm />
        </BrowserRouter>
      );
      const buttonOrder = screen.getByRole("button", { name: "Order" });
      expect(buttonOrder).toBeInTheDocument();
      fireEvent.click(buttonOrder);
      // !how to check this will on next page or not
      expect(window.location.pathname).toBe("/orderSummary");
      //! how to check the localStorage key have provide name
      expect(localStorage.getItem("sundae")).toBeTruthy();

      let storedValue = JSON.parse(localStorage.getItem("sundae"));
      // !check the data have the key order and totalCost are in there
      expect(storedValue).toEqual(
        expect.objectContaining({
          order: expect.any(Object),
          totalCost: expect.any(Number),
        })
      );
    });
  });
});

describe("check for orderSummary", () => {
  test("check you render the orderSummary Page", () => {
    render(
      <BrowserRouter>
        <OrderSummary />
      </BrowserRouter>
    );
  });
  test("check button of term and condition is visible or not", () => {
    render(
      <BrowserRouter>
        <OrderSummary />
      </BrowserRouter>
    );
    let inputBox = screen.getByPlaceholderText("Terms and conditions");

    expect(inputBox).toBeInTheDocument();
    expect(inputBox).not.toBeChecked();
    fireEvent.click(inputBox);
    let button = screen.getByRole("button", { name: "Place Order" });
    expect(inputBox).toBeChecked();

    expect(button).not.toBeDisabled();
  });
});
