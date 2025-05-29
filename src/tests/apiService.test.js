import { describe, test, expect, vi, beforeEach } from "vitest";
import axios from "axios";
import { 
  getSeriesList, 
  searchSeriesList, 
  getSeriesDetails, 
  getSeriesCastDetails, 
  getSeriesEpisodesDetails 
} from "@/services/apiService";

vi.mock("axios"); // Mock Axios globally

describe("API Service Testing", () => {
  beforeEach(() => {
    vi.resetAllMocks(); // Reset mocks before each test
  });

  test("fetches TV Series List", async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, name: "Breaking Bad" }] });

    const response = await getSeriesList();
    expect(response).toBeInstanceOf(Array);
    expect(response[0].name).toBe("Breaking Bad");
  });

  test("fetches TV Series List on search", async () => {
    axios.get.mockResolvedValue({ data: [{ id: 2, name: "Better Call Saul" }] });

    const response = await searchSeriesList("b");
    expect(response).toBeInstanceOf(Array);
    expect(response[0].name).toBe("Better Call Saul");
  });

  test("fetches TV Series Details", async () => {
    axios.get.mockResolvedValue({ data: { id: 211, name: "Game of Thrones" } });

    const response = await getSeriesDetails(211);
    expect(response).toBeInstanceOf(Object);
    expect(response.name).toBe("Game of Thrones");
  });

  test("fetches TV Series Cast details", async () => {
    axios.get.mockResolvedValue({ data: { cast: ["Actor 1", "Actor 2"] } });

    const response = await getSeriesCastDetails(211);
    expect(response).toBeInstanceOf(Object);
    expect(response.cast).toContain("Actor 1");
  });

  test("fetches TV Series Episodes details", async () => {
    axios.get.mockResolvedValue({ data: { episodes: ["Ep1", "Ep2"] } });

    const response = await getSeriesEpisodesDetails(211);
    expect(response).toBeInstanceOf(Object);
    expect(response.episodes).toContain("Ep1");
  });

  test("handles API errors gracefully", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    try {
      await getSeriesList();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Network Error");
    }
  });
});