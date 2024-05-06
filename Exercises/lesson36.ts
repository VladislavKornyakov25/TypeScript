interface IDepartment {
    name: string;
    budget: number;
}

const department: IDepartment = {
    name: 'web-dev',
    budget: 50000
}

interface IProject {
    name: string;
    projectBudget: number;
}


function transformDepartment(department: IDepartment, amount: number): IProject {
    return {
        name: department.name,
        projectBudget: amount
    }
}

const mainProject: IProject = transformDepartment(department, 5000);
