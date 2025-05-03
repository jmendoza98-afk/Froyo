// Create a code that will prompt user to enter a list of flavors
// Code will create a table that will display the flavors that were inputed
// Create both html and java script file


const userInput = prompt("Enter a list of comma-separated fro-yo flavors (e.g., vanilla, vanilla, strawberry, coffee):");

const flavorsArray = userInput.split(",").map(flavor => flavor.trim());

function countFlavors(flavors) {
    const flavorCounts = {};
    
    for (let flavor of flavors) {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    }
    
    return flavorCounts;
}
const result = countFlavors(flavorsArray);
console.table(result);