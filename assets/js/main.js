/**
 * Rawlson Technologies - Main Script
 * Lightweight vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Handle mobile sub-dropdown toggles
    const mobileDropdownTriggers = document.querySelectorAll('.mobile-has-dropdown > a');
    mobileDropdownTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = trigger.parentElement;
        const submenu = parent.querySelector('.mobile-dropdown');
        if (submenu) {
          submenu.classList.toggle('show');
          const icon = trigger.querySelector('.dropdown-icon');
          if (icon) {
            icon.style.transform = submenu.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
          }
        }
      });
    });

    // Close mobile nav when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a:not(.mobile-dropdown-toggle)');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Sticky Header Shadow on Scroll ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Contact Form Simulation ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.backgroundColor = '#25D366';
        contactForm.reset();
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.backgroundColor = '';
        }, 4000);
      }, 1000);
    });
  }
});

