export interface ButtonTypes {
    value: string
    onClick?: () => void
    width: string
    type?: "button" | "submit" | "reset" | undefined
}