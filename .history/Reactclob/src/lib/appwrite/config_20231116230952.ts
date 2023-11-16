import { Account, Avatars, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    
    
}

export const client = new Client();

export const account = new Account();

export const avatars = new Avatars();

export const database = new Databases();

export const storage = new Storage();