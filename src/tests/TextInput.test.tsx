import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/TextInput.stories';

const {Default, LeadingTextInput} = composeStories(stories);

describe('🧪 TextInput Story Tests (Direct function call style)', () => {
    test('Default story renders with email input and error', () => {
      const Story = Default;
      const { container } = render(
        Story(Story.args ?? {})
      );
  
      expect(screen.getAllByLabelText(/Email/i)[0]).toBeInTheDocument();
      expect(screen.getByText(/This is an error message/i)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  
    test('LeadingTextInput story renders with https prefix and error', () => {
      const Story = LeadingTextInput;
      const { container } = render(
        Story(Story.args ?? {})
      );
  
      expect(screen.getAllByLabelText(/Website/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText('https://')[0]).toBeInTheDocument();
      expect(screen.getByText(/This is an error message/i)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  
    test('typing works in Default TextInput', () => {
      const Story = Default;
      render(Story(Story.args ?? {}));
  
      const input = screen.getAllByLabelText(/Email/i)[0] as HTMLInputElement;
  
      fireEvent.change(input, { target: { value: 'femina@example.com' } });
      expect(input.value).toBe('femina@example.com');
    });
  });