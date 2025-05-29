import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "@/store";
import App from "@/App";
import { describe, it, expect } from "vitest";

describe("Main Entry Point", () => {
  it("renders the app without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('TV Series')).toBeInTheDocument();
  });
});