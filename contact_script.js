document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript file loaded!");

    // Get elements
    const contactListElement = document.getElementById("contactList");
    const addButton = document.getElementById("addContactBtn");
    const clearButton = document.getElementById("clearContactsBtn");

    // Get form inputs
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    // Function to display contacts from localStorage
    function displayContacts() {
        if (!contactListElement) return; // Only run if contact list exists

        contactListElement.innerHTML = ""; // Clear previous list
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

        if (contacts.length === 0) {
            contactListElement.innerHTML = "<li>No contacts found.</li>";
            return;
        }

        contacts.forEach(contact => {
            const li = document.createElement("li");
            li.textContent = `${contact.name} - ${contact.email} - ${contact.phone}`;
            contactListElement.appendChild(li);
        });
    }

    // Function to add a new contact
    function addContact() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!name || !email || !phone) {
            alert("All fields are required!");
            return;
        }

        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts.push({ name, email, phone });

        localStorage.setItem("contacts", JSON.stringify(contacts));

        // Clear inputs
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";

        alert("Contact saved successfully!");
        
        // Update the displayed list
        displayContacts();
    }

    // Function to clear all contacts
    function clearContacts() {
        if (confirm("Are you sure you want to clear all contacts?")) {
            localStorage.removeItem("contacts");
            displayContacts();
            alert("All contacts cleared!");
        }
    }

    // Attach event listeners
    if (addButton) addButton.addEventListener("click", addContact);
    if (clearButton) clearButton.addEventListener("click", clearContacts);

    // Display contacts on page load
    displayContacts();
});
