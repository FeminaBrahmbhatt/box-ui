import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/Typography.stories';

const {
  TypographyDynamic,
  TypographyHeadings,
  TypographyText,
} = composeStories(stories);

describe('📝 Typography Stories', () => {
  test('should render heading variant text', () => {
    const Story = TypographyDynamic;
    const { container } = render(
      // Manually call the story function (with args and dummy context)
      Story(Story.args ?? {})
    );
    expect(screen.getByText(/Display h1/i)).toBeInTheDocument();
    expect(screen.getByText(/regular/i)).toBeInTheDocument();
  });

  test('TypographyHeadings renders all heading variants', () => {
    const Story = TypographyHeadings;
    render(Story(Story.args ?? {}));

    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach((heading) => {
      expect(screen.getByText(`Display ${heading}`)).toBeInTheDocument();
    });
  });

  test('TypographyText renders all text variants', () => {
    const Story = TypographyText;
    render(Story(Story.args ?? {}));

    ['xl', 'lg', 'md', 'sm', 'xs'].forEach((variant) => {
      expect(screen.getByText(`Text ${variant}`)).toBeInTheDocument();
    });
  });
});
