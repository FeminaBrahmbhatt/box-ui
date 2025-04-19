
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/Button.stories';

const {
    Default, Variants, Sizes, LeadingIconButton, TrailingIconButton, IconOnlyButton
  } = composeStories(stories);

describe('📘 Button Storybook Stories', () => {
    test('renders Default button', () => {
      const Story = Default;
      const { container } = render(
        Story(Story.args ?? {})
      );
      expect(screen.getByText('Primary')).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  
    test('renders all button variants', () => {
      const Story = Variants;
      const { container } = render(
        Story(Story.args ?? {})
      );
      ['Primary', 'Secondary', 'Secondary Gray', 'Tertiary', 'Tertiary Gray'].forEach(label => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });
      expect(container).toMatchSnapshot();
    });
  
    test('renders all button sizes', () => {
      const Story = Sizes;
      const { container } = render(
        Story(Story.args ?? {})
      );
      ['sm', 'md', 'lg', 'xl', '2xl'].forEach(label => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });
      expect(container).toMatchSnapshot();
    });
  
    test('renders button with trailing icon', () => {
      const Story = TrailingIconButton;
      const { container } = render(
        Story(Story.args ?? {})
      );
      expect(screen.getByText('Button')).toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument(); // FiArrowRight
    });
  
    test('renders button with leading icon', () => {
      const Story = LeadingIconButton;
      const { container } = render(
        Story(Story.args ?? {})
      );
      expect(screen.getByText('Button')).toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument(); // FiArrowLeft
    });
  
    test('renders icon-only button', () => {
      const Story = IconOnlyButton;
      const { container } = render(
        Story(Story.args ?? {})
      );
      expect(container.querySelector('svg')).toBeInTheDocument(); // FiStar
    });
  });