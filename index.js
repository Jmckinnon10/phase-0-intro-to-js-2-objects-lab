// /* Function should take in 3 arguments 
// employee object a key and a value*/
const employee = {
  name: 'John',
  streetAddress: '64 Steven st' 
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = {...employee}
  newEmployee[key] = value
  return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {...employee}
  delete newEmployee[key]
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}






























// const employee = {
//   name: "John",
//   streetAddress: "64 Steven st, Hanson MA",
// }


// function updateEmployeeWithKeyAndValue(employee, key, value){
//   const newEmployee = {...employee}

//   newEmployee[key] = value;
//   return newEmployee;
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//   employee[key] = value;
//   return employee;
// }

// function deleteFromEmployeeByKey(employee, key){
//   const newKey = {...key};
//   delete newKey[key];
//   return newKey;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//   const deleteEmployee = {...employee};
//   delete employee[key];
//   return employee;
// }