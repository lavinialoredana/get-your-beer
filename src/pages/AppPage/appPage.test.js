import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import App from ".";
import { routesConfig } from "../../routes/AppRouter";

describe("App Page", () => {
  afterEach(() => {
    cleanup();
  });
  // More details hre: https://testing-library.com/
  it("should contain header", () => {
    //Arrange
    render(<App />, { wrapper: BrowserRouter });
    // Act
    const appHeaderElement = screen.getByTestId("app-header");
    // Assert
    expect(appHeaderElement).toBeInTheDocument;
  });
  it("should contain link to orders", () => {
    render(<App />, { wrapper: BrowserRouter });

    const ordersLinkElement = screen.getByTestId("orders-link");

    expect(ordersLinkElement).toBeInTheDocument;
  });
  it("should go to orders page when clicking on orders link", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });
    render(
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    );
    const ordersLinkElement = screen.getByTestId("orders-link");

    expect(ordersLinkElement).toBeInTheDocument;

    await userEvent.click(ordersLinkElement);

    expect(ordersLinkElement).not.toBeInTheDocument;
  });
});
