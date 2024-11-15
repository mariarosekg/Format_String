const changeString = (str) => {
    let result = ""; 
    for (let i = 0; i < str.length; i++) {
        result += i + str[i].toUpperCase(); 
    }
    return result;
};


let userInput = prompt("Enter a string:");


let formattedString = changeString(userInput);


console.log(formattedString);


document.body.innerHTML = `<p>${formattedString}</p>`;