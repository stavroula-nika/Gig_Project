// Write a test for the Gig component from the previous section, 
// making sure that all the information passed as props is displayed on the page.

import { screen, render } from "@testing-library/react";
import Gig from "../src/components/Gig";

describe("Gig", () => {
  it("Should render a h3 with the correct name", () => {
    render(<Gig name="Fleetwood Mac" />)
    expect(screen.getByText("Fleetwood Mac")).toBeInDocument();
  })

  it("should render an image with the correct image", () => {
    render(
    <Gig
      name="Fleetwood Mac"
      image="https://yt3.googleusercontent.com/pTa9CSj4p2bCopIiKZDhYV5ABd2YYhtEfh7bAB3FL0G8SfGj6cTUAtdjXdsXpGNOKpHnMv1z2g=s900-c-k-c0x00ffffff-no-rj"
    />
  );

    const image = screen.getByRole("img", {name: "Fleetwood Mac performing live"});
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://yt3.googleusercontent.com/pTa9CSj4p2bCopIiKZDhYV5ABd2YYhtEfh7bAB3FL0G8SfGj6cTUAtdjXdsXpGNOKpHnMv1z2g=s900-c-k-c0x00ffffff-no-rj"
    );
  });

  it("Should render a description with the correct description", () => {
    render(<Gig name="Fleetwood Mac" />)
    expect(screen.getByText("Fleetwood Mac")).toBeInDocument();
  })
});