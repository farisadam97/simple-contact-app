import React from "react";
import ContactList from "../index";
import { getContacts } from "../../api/contact";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

const mockData = [
  {
    id: "93ad6070-c92b-11e8-b02f-cbfa15db428b",
    firstName: "Bilbo",
    lastName: "Baggins",
    age: 111,
    photo:
      "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
  },
  {
    id: "b3abd640-c92b-11e8-b02f-cbfa15db428b",
    firstName: "Luke",
    lastName: "Skywalker",
    age: 20,
    photo: "N/A",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    photo:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    id: "73c57500-3545-11ee-85b5-efb76d3b2c8c",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    photo:
      "https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-106-700x627.jpg",
    id: "63dc4e60-358c-11ee-85b5-efb76d3b2c8c",
  },
];

const mockres = {};

const mockUseNavigate = jest.fn();

jest.mock("../../api/contact", () => ({
  getContacts: jest.fn((_url, _data) => Promise.resolve(mockres)),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Contact lists page", () => {
  test("should render index page", async () => {
    await getContacts.mockResolvedValueOnce({
      data: { data: mockData },
      status: 200,
    });

    render(<ContactList />);
    await screen.findByText(mockData[0].firstName);

    expect(screen.getByText(mockData[0].firstName)).toBeInTheDocument();
  });
});
