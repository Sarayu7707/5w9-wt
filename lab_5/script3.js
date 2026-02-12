function performSearch() {
    const inputText = document.getElementById("inputText").value;
    const searchText = document.getElementById("searchText").value;
    const resultText = document.getElementById("outputText");

    if (!searchText) {
        resultText.value = "Please enter a search term.";
        return;
    }

    try {
        const regex = new RegExp(searchText, "g");
        const matches = inputText.match(regex);
        resultText.value = matches ? `Found ${matches.length} matches:\n${matches.join("\n")}` : "No matches found";
    } catch (error) {
        resultText.value = "Invalid regular expression";
    }
}

function performReplace() {
    const inputText = document.getElementById("inputText").value;
    const searchText = document.getElementById("searchText").value;
    const replaceText = document.getElementById("replaceText").value;
    const resultText = document.getElementById("outputText");

    try {
        const regex = new RegExp(searchText, "g");
        resultText.value = inputText.replace(regex, replaceText);
    } catch (error) {
        resultText.value = "Invalid regular expression";
    }
}

function performFormat() {
    const inputText = document.getElementById("inputText").value;
    const resultText = document.getElementById("outputText");
    
    // Capitalizes the first letter of every word
    const formatted = inputText.replace(/\b\w/g, (char) => char.toUpperCase());
    resultText.value = formatted;
}
