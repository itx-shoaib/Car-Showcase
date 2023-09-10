import {MouseEventHandler} from "react"

export interface ButtonProps{
    title : string,
    componentStyle ?: string,
    btnType ?: 'button' | 'submit',
    handleClick ?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps{
    manufacturer : string;
    setManufacturer : (manufacturer : string) => void;
}