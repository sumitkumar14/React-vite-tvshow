import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "@/store";
import App from "@/App";
import { describe, it, expect, vi } from "vitest";

// Mock child components to prevent deep rendering

vi.mock("@/components/Home", () => ({
  default: () => <div>Mock Home</div>,
}));

vi.mock("@/views/ShowTvseries", () => ({
  default: () => <div>Mock view</div>,
}));

vi.mock("@/views/ShowTvSeriesDetails", () => ({
  default: () => <div>Mock Detail</div>,
}));

vi.mock("@/components/About", () => ({
  default: () => <div>Mock About</div>,
}));


describe("App Component (Shallow Test)", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/TV Series/i)).toBeInTheDocument();
  });
});