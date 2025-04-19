import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/ButtonGroup.stories';
import { options1, options2 } from "../data/options";

const {
  LabelButtonGroup,
  IconButtonGroup,
  LabelIconButtonGroup
} = composeStories(stories);

describe('📘 ButtonGroup Storybook Stories', () => {

  test('renders LabelButtonGroup', () => {
    const Story = LabelButtonGroup;
    const { container } = render(Story(Story.args ?? {}));

    const labelTexts = ['Leading', 'Middle', 'Trailing'];

    labelTexts.forEach((val) => {
      expect(screen.getByText(val)).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });

  test('renders IconButtonGroup with icons', () => {
    const Story = IconButtonGroup;
    const { container } = render(Story(Story.args ?? {}));

    expect(container.querySelector('svg')).toBeInTheDocument();  // Check for an icon (List or Grid)
    expect(container).toMatchSnapshot();
  });

  test('renders LabelIconButtonGroup', () => {
    const Story = LabelIconButtonGroup;
    const { container } = render(Story(Story.args ?? {}));

    const labelTexts = ['First', 'Second', 'Third'];

    labelTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
    expect(container.querySelector('svg')).toBeInTheDocument(); // Check for icons

    expect(container).toMatchSnapshot();
  });

});
