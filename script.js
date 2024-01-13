/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // Use .map() to filter and console.log developers
  const developers = arr.map(employee => {
    if (employee.profession === "developer") {
      return employee;
    }
  });
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  // Use .forEach() to iterate and console.log developers
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  // Add a new employee object and console.log the updated array
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  // Use .filter() to remove admin objects and console.log the updated array
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  // Create a new array and concatenate it with the existing array, then console.log
  const newArray = [
    { id: 5, name: "emma", age: "22", profession: "designer" },
    { id: 6, name: "michael", age: "25", profession: "analyst" },
    { id: 7, name: "olivia", age: "23", profession: "manager" }
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
