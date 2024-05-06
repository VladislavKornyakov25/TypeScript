// let smth: unknown;

// smth = 'str';

// let data: string[] = smth;

// data.find(e => e);

function fetshData(data: unknown): void {
    if (typeof data === 'string') {
        console.log(data.toLowerCase());        
    }
}


const userDataW = '{"isBirdthdayData" : true, "ageData": 18, "userNameData": "John"}';

function safeParse(s: string) : unknown {
    return JSON.parse(s);
}

const data = safeParse(userDataW);

function transferData(d: unknown): void {
    if (typeof d === 'string') {
        console.log(d.toLowerCase());        
    } else if (typeof d === 'object' && d) {
        console.log(data);        
    } else {
        console.error('some error');        
    }
}

transferData(data);

