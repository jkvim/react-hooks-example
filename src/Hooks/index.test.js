import React from "react";
import { render, flushEffects } from "react-testing-library";

import useViewport from "./index";

function fireResize(width) {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
}

function EffecfulComponent() {
  const viewport = useViewport();
  return <span>{viewport}</span>;
}

test("useViewport listen to window resize and set viewport size responsively", () => {
  const { container } = render(<EffecfulComponent />);
  const span = container.firstChild;

  flushEffects();
  fireResize(400);
  expect(span.textContent).toBe("small");
});
