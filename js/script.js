document.addEventListener("DOMContentLoaded", () => {
    const navbarCollapse = document.getElementById("navbarNav");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelectorAll(".swapnil-header .nav-link");

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
            }
        });
    });

    // Close menu when clicking outside the menu
    document.addEventListener("click", (e) => {
        if (
            navbarCollapse.classList.contains("show") &&
            !navbarCollapse.contains(e.target) &&
            !navbarToggler.contains(e.target)
        ) {
            bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
        }
    });

    // Close menu on scroll
    window.addEventListener("scroll", () => {
        if (navbarCollapse.classList.contains("show")) {
            bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
        }

        // Optional: Smooth header shadow on scroll
        const header = document.querySelector(".swapnil-header");
        if (header) {
            if (window.scrollY > 10) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });
});

// Featured Project
const modals = [
    { trigger: ".popup-trigger-1", popup: "#popup-project-1", close: ".popup-close-1" },
    { trigger: ".popup-trigger-2", popup: "#popup-project-2", close: ".popup-close-2" },
    { trigger: ".popup-trigger-3", popup: "#popup-project-3", close: ".popup-close-3" },
    { trigger: ".popup-trigger-4", popup: "#popup-project-4", close: ".popup-close-4" },
    { trigger: ".popup-trigger-5", popup: "#popup-project-5", close: ".popup-close-5" },
    { trigger: ".popup-trigger-6", popup: "#popup-project-6", close: ".popup-close-6" },
  ];

  modals.forEach(({ trigger, popup, close }) => {
    document.querySelector(trigger).addEventListener("click", () => {
      document.querySelector(popup).style.display = "block";
    });

    document.querySelector(close).addEventListener("click", () => {
      document.querySelector(popup).style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === document.querySelector(popup)) {
        document.querySelector(popup).style.display = "none";
      }
    });
  });

// Projects Page
// Modal Logic
document.querySelectorAll('.btn-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        const modal = document.getElementById(target);
        if (modal) modal.style.display = 'flex';
    });
});

document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        const modal = document.getElementById(target);
        if (modal) modal.style.display = 'none';
    });
});

window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
