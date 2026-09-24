// ================= MOBILE MENU =================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// Close mobile menu when clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document.getElementById("navLinks")
            .classList.remove("active");

    });

});


// ================= PROJECT DETAILS =================

function showProject(projectName) {

    alert(
        projectName +
        "\n\nMore project details can be added here."
    );

}


// ================= CONTACT FORM =================

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "!\n\nYour message has been received."
    );

    document.querySelector(".contact-form").reset();

}