interface User {
    login: string;
    password: string;
    age: number;
    address?: string; //optional fieled
    //address: string | undefined; // required but can filled by undefined value
    parents?: {
        mother?: string;
        father?: string;
    }
}

const user: User = {
    login: 'first!',
    password: 'asdf',
    age: 30
}

const dbName = '11234';

function sendUserData(obj: User, db?: string): void {
    console.log(obj.parents?.mother, db?.toLowerCase());
    
}