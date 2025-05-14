import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useClipboard } from "../useClipboard";
import { useState } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

function TestComponent() {
  const { copied, copy } = useClipboard();
  const [text] = useState("Hello, World!");

  return (
    <>
      <button type="button" onClick={() => copy(text)}>
        Copy
      </button>
      <span>{copied ? "Copied" : "Not copied"}</span>
    </>
  );
}

describe("useClipboard", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it("should copy text to clipboard and update copied state", async () => {
    render(<TestComponent />);
    expect(screen.getByText(/Not copied/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText("Copy"));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("Hello, World!");
    expect(await screen.findByText(/Copied/i)).toBeInTheDocument();
  });
});
