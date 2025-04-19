import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../Select";
import { IOption, SelectProps } from "../@interfaces";
import { StoryLayout } from "../StoryLayout";
import { countries } from "../data/countries";
import { prices } from "../data/prices";
import { FiDollarSign } from 'react-icons/fi';
import { IconWrapper } from "../utils/IconWrapper";

export default {
    title: "Example/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} as Meta;
interface Props extends SelectProps {
    darkMode: false;
}

export const Default: StoryObj<Props> = {
    args: {
        darkMode: false
    },
    render: (args) => {
        const SelectStory = () => {
            const [selectedCountry, setSelectedCountry] = useState<IOption>(countries[0]);

            const handleSelectedCountry = (country: string) => {
                const option = countries.find((obj) => obj.value === country) as IOption;
                setSelectedCountry(option);
            }

            return (
                <StoryLayout {...args} className="flex">
                    <Select
                        options={countries}
                        selectedOption={selectedCountry}
                        setSelectedOption={handleSelectedCountry}
                        placeholder="Select country"
                        width="w-50"
                    />
                </StoryLayout>
            );
        };
        return <SelectStory />;
    }
}

export const SelectWithIcon: StoryObj<Props> = {
    args: {
        darkMode: false
    },
    render: (args) => {
        const SelectWithIconStory = () => {
            const [selectedPrice, setSelectedPrice] = useState<IOption>(prices[0]);

            const handleSelectedPrice = (price: string) => {
                const option = prices.find((obj) => obj.value === price) as IOption;
                setSelectedPrice(option);
            }

            return (
                <StoryLayout {...args} className="flex">
                    <Select
                        options={prices}
                        selectedOption={selectedPrice}
                        setSelectedOption={handleSelectedPrice}
                        placeholder="Select a price"
                        LeadingIcon={<IconWrapper Icon={FiDollarSign} />}
                        width="w-50"
                    />
                </StoryLayout>
            );
        };
        return <SelectWithIconStory />;
    }
}
