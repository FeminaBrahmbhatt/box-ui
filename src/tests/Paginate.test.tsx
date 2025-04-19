import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from '../stories/Paginate.stories';

const {
  DesktopPagination,
  MobilePagination
} = composeStories(stories);

describe('📘 Pagination Storybook Stories', () => {
  test('renders DesktopPagination component', () => {
    const Story = DesktopPagination;
    const { container } = render(
      Story(Story.args ?? {})
    );
    
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    
    expect(container).toMatchSnapshot();
  });

  test('renders MobilePagination component', () => {
    const Story = MobilePagination;
    const { container } = render(
      Story(Story.args ?? {})
    );
    
    expect(container.querySelector('svg')).toBeInTheDocument(); // FiArrowRight

    expect(screen.getByTestId('prevBtn')).toBeInTheDocument();
    expect(screen.getByTestId('nextBtn')).toBeInTheDocument();    
    expect(screen.getByText('Page 0 of 10')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  test('renders DesktopPagination with total pages', () => {
    const Story = DesktopPagination;
    const { container } = render(
        Story({ totalPages: 5 })
    );
    
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }

    expect(container).toMatchSnapshot();
  });

  test('renders MobilePagination with page information', () => {
    const Story = MobilePagination;
    const { container } = render(
      Story({ totalPages: 5 })
    );
    
    expect(screen.getByText('Page 0 of 5')).toBeInTheDocument();
    
    expect(container).toMatchSnapshot();
  });

  test('renders DesktopPagination in dark mode', () => {
    const Story = DesktopPagination;
    const { container } = render(
      Story({ darkMode: true, totalPages: 5 })
    );

    expect(container.firstChild).toHaveClass('dark'); // Assuming you have dark mode styling applied with a class 'dark'

    expect(container).toMatchSnapshot();
  });

  test('renders MobilePagination in dark mode', () => {
    const Story = MobilePagination;
    const { container } = render(
      Story({ darkMode: true, totalPages: 5 })
    );

    expect(container.firstChild).toHaveClass('dark');

    expect(container).toMatchSnapshot();
  });
});
