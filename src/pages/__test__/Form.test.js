import React from "react";
import FormComponent from "../Form";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));
jest.mock("react-hook-form", () => ({
  useForm: jest.fn(),
}));

jest.mock("../../api/contact");
describe("Form Page", () => {
  test("should render form add and type on all fields", async () => {
    useLocation.mockReturnValue({
      pathname: "/add",
      search: "",
      hash: "",
      state: "",
    });
    useParams.mockReturnValue({});

    const mockMethods = {
      register: jest.fn(),
      handleSubmit: jest.fn(),
      formState: {
        errors: {},
        isSubmitting: false,
        isDirty: false,
      },
      setValue: jest.fn(),
      watch: jest.fn(),
    };
    useForm.mockReturnValue(mockMethods);

    await act(async () => {
      render(<FormComponent />);
    });

    await waitFor(() => {
      expect(screen.getByText("First Name")).toBeTruthy();
    });

    const firstNameInput = screen
      .getByText("First Name")
      .parentElement.querySelector("input");

    const lastNameInput = screen
      .getByText("Last Name")
      .parentElement.querySelector("input");

    const age = screen.getByText("Age").parentElement.querySelector("input");

    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(age, { target: { value: "2" } });
    await waitFor(() => {
      expect(submitButton.disabled).toBe(false);
    });

    fireEvent.click(submitButton);
  });
});
