export interface CarouselTypes {
    data?: CarouselData[]
}

export type CarouselData = {
    id: number
    image: string
    title: string
    description: string
}