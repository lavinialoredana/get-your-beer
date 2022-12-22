import { render, screen } from "@testing-library/react"
import Description from "."

describe("description component", ()=>{
    it("should contain textarea",()=>{
        render(<Description descriptionField="Hello" handleDescriptionChange={jest.fn()}/>)
       const descriptionElement= screen.getByLabelText("description")
       expect(descriptionElement).toBeInTheDocument();
    })
})