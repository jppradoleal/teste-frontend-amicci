import { vi, describe, it, expect, beforeEach } from "vitest";
import { useStore as store } from ".";

const coords = {
  latitude: 1,
  longitude: 0,
  accuracy: 0,
  altitude: 0,
  altitudeAccuracy: 0,
  heading: 0,
  speed: 0,
};

Object.defineProperty(navigator, "geolocation", {
  value: {
    getCurrentPosition: vi.fn(),
  },
});

global.fetch = vi.fn();

describe("Weather App Store", () => {
  beforeEach(() => {
    store.setState(store.getInitialState());
  });

  it("should be able to get user current position", async () => {
    vi.mocked(navigator.geolocation.getCurrentPosition).mockImplementation(
      (success) => {
        success({
          timestamp: 0,
          coords,
        });
      }
    );

    await store.getState().getUserPosition();

    const { latitude, longitude } = store.getState();

    expect(latitude).toBe(1);
    expect(longitude).toBe(0);
  });

  it("should call maps api and fill address attribute", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: () =>
        Promise.resolve({ results: [{ formatted_address: "Jacareí" }] }),
    } as Response);

    await store.getState().loadAddress();

    const { address } = store.getState();

    expect(fetch).toHaveBeenCalled();

    expect(address).toBe("Jacareí");
  });
});
