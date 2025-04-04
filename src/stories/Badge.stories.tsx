import React from 'react';
import {BadgeProps} from '../@interfaces';
import { Badge } from '../Badge';
import {images} from '../data/images'
import {Meta, StoryObj} from '@storybook/react';
import { StoryLayout } from '../StoryLayout';
import { FiArrowRight, FiStar } from 'react-icons/fi';

const meta:Meta<typeof Badge> = {
    title: 'Example/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta;

interface Props extends BadgeProps {
    darkMode: boolean;
}

export const Default:StoryObj<Props> = {
    args: {
        darkMode: false,
        variant: "success",
        size: "md",
        children:<span>Label</span>
    }
}

export const LeadingIconBadge:StoryObj<Props>  = {
    args: {
        darkMode: false,
        variant: "success",
        size: "md",
        LeadingIcon:< FiStar/>
    },
    render: (args) => {
        return (
            <StoryLayout {...args} className="inline-flex flex-col space-y-2">
                <Badge {...args}>
                    Label
                </Badge>
            </StoryLayout>
        )
    }
}

export const ImageIconBadge:StoryObj<Props>  = {
    args: {
        darkMode: false,
        variant: "gray",
        size: "md",
        LeadingIcon: <img src={images.NL} alt="nl" className="w-4 h-4" />
    },
    render: (args) => {
        return (
            <StoryLayout {...args} className="inline-flex flex-col space-y-2">
                <Badge {...args}>
                    Newzeland
                </Badge>
            </StoryLayout>
        )
    }
}

export const TrailingIconBadge:StoryObj<Props>  = {
    args: {
        darkMode: false,
        variant: "primary",
        size: "md",
        TrailingIcon: < FiArrowRight/>
    },
    render: (args) => {
        return (
            <StoryLayout {...args} className="inline-flex flex-col space-y-2">
                <Badge {...args}>
                    Label
                </Badge>
            </StoryLayout>
        )
    }
}

