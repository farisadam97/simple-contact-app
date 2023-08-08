import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for additional Jest DOM matchers
import { useLocation, useNavigate } from "react-router-dom"; // Import the hooks directly
import Navbar from "..";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("Navbar Component", () => {
  test("should render navbar from homepage and navigate to add", () => {
    const navigate = jest.fn();
    require("react-router-dom").useNavigate.mockImplementation(() => navigate);
    useLocation.mockReturnValue({
      pathname: "/",
      search: "",
      hash: "",
      state: "",
    });

    render(<Navbar />);
    const textElement = screen.getByText(/Contacts/i);
    expect(textElement).toBeTruthy();

    const iconButton = screen.getByRole("button", { name: "menu" });
    fireEvent.click(iconButton);
    expect(navigate).toHaveBeenCalledWith("/add");
  });
  test("should render navbar from add form", () => {
    useLocation.mockReturnValue({
      pathname: "/add",
      search: "",
      hash: "",
      state: "",
    });

    render(<Navbar />);
    const textElement = screen.getByText(/Add Contact/i);
    expect(textElement).toBeTruthy();
  });
  test("should render navbar from edit form", () => {
    useLocation.mockReturnValue({
      pathname: "/edit/1",
      search: "",
      hash: "",
      state: "",
    });

    render(<Navbar />);
    const textElement = screen.getByText(/Edit Contact/i);
    expect(textElement).toBeTruthy();
  });
});
