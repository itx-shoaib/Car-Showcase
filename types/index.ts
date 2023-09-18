import {MouseEventHandler} from "react"

export interface ButtonProps{
    title : string,
    componentStyle ?: string,
    btnType ?: 'button' | 'submit',
    handleClick ?: MouseEventHandler<HTMLButtonElement>,
    textStyles?: string,
    rigthIcon?: string,
    isDisabled?: boolean
}

export interface SearchManufacturerProps{
    manufacturer : string;
    setManufacturer : (manufacturer : string) => void;
}

export interface CarProps{
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders:number; 
    displacement: number;
    drive:string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model : string;
    transmission: string;
    year: number;
}