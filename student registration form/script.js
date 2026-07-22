// ==============================
// Contact Form Validation
// ==============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get Values

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let subject = document.getElementById("subject").value.trim();

    let message = document.getElementById("message").value.trim();

    // Error Fields

    let nameError = document.getElementById("nameError");

    let emailError = document.getElementById("emailError");

    let subjectError = document.getElementById("subjectError");

    let messageError = document.getElementById("messageError");

    // Clear Errors

    nameError.textContent = "";

    emailError.textContent = "";

    subjectError.textContent = "";

    messageError.textContent = "";

    let valid = true;

    // =====================
    // Name Validation
    // =====================

    if (name === "") {

        nameError.textContent = "Name cannot be empty.";

        valid = false;

    }

    // =====================
    // Email Validation
    // =====================

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (email === "") {

        emailError.textContent = "Email is required.";

        valid = false;

    }

    else if (!emailRegex.test(email)) {

        emailError.textContent = "Enter a valid Email.";

        valid = false;

    }

    // =====================
    // Subject Validation
    // =====================

    if (subject.length < 5) {

        subjectError.textContent =
            "Subject must contain at least 5 characters.";

        valid = false;

    }

    // =====================
    // Message Validation
    // =====================

    if (message.length < 20) {

        messageError.textContent =
            "Message should contain at least 20 characters.";

        valid = false;

    }

    // =====================
    // Success
    // =====================

    if (valid) {

        alert("✅ Message Sent Successfully!");

        form.reset();

    }

});


// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 ||

        document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

};

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==============================
// Mobile Menu Toggle
// ==============================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    }

    else {

        navLinks.style.display = "flex";

        navLinks.style.flexDirection = "column";

    }

});


// ==============================
// Active Navigation Highlight
// ==============================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// Simple Fade Animation
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec => {

    observer.observe(sec);

});