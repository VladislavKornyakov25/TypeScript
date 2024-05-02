const isBirtdayData: boolean = true;
let ageData: number  = 40;
const userNameData: string = 'John';


const userData = {
	isBirtdayData:  true,
	ageData: 40,
	userNameData: 'John',
	messages: {
		error: 'Error'
	}
}

const createError = (msg: string) => {
    throw new Error(msg)
}

function logBrtMsg (
	{isBirtdayData, userNameData, ageData, messages: {error}}: {
		isBirtdayData: boolean, 
		userNameData: string, 
		ageData: number,
		messages: {error: string}
}): string {
    if (isBirtdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;    
    } else {
        return createError(error);
    }
}
console.log(logBrtMsg(userData));

const departments: string[] = ['dev', 'design', 'marketing'];
const nums: number[] = [1, 2, 3, 4];

const report = departments
				.filter((d:string) => d !== 'dev')
				.map((d: string) => `${d} - done`)

const [first] = report;
console.log(first);