function printMsg (msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach((m) => console.log(m));
	} else if (isNumber(msg)) {
		console.log(msg.toFixed());		
	} else {
		console.log(msg);		
	}
	
}

printMsg(45);

// function isNumber(n: string[] | number | boolean): n is number {
//     return typeof n === 'number';
// }
function isNumber(n: unknown): n is number {
    return typeof n === 'number';
}

interface ICar {
    name: 'car';
    engine: string;
    wheels: number;
}

interface IShip {
    name: 'ship';
    engine: string;
    sail: string;
}

interface IAirplanne {
    name: 'airplane';
    engine: string;
    wings: string;
}

interface ISuperAirplane {
    name: 'smth';
    engine: string;
    wings: string;
}
type TVehicle = ICar | IShip | IAirplanne | ISuperAirplane;

function isCar(car: TVehicle): car is ICar {
    return 'wheels' in car;    
}

function isShip(ship: TVehicle): ship is IShip {    
    return 'sail' in ship;
}

function repairVehicle(vehicle: TVehicle) {
    // if (isCar(vehicle)) {
    //     vehicle.wheels;
    // } else if (isShip(vehicle)) {
    //     vehicle.sail;
    // } else {
    //     vehicle.wings;
    // }
    switch (vehicle.name) {
        case 'car':
            console.log(vehicle.wheels);
            break;
        case 'ship':
            console.log(vehicle.sail);
            break;
        case 'airplane':
            console.log(vehicle.wings);
            break;
        case 'smth':
            console.log(vehicle.wings);
            break;            
        default:
            const smth: never = vehicle;
            console.log('OOOUUUPPPS');
            
            
            
            
    }
}