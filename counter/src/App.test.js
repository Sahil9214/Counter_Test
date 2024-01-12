import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Counter from "./Components/Counter";
test("Check the value", () => {
  render(<App />);
  let valuePresentInApp = screen.getByText(/hello single/i);
  expect(valuePresentInApp).toBeInTheDocument();
});

//Check Image
test("Check Image", () => {
  render(<App />);
  let imageCheck = screen.getByRole("img");
  let checkAlt = screen.getByAltText("hello girl");
  let checkTitle = screen.getByTitle("hello girl");
  expect(imageCheck).toBeInTheDocument();
  expect(checkAlt).toBeInTheDocument();
  expect(checkTitle).toBeInTheDocument();
  expect(imageCheck).toHaveAttribute("src");
});

//*Check Input Box by name,placeholder,id,value,type;
describe("Check input Box Test Case", () => {
  test("Check Input Box", () => {
    render(<App />);

    let checkInputBox = screen.getByRole("textbox");
    expect(checkInputBox).toBeInTheDocument();
  });
  test("placeholder inside textBox", () => {
    render(<App />);
    let checkPlaceholder = screen.getByPlaceholderText("Enter User name");
    expect(checkPlaceholder).toBeInTheDocument();
  });
  test("name altribute inside the textBox", () => {
    render(<App />);
    let checkInputBox = screen.getByRole("textbox");
    expect(checkInputBox).toHaveAttribute("name", "username");

    expect(checkInputBox).toHaveAttribute("id", "username");
    expect(checkInputBox).toHaveAttribute("type", "text");
  });
  test("Check by event handler", () => {
    render(<App />);
    let checkInputBox = screen.getByRole("textbox");
    expect(checkInputBox).toHaveValue("");
    fireEvent.change(checkInputBox, { target: { value: "a" } });
    expect(checkInputBox).toHaveValue("a");
    expect(checkInputBox.value).toBe("a");
  });
});

describe("Counter App test Case", () => {
  test("check render of counter APpp", () => {
    render(<App />);
    render(<Counter />);
  });
  test("button add ", () => {
    render(<App />);
    render(<Counter />);
    let btnAdd = screen.getByTestId("add");
   
    let countText = screen.getByTestId("countText");
    fireEvent.click(btnAdd);

    
    expect(countText).toHaveTextContent("1");
  });
  test("check by reducer", () => {
    render(<App/>)
    render(<Counter/>)
    let btnReduce = screen.getByTestId("deleteCount");
    let textH1tag = screen.getByTestId("countText");
    
    fireEvent.click(btnReduce);
 
    expect(textH1tag).toHaveTextContent("-1");
  });
});
