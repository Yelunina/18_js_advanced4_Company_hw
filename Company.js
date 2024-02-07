class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(emloyee) {
        const index = this._employees.findIndex(({ id }) => id === emloyee.id);
        if (index < 0) {
            this._employees.push(emloyee);
        }
        return index < 0;
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    get size(){
        return this._employees.length;
    }
}
calcStats.onclick = function () {
    clearStats();
    const divStats = document.createElement('div');
    try {
        let age = persons.reduce((accum, p) => accum + p.getAge(), 0) / employees.length;
        const h3avg = createInfoElement(`Average age: ${age.toFixed(1)}`, 'h3');
        age = persons.reduce((min, p) => p.getAge() < min ? p.getAge() : min, persons[0].getAge());
        const h3min = createInfoElement(`Min age: ${age}`, 'h3');
        age = persons.reduce((max, p) => p.getAge() > max ? p.getAge() : max, persons[0].getAge());
        const h3max = createInfoElement(`Max age: ${age}`, 'h3');
        let totalSalary = salaryArray.reduce((accum, e) => accum + e.getSalary(), 0);
        const h3totalSalary = createInfoElement(`Total salary: ${totalSalary}`, 'h3');
        let averageSalary = totalSalary / persons.length;
        const h3averageSalary = createInfoElement(`Average salary: ${averageSalary}`, 'h3');
        divStats.append(h3avg, h3min, h3max, h3averageSalary, totalSalary,h3totalSalary);
    } catch (e) {
        console.log(e);
        const h3Error = createInfoElement('No data for processing', 'h3');
        divStats.append(h3Error);
    }
    stats.appendChild(divStats);
};