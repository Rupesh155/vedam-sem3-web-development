const fs = require("fs");

// Create Folder
fs.mkdirSync("students");

console.log("Folder created");

// Create File
fs.writeFileSync(
    "students/data.txt",
    "Rohit\nAman\nRahul\nRaju"
);

console.log("File created");

// Read File
const data = fs.readFileSync("students/data.txt");

console.log("Current Data:");
console.log(data.toString());

// Append Data
fs.appendFileSync(
    "students/data.txt",
    "\nPriya"
);

console.log("Data added");

// Read Updated File
const updatedData = fs.readFileSync("students/data.txt");

console.log("Updated Data:");
console.log(updatedData.toString());










// async way
// ====================
// 1. CREATE FOLDER
// ====================

fs.mkdir("students", (err) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log("Folder created");
});


// ====================
// 2. CREATE FILE
// ====================

fs.writeFile(
    "students/data.txt",
    "Rohit\nAman\nRahul\nRaju",
    (err) => {
        if (err) {
            console.log(err.message);
            return;
        }

        console.log("File created");
    }
);


// ====================
// 3. READ FILE
// ====================

fs.readFile("students/data.txt", (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log("Current Data:");
    console.log(data.toString());
});


// ====================
// 4. APPEND DATA
// ====================

fs.appendFile(
    "students/data.txt",
    "\nPriya",
    (err) => {
        if (err) {
            console.log(err.message);
            return;
        }

        console.log("Data added");
    }
);


// ====================
// 5. READ UPDATED FILE
// ====================

fs.readFile("students/data.txt", (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log("Updated Data:");
    console.log(data.toString());
});







