/* ================= 1. ACTIVE NAVBAR LINK ================= */
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("text-slate-900", "font-semibold");
    }
});

/* ================= 2. SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

/* ================= 3. CONTACT FORM → BACKEND CONNECT ================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = {
            name: this.querySelector('input[type="text"]').value.trim(),
            email: this.querySelector('input[type="email"]').value.trim(),
            message: this.querySelector("textarea").value.trim()
        };

        if (!data.name || !data.email || !data.message) {
            alert("Please fill all the fields.");
            return;
        }

        fetch("http://localhost:9091/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(res => res.text())
        .then(msg => {
            alert(msg);
            contactForm.reset();
        })
        .catch(err => {
            console.error(err);
            alert("Server error. Try again later.");
        });
    });
}

/* ================= 4. NAVBAR SHADOW ON SCROLL ================= */
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (!nav) return;
    if (window.scrollY > 10) nav.classList.add("shadow-lg");
    else nav.classList.remove("shadow-lg");
});
