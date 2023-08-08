import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DialogComponent from "..";

describe("Dialog Modal Component", () => {
  test("should render dialog component", async () => {
    render(<DialogComponent open title="Test Title" />);
    const dialogElement = screen.getByText(/Test Title/i);
    expect(dialogElement).toBeTruthy();
  });

  test("should click event", () => {
    const title = "Modal Title";
    const content = "Modal Content";
    const onClickPrimary = jest.fn();
    const onClickSecondary = jest.fn();
    const { getByText } = render(
      <DialogComponent
        open
        title={title}
        content={content}
        onClickPrimary={onClickPrimary}
        onClickSecondary={onClickSecondary}
      />
    );
    expect(getByText(title)).toBeTruthy();
    expect(getByText(content)).toBeTruthy();

    fireEvent.click(getByText("Confirm"));
    expect(onClickPrimary).toHaveBeenCalled();

    fireEvent.click(getByText("Cancel"));
    expect(onClickSecondary).toHaveBeenCalled();
  });
});
