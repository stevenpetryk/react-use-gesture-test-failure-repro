import { fireEvent, render } from "@testing-library/react"

import App from "./App"

test("renders learn react link", () => {
  const { getByTestId, getByText } = render(<App />)
  const e = getByText(/hover/i)

  fireEvent.mouseEnter(e)

  // Fails only in 8.0.0
  expect(getByTestId("hovering-indicator")).toBeInTheDocument()
})
