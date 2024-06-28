// Write your solution in this file!
let employee = {
  name: "Johnson",
  streetAddress: 2355,
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newemp = { ...employee };
  newemp[key] = value;
  return newemp;
}
console.log(updateEmployeeWithKeyAndValue(employee, "name", "Omwoyo"));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
console.log(
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "mancella")
);

function deleteFromEmployeeByKey(employee, key) {
  let newEmp = { ...employee };
  delete newEmp[key];
  return newEmp;
}
console.log(deleteFromEmployeeByKey(employee, "name"));

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
