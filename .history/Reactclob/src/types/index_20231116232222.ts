export type INavLink = {
    imageUrl: String,
    route: String, 
    label: String
};

export type IUpdateUser = {
    userId: String,
    name: String,
    bio: String,
    imageId: String,
    imageUrl: URL | String,
    file: File[]
}

export type INewUser = {
    name: String,
    email: String,
    username: String,
    password: String
}