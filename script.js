// ==========================================
// MOBILE MENU
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ==========================================
// ACTIVE NAVBAR
// ==========================================

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ==========================================
// PROJECT SEARCH
// ==========================================

const searchInput = document.getElementById("projectSearch");
const projectCards = document.querySelectorAll(".project-card");

searchInput.addEventListener("input", () => {

    const keyword = searchInput.value.toLowerCase();

    projectCards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if (text.includes(keyword)) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }

    });

});


// ==========================================
// PROJECT FILTER
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});

// ==========================================
// YEAR OTOMATIS
// ==========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==========================================
// JUMLAH PROJECT OTOMATIS
// ==========================================

const totalProjects = document.querySelectorAll(".project-card").length;

document.getElementById("projectCount").textContent =
    String(totalProjects).padStart(2, "0");


// ==========================================
// SCROLL ANIMATION
// ==========================================

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


document
    .querySelectorAll(
        ".team-card, .project-card, .github-card"
    )
    .forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "0.6s ease";

        observer.observe(element);

    });