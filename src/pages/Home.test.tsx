import { describe, it, expect } from "vitest";
import { render, screen } from "@/test/test-helper";
import Home from "./Home";

describe("Home", () => {
	it("should render", () => {
		render(<Home />);

		expect(screen.getByLabelText("Username")).toBeInTheDocument();
	});
});
