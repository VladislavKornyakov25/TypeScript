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

// type Config = {
// 	protocol:'http' | 'https'; 
// 	port: 3000 | 3001
// };

interface Config {
	protocol:'http' | 'https'; 
	port: 3000 | 3001;
	log: (msg: string) => void
}


// type Role = {
// 	role: string
// };

interface Role {
	role: string
}

interface ConfigWithRole extends Config, Role {}
// type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
	protocol: 'https',
	port: 3001,
	role: 'Admin',
	log: (msg: string): void => console.log(msg)
		
};

// const backupConfig: ConfigWithRole = {
// 	protocol: 'http',
// 	port: 3000,
// 	role: 'sysadmin'
// }

type StartFunction = (
	protocol: 'http' | 'https', 
	port: 3000 | 3001, 
	log: (msg: string) => void
) => string; 

const startServer: StartFunction = (
	protocol: 'http' | 'https', 
	port: 3000 | 3001,
	log: (msg: string) => void
): 'Server started' => {	
	log(`Server started on ${protocol}://server:${port}`);
	return 'Server started';
}

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

interface Styles {
	[key: string]: string
}

const styles: Styles = {
	position: 'absolut',
	top: '20px',
	left: '50px'
}