export interface IOption {
    value: string,
    label: string | React.ReactNode,
}
export interface SelectProps{
    placeholder: string,
    options?: IOption[],
    selectedOption?: IOption | undefined,
    setSelectedOption: (option: string) => void,
    LeadingIcon?: React.ReactElement,
    width?: string
}