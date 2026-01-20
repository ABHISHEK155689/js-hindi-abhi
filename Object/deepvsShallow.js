var person1 = {
    name: "Abhishek",
    address: {
        city: "Delhi"
    }
};

var person2 = Object.assign({}, person1);

person2.address.city = "Mumbai";

console.log(person1.address.city); // Mumbai ❌
console.log(person2.address.city); // Mumbai





function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    var copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

var person2 = deepCopy(person1);
