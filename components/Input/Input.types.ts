import {FieldValues, UseFormRegister} from "react-hook-form";

export interface InputTypes {
    type: string
    placeholder: string
    register: UseFormRegister<FieldValues>
    required: boolean
}