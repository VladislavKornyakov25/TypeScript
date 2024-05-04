interface User {
    readonly login: string;
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

const userFrezze: Readonly<User> = {// свойство ридонли применяется ко всем свойствам объекта
    login: 'first!',
    password: 'asdf',
    age: 30
} // свойство ридонли применяется ко всем свойствам объекта
const dbName = '11234';

function sendUserData(obj: User, db?: string): void {
    console.log(obj.parents?.mother, db?.toLowerCase());    
}

const basicPorts: readonly number[] = [3000, 3001, 5555];


