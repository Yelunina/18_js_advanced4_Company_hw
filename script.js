//Add to stats total salary and average salary
const firm = new Company();

addPerson.onclick = function () {
    const person = new Person(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), birthDate.value);
    if (persons.findIndex(({ id }) => id === person.id) >= 0) {
        alert(`Person with id = ${person.id} exists`);
    } else {
        clearStats();
        persons.push(person);
        const li = createInfoElement(person.toString(), 'li');
        const buttonDel = createButtonDel(() => {
            clearStats();
            const index = persons.findIndex(({ id }) => id === person.id);
            persons.splice(index, 1);
        });
        li.append(buttonDel);
        personsList.append(li);
    }
    personId.value = firstName.value = lastName.value = birthDate.value = '';
};



function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.firstElementChild.nextElementSibling.remove();
    }
}
