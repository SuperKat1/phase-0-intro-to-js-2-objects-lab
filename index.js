const employee = {
    name: "Fred",
    streetAddress: "52 Crazy St" 
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key)  {
    const newRecord = { ...employee};
    delete newRecord[key];
    return newRecord;
}

function destructivelyDeleteFromEmployeeByKey(employee, key)  {
    delete employee[key];
    return employee;
}