import {Dispatch} from "react";

export interface QuestionAccordionTypes{
    title: string
    description: string
    onClick: (setOpen: Dispatch<boolean>) => void
    // open: boolean
}