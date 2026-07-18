function myFunction() {
    var x = document.getElementById("fact");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// I added a "Fun Fact" button to the "My interests" secction to highlight something related to my interests. 
// When the button is clicked, it shows a fun fact section related to my last interest. It also hides the section when it is clicked again. 
// The Javascript selects the button and div elements and the event listener responds to the click for the following id: "fact".
// 
