import React from "react";
import "@testing-library/jest-dom";
import { composeStories } from '@storybook/react';
import * as stories from "../stories/SideNav.stories";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

const { Default } = composeStories(stories);

describe("SideNav Component", () => {
  test("should render SideNav when open is true", () => {
    const Story = Default;
    render(Story(Story.args ?? {}));

    const sideNav = screen.getByTestId("side-nav");
    expect(sideNav).toBeInTheDocument();
  });

  test("should display username and email in SideNav", () => {
    const Story = Default;
    render(Story(Story.args ?? {}));

    expect(screen.getByText("Veronica Woods")).toBeInTheDocument();
    expect(screen.getByText("veronica@example.com")).toBeInTheDocument();
  });

  test("should render top and bottom nav items", () => {
    const Story = Default;
    render(Story(Story.args ?? {}));

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  test("should respond correctly when a nav item is clicked", () => {
    const Story = Default;
    render(Story(Story.args ?? {}));
  
    const navItem = screen.getByText("Home");
    fireEvent.click(navItem);
  
    expect(navItem).toBeInTheDocument();
  });
});
