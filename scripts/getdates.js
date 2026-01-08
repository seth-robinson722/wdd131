// Set the current year in the span with id "currentyear"
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Set the last modified date in the paragraph with id "lastModified"
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;