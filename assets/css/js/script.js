// ===== HAMBURGER MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });
    }

    // ===== MOBILE DROPDOWN TOGGLE =====
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            // Only on mobile (screen width <= 768px)
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parentDropdown = this.closest('.dropdown');
                if (parentDropdown) {
                    parentDropdown.classList.toggle('open');
                    const menu = parentDropdown.querySelector('.dropdown-menu');
                    if (menu) {
                        menu.classList.toggle('open');
                    }
                }
            }
        });
    });

    // ===== CLOSE MENU WHEN CLICKING OUTSIDE =====
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            if (nav && hamburger) {
                if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                    nav.classList.remove('active');
                    // Close all dropdowns
                    document.querySelectorAll('.dropdown.open').forEach(function(d) {
                        d.classList.remove('open');
                        const menu = d.querySelector('.dropdown-menu');
                        if (menu) {
                            menu.classList.remove('open');
                        }
                    });
                }
            }
        }
    });

    // ===== CLOSE MENU WHEN A LINK IS CLICKED (Mobile) =====
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                // Don't close if it's a dropdown toggle
                if (!this.classList.contains('dropdown-toggle')) {
                    const navLinks = document.getElementById('navLinks');
                    if (navLinks) {
                        navLinks.classList.remove('active');
                    }
                    // Close all dropdowns
                    document.querySelectorAll('.dropdown.open').forEach(function(d) {
                        d.classList.remove('open');
                        const menu = d.querySelector('.dropdown-menu');
                        if (menu) {
                            menu.classList.remove('open');
                        }
                    });
                }
            }
        });
    });

    // ===== CONSOLE MESSAGE =====
    console.log('🚀 CraveAi website loaded - Linkvertise API active');
    console.log(`📊 Page viewed: ${window.location.pathname}`);
});