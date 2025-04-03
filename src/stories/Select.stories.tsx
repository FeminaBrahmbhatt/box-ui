
import React, {useState} from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../Select";
import { IOption, SelectProps } from "../@interfaces";
import { StoryLayout } from "../StoryLayout";
import { countries } from "../data/countries";
import { prices } from "../data/prices";
import {FiDollarSign} from 'react-icons/fi';

const meta: Meta<typeof Select> = {
    title: "Example/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
}

export default meta;

interface Props extends SelectProps {
    darkMode: false;
}

export const Default: StoryObj<Props> = {
    args: {
        darkMode: false
    },
    render: (args) => {
        const [selectedCountry, setSelectedCountry] = useState<IOption>(countries[0]);

        const handleSelectedCountry = (country:string) => {
            const option = countries.find((obj) => obj.value === country) as IOption;
            setSelectedCountry(option);
        }
        
        return(
            <StoryLayout {...args} className="flex">
                <Select 
                options={countries}
                selectedOption={selectedCountry}
                setSelectedOption={handleSelectedCountry}
                placeholder="Select country"
                width="w-50"
                />
            </StoryLayout>
        )
    }
}

export const SelectWithIcon: StoryObj<Props> = {
    args: {
        darkMode: false
    },
    render: (args) => {
        const [selectedPrice, setSelectedPrice] = useState<IOption>(prices[0]);

        const handleSelectedPrice = (price:string) => {
            const option = prices.find((obj) => obj.value === price) as IOption;
            setSelectedPrice(option);
        }
        
        return(
            <StoryLayout {...args} className="flex">
                <Select 
                options={prices}
                selectedOption={selectedPrice}
                setSelectedOption={handleSelectedPrice}
                placeholder="Select a price"
                LeadingIcon={<FiDollarSign />}
                width="w-50"
                />
            </StoryLayout>
        )
    }
}
