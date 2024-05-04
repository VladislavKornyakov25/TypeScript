let salary: number;
salary = 500;

interface UserData {
    isBirdthdayData: boolean;
    ageData: number;
    userNameData: string;
}

const userDataNew = "{'isBirdthdayData' : true, 'ageData': 18, 'userNameData': 'John'}";

const userObj: UserData = JSON.parse(userDataNew);

let isOkay = true;

let movement: boolean | string = false;

if (isOkay) {
    movement = 'moviong';
}
