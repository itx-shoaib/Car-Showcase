import {MouseEventHandler} from "react"

export interface ButtonProps{
    title : string,
    componentStyle ?: string,
    handleClick ?: MouseEventHandler<HTMLButtonElement>
}