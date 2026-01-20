var employees = [
    {id: 1, name: "Abhi", password: "123"},
    {id: 2, name: "Muskan", password: "123"},
    {id: 3, name: "Mehek", password: "123"},
    {id: 4, name: "Rashid", password: "123"},
    {id: 5, name: "Sonia", password: "123"}
];

// Convert to JSON string
var employeesJSON = JSON.stringify(employees);

// Parse back to object
var employeesObj = JSON.parse(employeesJSON);

console.log(employeesObj[0].name); // Abhi
