import React from "react";
import "@testing-library/jest-dom";
import { composeStories } from '@storybook/react';
import * as stories from "../stories/MobileNav.stories";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

const { Default } = composeStories(stories);

describe("MobileNavbar and SideNav interaction", () => {
  
  test("should render the mobile nav toggle button", () => {
    const Story = Default;
    render(Story(Story.args ?? {}));
    const toggleBtn = screen.getByTestId("mobile-nav-toggle");
    expect(toggleBtn).toBeInTheDocument();
  });

  test("should open SideNav on toggle button click", async () => {
    const Story = Default;
    render(Story(Story.args ?? {}));
    fireEvent.click(screen.getByTestId("mobile-nav-toggle"));

    const sideNav = await screen.findByTestId("side-nav");
    expect(sideNav).toBeInTheDocument();
  });

  test("should close SideNav on close icon click", async () => {
    const Story = Default;
    render(Story(Story.args ?? {}));

    fireEvent.click(screen.getByTestId("mobile-nav-toggle"));
    const sideNav = await screen.findByTestId("side-nav");
    expect(sideNav).toBeInTheDocument();

    const closeIcon = await screen.findByTestId("close-icon");
    fireEvent.click(closeIcon);

    await waitFor(() => {
      expect(screen.queryByTestId("side-nav")).not.toBeInTheDocument();
    });
  });

  test("should close SideNav on backdrop click", async () => {
    const Story = Default;
    render(Story(Story.args ?? {}));

    fireEvent.click(screen.getByTestId("mobile-nav-toggle"));
    expect(await screen.findByTestId("side-nav")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("backdrop"));

    await waitFor(() => {
      expect(screen.queryByTestId("side-nav")).not.toBeInTheDocument();
    });
  });

  test("should show username and email when SideNav is open", async () => {
    const Story = Default;
    render(Story(Story.args ?? {}));

    fireEvent.click(screen.getByTestId("mobile-nav-toggle"));

    expect(await screen.findByText("Veronica Woods")).toBeInTheDocument();
    expect(await screen.findByText("veronica@example.com")).toBeInTheDocument();
  });
});
