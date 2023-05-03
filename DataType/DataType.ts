export interface Menu {
    id: number,
    title: string,
    url: string
    

}
export interface CoursesType {
    id: number,
    title: string,
    image: string,
    href: string
    basepath?: string
}

export interface Team {
    id: number,
    name:string,
    position: string,
    profile_image: string,
    social_profiles: {
        facebook?: string,
        linkedin?: string,
        github?: string
    }
    
}


export interface CourseSyllabus {
    id: number,
    title: string,
    description?: string,
    image?: string,
    basepath: string
    quaters: QuaterType[]
}

export interface QuaterType {
    id: number,
    title: string,
    richtext: string,
}