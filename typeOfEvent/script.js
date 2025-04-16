function displayFunctionOutput() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous content

    // Create a form
    const form = document.createElement("form");
    form.classList.add("form-group");

    // Create label
    const label = document.createElement("label");
    label.setAttribute("for", "eventCount");
    label.textContent = "How many events do you plan to organize? ";
    label.style.fontWeight = "bold";
    label.style.display = "block";
    label.style.marginBottom = "5px";

    // Create select dropdown
    const select = document.createElement("select");
    select.id = "eventCount";
    select.required = true;
    select.style.width = "50%";
    select.style.padding = "10px";
    select.style.border = "1px solid #ccc";
    select.style.borderRadius = "5px";
    select.style.fontSize = "16px";

    // Options for the select menu with navigation links
    const options = [
        { value: "", text: "Number of Events", link: "" },
        { value: "one", text: "Just One Event", link: "one-event.html" },
        { value: "twoToFive", text: "2-5 Events", link: "two-to-five-events.html" },
        { value: "fiveToTen", text: "5-10 Events", link: "five-to-ten-events.html" },
        { value: "tenToTwentyFive", text: "10-25 Events", link: "ten-to-twenty-five-events.html" },
        { value: "twentyFiveAbove", text: "25+ Events", link: "twenty-five-above.html" },
        { value: "notSure", text: "I'm not sure yet", link: "not-sure.html" }
    ];

    options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.text;
        select.appendChild(option);
    });

    // Event listener for selection change (navigation)
    select.addEventListener("change", function() {
        const selectedOption = options.find(opt => opt.value === this.value);
        if (selectedOption && selectedOption.link) {
            window.location.href = selectedOption.href = "../createEventForm"; // Navigate to the selected page
        }
    });

    // Append elements to form
    form.appendChild(label);
    form.appendChild(select);

    // Append form to output div
    outputDiv.appendChild(form);
}
