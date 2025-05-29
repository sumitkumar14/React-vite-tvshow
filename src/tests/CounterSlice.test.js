import { describe, it, expect } from "vitest";
import counterReducer, { increment, decrement } from "@/features/counterSlice";

describe("Counter Slice", () => {
  it("should return the initial state", () => {
    const initialState = { value: 0, showDialog: false  };
    expect(counterReducer(undefined, {})).toEqual(initialState);
  });

  it("should increment the counter", () => {
    const initialState = { value: 0, showDialog: false  };
    const newState = counterReducer(initialState, increment());
    expect(newState.value).toBe(1);
  });

  it("should decrement the counter", () => {
    const initialState = { value: 1, showDialog: false };
    const newState = counterReducer(initialState, decrement());
    expect(newState.value).toBe(0);
  });
});