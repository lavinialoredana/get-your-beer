import { render, screen } from "@testing-library/react";
import Description from ".";

describe("description component", () => {
  it("to match snapshot", () => {
    //Arrange
    const { asFragment } = render(
      <Description
        descriptionField="Hello"
        handleDescriptionChange={jest.fn()}
      />
    );
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
  it("should contain textarea", () => {
    render(
      <Description
        descriptionField="Hello"
        handleDescriptionChange={jest.fn()}
      />
    );
    const descriptionElement = screen.getByTestId("description");
    expect(descriptionElement).toBeInTheDocument;
  });
});
