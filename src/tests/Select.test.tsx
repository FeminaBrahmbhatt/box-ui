import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/Select.stories';
import { prices, countries } from '../data';

const { Default, SelectWithIcon } = composeStories(stories);

describe('🧪 Select Story Tests (Direct function call style)', () => {
  
  test('Default story renders with a default country and placeholder', () => {
    const Story = Default;
    const { container } = render(Story(Story.args ?? {}));

    // Check if the default country is visible
    expect(screen.getByText('Ahmedabad, IN')).toBeInTheDocument();
    // Snapshot test
    expect(container).toMatchSnapshot();
  });

  // Test case 2: SelectWithIcon story renders with a leading dollar sign icon and price
  test('SelectWithIcon story renders with a leading dollar sign icon and price', () => {
    const Story = SelectWithIcon;
    const { container } = render(Story(Story.args ?? {}));

    // Check if the icon is visible (using a test ID or a class, depending on how the icon is rendered)
    expect(screen.getByTestId('leading-icon')).toBeInTheDocument(); // If you've added a data-testid to the icon
    // Check if the default price is visible
    expect(screen.getByText('Any price')).toBeInTheDocument();
    // Snapshot test
    expect(container).toMatchSnapshot();
  });

  // Test case 3: Typing works in Default Select (Country selection)
  test('typing works in Default Select (Country selection)', async () => {
    const Story = Default;
    render(Story(Story.args ?? {}));
  
    const selectButton = screen.getByRole('button', { name: /Ahmedabad, IN/i });
    expect(selectButton).toBeInTheDocument();
    fireEvent.click(selectButton);
  
    const option = await screen.findByText('Amsterdam, NL');
  
    expect(option).toHaveTextContent('Amsterdam, NL');
  });  

  test('typing works in SelectWithIcon (Price selection)', async() => {
    const Story = SelectWithIcon;
    render(Story(Story.args ?? {}));

    const priceSelect = screen.getByRole('button', { name: /any price/i });
    expect(priceSelect).toBeInTheDocument();
    fireEvent.click(priceSelect);

    const option = await screen.findByText('100 - 200');
    fireEvent.click(option);
    
    expect(priceSelect).toHaveTextContent('100 - 200');
  });
});
 