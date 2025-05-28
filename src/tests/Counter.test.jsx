import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import store from "@/store";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  it("renders the counter with initial value", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  it("increments the counter when clicking the increment button", async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const incrementButton = screen.getByText(/Increment/i);
    await userEvent.click(incrementButton);

    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });

  it("decrements the counter when clicking the decrement button", async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const decrementButton = screen.getByText(/Decrement/i);
    await userEvent.click(decrementButton);
    screen.debug();
  
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  
  });
});