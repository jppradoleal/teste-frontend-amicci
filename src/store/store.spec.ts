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
});
