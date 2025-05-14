import { renderHook, act } from "@testing-library/react";
import { useWindowResize } from "../useWindowResize";
import { describe, it, expect } from "vitest";

describe("useWindowResize", () => {
  it("returns initial width, height, and correct breakpoint", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 768,
    });

    const { result } = renderHook(() => useWindowResize());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
    expect(result.current.breakpoint).toBe("lg");
  });

  it("updates values on resize", () => {
    const { result } = renderHook(() => useWindowResize());

    act(() => {
      window.innerWidth = 500;
      window.innerHeight = 600;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(600);
    expect(result.current.breakpoint).toBe("xs");
  });

  it("returns xl breakpoint when width is >= 1280", () => {
    const { result } = renderHook(() => useWindowResize());

    act(() => {
      window.innerWidth = 1400;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.breakpoint).toBe("xl");
  });
});
