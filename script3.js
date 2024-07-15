let names = [];
let name;


while ((name = prompt("Enter a name (or '0' to stop):")) !== '0') {
    names.push(name);
}


let searchName = prompt("Enter the name to search:");


document.write("<h3>All names:</h3>");
document.write(`<p>${names.join(', ')}</p>`);


document.write(names.includes(searchName) ? `<p>Found ${searchName}</p>` : "<p>Not Found</p>");
