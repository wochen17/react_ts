import { Account, Avatars, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    
    
}

export client = new Client();

export account = new Account();

export avatars = new Avatars();

export database = new Databases();

export storage = new Storage();