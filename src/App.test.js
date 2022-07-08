import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "./components/Nav";
import SelectField from "./components/SelectField";
import CusTextField from "./components/CusTextField";
import CusRadioButtonsGroup from "./components/CusRadioButtonGroup";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

it("If it render No question found", () => {
  render(
    <Provider store={store}>
      <CusRadioButtonsGroup />
    </Provider>
  );
  expect(screen.findByRole("h3", /No question found!/i)).toBeDefined();
});

it("If it render nav bar", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText(/Quiz App/i)).toBeDefined();
});

it("If it render select field", () => {
  render(
    <Provider store={store}>
      <SelectField
        label="Test label"
        value="test value"
        name="test field"
        options={[
          { id: "easy", name: "Easy" },
          { id: "medium", name: "Medium" },
          { id: "hard", name: "Hard" },
        ]}
        handleChange={() => null}
      />
    </Provider>
  );
  expect(screen.findByText(/Test label/i)).toBeDefined();
});

it("If it render text field", () => {
  render(
    <Provider store={store}>
      <CusTextField
        label="Text field"
        value={3}
        name="test Text field"
        handleChange={() => null}
      />
    </Provider>
  );
  expect(screen.findByDisplayValue(/3/i)).toBeDefined();
  expect(screen.findByDisplayValue(/Text field/i)).toBeDefined();
});
