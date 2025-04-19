
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/Badge.stories';

const {
    Default, LeadingIconBadge, ImageIconBadge, TrailingIconBadge
  } = composeStories(stories);


describe('📘 Badge Storybook Stories', () => {
  test('renders Default badge', () => {
    const Story = Default;
    const { container } = render(
        Story(Story.args ?? {})
      );
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(container).toMatchSnapshot(); // Optional: snapshot for structure
  });

  test('renders Badge with leading icon', () => {
    const Story = LeadingIconBadge;
    render(
        Story(Story.args ?? {})
      );
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByTestId('leadingIcon')).toBeInTheDocument(); // Checks for <FiStar /> icon
  });

  test('renders Badge with image icon', () => {
    const Story = ImageIconBadge;
    render(
        Story(Story.args ?? {})
      );
    expect(screen.getByText('Newzeland')).toBeInTheDocument();
    expect(screen.getByTestId('iconOnly')).toBeInTheDocument(); // Checks for image icon
  });

  test('renders Badge with trailing icon', () => {
    const Story = TrailingIconBadge;
    render(
        Story(Story.args ?? {})
      );
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByTestId('trailingIcon')).toBeInTheDocument(); // Checks for <FiArrowRight /> icon
  });
});
