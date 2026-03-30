document.addEventListener('DOMContentLoaded', () => {
  /* =====================
     SMOOTH SCROLLING
     ===================== */
  // A lightweight custom Momentum Scroll imitating Lenis
  let scrollY = window.scrollY;
  let targetY = window.scrollY;
  let isScrolling = false;

  const smoothScrollLoop = () => {
    // Interpolation factor
    scrollY += (targetY - scrollY) * 0.1;

    // Stop loop if close enough
    if (Math.abs(targetY - scrollY) < 0.5) {
      scrollY = targetY;
      isScrolling = false;
    } else {
      window.scrollTo(0, scrollY);
      requestAnimationFrame(smoothScrollLoop);
    }
  };

  // We only intercept wheel events for basic smooth wheel scrolling
  window.addEventListener('wheel', (e) => {
    // Stop native smooth scrolling from fighting us
    if (!e.ctrlKey) {
      e.preventDefault();
      targetY += e.deltaY;
      targetY = Math.max(0, Math.min(targetY, document.documentElement.scrollHeight - window.innerHeight));
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScrollLoop);
      }
    }
  }, { passive: false });

  // Update targetY on direct scroll (e.g. scrollbar drag)
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      targetY = window.scrollY;
      scrollY = window.scrollY;
    }
  }, { passive: true });

  /* =====================
     MOBILE MENU
     ===================== */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  let menuOpen = false;

  mobileMenuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      iconMenu.classList.add('hidden');
      iconMenu.classList.remove('block');
      iconClose.classList.add('block');
      iconClose.classList.remove('hidden');

      mobileMenu.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'translate-y-0');
    } else {
      iconClose.classList.add('hidden');
      iconClose.classList.remove('block');
      iconMenu.classList.add('block');
      iconMenu.classList.remove('hidden');

      mobileMenu.classList.remove('opacity-100', 'translate-y-0');
      mobileMenu.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
    }
  });

  // Close mobile menu on clicking an item
  document.querySelectorAll('.mobile-nav-item').forEach(el => {
    el.addEventListener('click', () => {
      if (menuOpen) mobileMenuBtn.click();
    });
  });

  /* =====================
     NAVBAR HOVER
     ===================== */
  const desktopNav = document.getElementById('desktop-nav');
  const navItems = desktopNav.querySelectorAll('.nav-item');
  const hoverBg = document.getElementById('navbar-hover');

  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const parentRect = desktopNav.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      hoverBg.style.left = `${itemRect.left - parentRect.left}px`;
      hoverBg.style.width = `${itemRect.width}px`;
      hoverBg.classList.remove('opacity-0');
      hoverBg.classList.add('opacity-100');
    });
  });

  desktopNav.addEventListener('mouseleave', () => {
    hoverBg.classList.remove('opacity-100');
    hoverBg.classList.add('opacity-0');
  });


  /* =====================
     BENTO GRID ANIMATIONS
     ===================== */
  // Status dots
  const systemStatusDots = document.getElementById('system-status-dots');
  setInterval(() => {
    if (systemStatusDots) {
      Array.from(systemStatusDots.children).forEach(dot => {
        const active = Math.random() > 0.2;
        if (active) {
          dot.classList.remove('bg-zinc-700');
          dot.classList.add('bg-emerald-500');
          dot.style.animation = 'pulse-glow 1s infinite alternate';
        } else {
          dot.classList.remove('bg-emerald-500');
          dot.classList.add('bg-zinc-700');
          dot.style.animation = 'none';
        }
      });
    }
  }, 2000);

  // Keyboard command
  const kbdCmd = document.getElementById('kbd-cmd');
  const kbdK = document.getElementById('kbd-k');
  setInterval(() => {
    if (kbdCmd && kbdK) {
      kbdCmd.style.transform = 'scale(0.95) translateY(2px)';
      kbdK.style.transform = 'scale(0.95) translateY(2px)';
      setTimeout(() => {
        kbdCmd.style.transform = 'scale(1) translateY(0)';
        kbdK.style.transform = 'scale(1) translateY(0)';
      }, 200);
    }
  }, 3000);

  /* =====================
     PRICING TOGGLE
     ===================== */
  const btnMonthly = document.getElementById('btn-monthly');
  const btnYearly = document.getElementById('btn-yearly');
  const pricingBg = document.getElementById('billing-toggle-bg');
  const pricePro = document.getElementById('price-pro');
  const priceEnt = document.getElementById('price-ent');
  const billedPro = document.getElementById('billed-pro');
  const billedEnt = document.getElementById('billed-ent');

  // Initialization
  const updatePricingBg = (btn) => {
    const parentRect = btn.parentElement.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    pricingBg.style.left = `${btnRect.left - parentRect.left}px`;
    pricingBg.style.width = `${btnRect.width}px`;
  };

  // Initialize to Monthly
  updatePricingBg(btnMonthly);

  btnMonthly.addEventListener('click', () => {
    updatePricingBg(btnMonthly);
    btnMonthly.classList.remove('text-zinc-400');
    btnMonthly.classList.add('text-white');
    btnYearly.classList.remove('text-white');
    btnYearly.classList.add('text-zinc-400');

    pricePro.innerText = '$12';
    priceEnt.innerText = '$29';
    billedPro.classList.add('hidden');
    billedEnt.classList.add('hidden');
  });

  btnYearly.addEventListener('click', () => {
    updatePricingBg(btnYearly);
    btnYearly.classList.remove('text-zinc-400');
    btnYearly.classList.add('text-white');
    btnMonthly.classList.remove('text-white');
    btnMonthly.classList.add('text-zinc-400');

    pricePro.innerText = '$10';
    priceEnt.innerText = '$24';
    billedPro.classList.remove('hidden');
    billedEnt.classList.remove('hidden');
  });

  /* =====================
     SCROLL REVEAL (INTERSECTION OBSERVER)
     ===================== */
  const header = document.getElementById('header');
  setTimeout(() => {
    // Reveal header — use inline style to preserve the -50% horizontal centering
    header.classList.remove('opacity-0');
    header.classList.add('opacity-100');
    header.style.transform = 'translateX(-50%) translateY(0)';

    document.querySelectorAll('.hero-content > *').forEach(el => {
      el.classList.remove('opacity-0', 'translate-y-5');
      el.classList.add('opacity-100', 'translate-y-0');
    });
  }, 100);

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find elements inside the section that need animating
        const animatedElements = entry.target.querySelectorAll('.sr-fade-in-up, .sr-fade-in');

        if (animatedElements.length > 0) {
          animatedElements.forEach(el => {
            el.classList.remove('opacity-0', 'translate-y-5', 'translate-y-10');
            el.classList.add('opacity-100', 'translate-y-0');
          });
        }

        // Special SVG chart animation trigger
        const chart = entry.target.querySelector('.chart-content');
        if (chart) {
          chart.classList.remove('hidden', 'opacity-0');
          chart.classList.add('opacity-100');
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    // Adjust margin per element data attribute if exists
    const margin = el.getAttribute('data-margin');
    if (margin) {
      const customObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.sr-fade-in-up, .sr-fade-in');
            animatedElements.forEach(animEl => {
              animEl.classList.remove('opacity-0', 'translate-y-5', 'translate-y-10');
              animEl.classList.add('opacity-100', 'translate-y-0');
            });
            const chart = entry.target.querySelector('.chart-content');
            if (chart) {
              chart.classList.remove('hidden', 'opacity-0');
              chart.classList.add('opacity-100');
            }
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: `0px 0px ${margin} 0px`, threshold: 0 });
      customObserver.observe(el);
    } else {
      observer.observe(el);
    }
  });

  // Set current year in footer
  document.getElementById('year').innerText = new Date().getFullYear();

  /* =====================
     DOWNLOAD BUTTONS OS DETECTION
     ===================== */
  const getOS = () => {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'macOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }

    return os;
  };

  const osName = getOS();
  if (osName) {
    const downloadBtnIds = ['nav-download-btn', 'mobile-download-btn', 'hero-download-btn'];
    downloadBtnIds.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        // Identify the text content node to preserve the SVG icon in the hero button
        const textNode = Array.from(btn.childNodes).find(node =>
          node.nodeType === Node.TEXT_NODE && node.textContent.trim().includes('Download')
        );

        if (textNode) {
          textNode.textContent = textNode.textContent.replace('Download', `Download for ${osName}`);
        } else if (btn.innerText.includes('Download')) {
          // Fallback: search-and-replace in innerHTML but more targeted
          btn.innerHTML = btn.innerHTML.replace('Download', `Download for ${osName}`);
        }
      }
    });
  }

  /* =====================
     AI TYPING ANIMATION (FEATURE 3)
     ===================== */
  const aiSummaryText = document.getElementById('ai-summary-text');
  if (aiSummaryText) {
    const textToType = aiSummaryText.getAttribute('data-text');
    let index = 0;
    let isTyping = false;

    const typeEffect = () => {
      if (index < textToType.length) {
        aiSummaryText.textContent += textToType.charAt(index);
        index++;

        // AI-like variable speed: faster bursts with pauses at punctuation
        const char = textToType.charAt(index - 1);
        const baseSpeed = 10;
        const randomSpeed = Math.random() * 25;
        let delay = baseSpeed + randomSpeed;

        if (char === '.' || char === '!' || char === '?') {
          delay = 500; // Natural pause at end of sentences
        } else if (char === ',') {
          delay = 200; // Slight pause at commas
        }

        setTimeout(typeEffect, delay);
      } else {
        aiSummaryText.classList.add('typing-finished');
      }
    };

    const typingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isTyping) {
          isTyping = true;
          // Short delay before starting to allow user to see the card first
          setTimeout(typeEffect, 1000);
          typingObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    typingObserver.observe(aiSummaryText);
  }
});
