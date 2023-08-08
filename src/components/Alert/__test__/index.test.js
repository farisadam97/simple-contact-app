import React from "react";
import AlertComponent from "..";
import { render, screen } from "@testing-library/react";

describe("Alert Component", () => {
  test("should render Alert Component", () => {
    const message = {
      type: "error",
      title: "Error",
      content: "Something wrong",
    };
    render(
      <AlertComponent
        type={message.type}
        title={message.title}
        content={message.content}
      />
    );

    const titleElement = screen.getByText(message.title);
    const contentElement = screen.getByText(message.content);
    expect(titleElement).toBeTruthy();
    expect(contentElement).toBeTruthy();
  });
});
