import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

test("renders Home component", () => {
   render(<Home />);
   const mainElement = screen.getByRole("main");
   expect(mainElement).toBeInTheDocument();
});
