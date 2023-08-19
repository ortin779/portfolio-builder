import App from "./App";
import { render } from "./utils/test-utils";
import { screen } from "@testing-library/react";

describe("App", () => {
  it("should render the application home page", () => {
    render(<App />);

    const navbar = screen.getByRole("navigation");

    expect(navbar).toBeInTheDocument();
  });
});
