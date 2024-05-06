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
    engine: string;
    wheels: {
        number: number,
        type: string
    }
}

interface IShip {
    engine: string;
    sail: string;
}

function repairVehicle(vehicle: ICar | IShip) {
    if (isCar(vehicle)) {
        vehicle.wheels;
    } else if (isShip(vehicle)) {
        vehicle.sail;
    } else {
        vehicle
    }
}

function isCar(car: ICar | IShip): car is ICar {
    //return 'wheels' in car;
    return (car as ICar).wheels.number != undefined;
}

function isShip(ship: ICar | IShip): ship is IShip {
    //return 'wheels' in car;
    return 'sail' in ship;
}