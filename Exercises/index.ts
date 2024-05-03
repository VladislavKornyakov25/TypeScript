const userData = {
	isBirtdayData:  true,
	ageData: 40,
	userNameData: 'John',
	messages: {
		error: 'Error'
	}
};

const userDataTuple: [boolean, number, string] = [true, 40, 'John'];

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

const message: string | number = 6;
const messages: string[] | number[] = ['a', 'b'];

// function printMsg (msg: string | number): void {
// 	if (typeof msg === 'string' || typeof msg === 'number') {
// 		console.log(msg.toString());
// 	} else {
// 		console.log(msg);	
// 	}
// }

function printMsg (msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach((m) => console.log(m));
	} else if (typeof msg === 'number') {
		console.log(msg.toFixed());		
	} else {
		console.log(msg);		
	}
	
}

printMsg(45);
const printReadings = (a: number | string, b: number | boolean): void => {
	if (a === b) {
		console.log(a, b);		
	} 
}

const checkReadings = (readings: {system: number} | {user: number}): void => {
	if ('system' in readings) {
		console.log(readings.system);		
	} else {
		console.log(readings.user);		
	}
}

function logValue(x: string | Date): void {
	if (x instanceof Date) {
		console.log(x.getDate());		
	} else {
		console.log(x.toLowerCase());		
	}
}

const port3000 : number = 3000;
const port3001 : number = 3001;

const serverConfig: {protocol:'http' | 'https'; port: 3000 | 3001} = {
	protocol: 'https',
	port: 3001
}

const startServer: (protocol: 'http' | 'https', port: 3000 | 3001) => string = (
	protocol: 'http' | 'https', 
	port: 3000 | 3001
): 'Server started' => {	

	if (port === port3000 || port === port3001) {
		console.log(`Server started on ${protocol}://server:${port}`);	
	} else {
		console.error('Invalid port');		
	}

	
	return 'Server started';
}
startServer(serverConfig.protocol, serverConfig.port);

type AnimationTimingFunction = 'ease' | 'ease-out' | 'ease-in';
type AnimationID = string | number;

function createAnimation(
	id: AnimationID, 
	animName: string, 
	timingFunc: AnimationTimingFunction = 'ease',
	duration: number,
	iterCount: 'infinite' | number
): void {
	const elem = document.querySelector(`#${id}`) as HTMLElement;
	if (elem) {
		console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);		
		elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
	}	
}

createAnimation('id', 'fade', 'ease', 5, 'infinite');