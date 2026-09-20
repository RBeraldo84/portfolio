/**
 * Rodrigo Beraldo — Portfolio
 * Main script: nav, scrollspy, reveal-on-scroll, typed effect, lightbox
 */
(function () {
  "use strict";

  const header = document.getElementById('header');
  const navbar = document.getElementById('navbar');
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelectorAll('#navbar .nav-link');
  const backToTop = document.querySelector('.back-to-top');
  const preloader = document.getElementById('preloader');

  /* Preloader */
  window.addEventListener('load', () => {
    if (preloader) preloader.classList.add('hidden');
  });

  /* Header + back-to-top state on scroll */
  const onScroll = () => {
    const scrolled = window.scrollY > 60;
    header.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('active', window.scrollY > 300);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile nav toggle */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('open');
      document.body.classList.toggle('nav-open', isOpen);
      navToggle.innerHTML = isOpen ? '<i class="bi bi-x"></i>' : '<i class="bi bi-list"></i>';
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
      document.body.classList.remove('nav-open');
      if (navToggle) navToggle.innerHTML = '<i class="bi bi-list"></i>';
    });
  });

  /* Scrollspy via IntersectionObserver */
  const sections = document.querySelectorAll('main section[id], #hero');
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(section => spy.observe(section));
  }

  /* Reveal on scroll */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const reveal = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => reveal.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* Photo assembly pipeline: scattered pieces -> pipe -> assembled photo */
  const pipelineBanner = document.querySelector('.photo-pipeline-banner');
  const assemblyFrame = pipelineBanner ? pipelineBanner.querySelector('.assembly-frame') : null;
  const pipelineImg = assemblyFrame ? assemblyFrame.querySelector('img') : null;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (pipelineBanner && prefersReducedMotion) {
    // No flying pieces to wait for: the photo is already visible, so show
    // the "done" status right away instead of an empty scatter zone.
    pipelineBanner.classList.add('assembled', 'done');
  } else if (pipelineBanner && assemblyFrame && pipelineImg) {
    const scatterZone = pipelineBanner.querySelector('.scatter-zone');
    const COLS = 9;
    const ROWS = 12;
    const TOTAL = COLS * ROWS;
    const PIECE_DELAY_STEP = 24; // ms between each piece's arrival; keep in sync with the JS below
    const PIECE_TRANSITION_MS = 1100; // must match .piece transform transition duration in style.css

    const build = () => {
      pipelineBanner.querySelectorAll('.piece, .slot-empty').forEach(el => el.remove());
      pipelineBanner.classList.remove('assembled');

      const bannerRect = pipelineBanner.getBoundingClientRect();
      const scatterRect = scatterZone.getBoundingClientRect();
      const assemblyRect = assemblyFrame.getBoundingClientRect();
      const pieceW = assemblyRect.width / COLS;
      const pieceH = assemblyRect.height / ROWS;
      const src = pipelineImg.currentSrc || pipelineImg.src;
      // Slight overlap between neighboring pieces so sub-pixel rounding
      // doesn't leave hairline seams between them once assembled.
      const BLEED = 1;

      for (let i = 0; i < TOTAL; i++) {
        const col = i % COLS;
        const row = Math.floor(i / COLS);
        const slot = document.createElement('div');
        slot.className = 'slot-empty';
        slot.style.width = `${pieceW}px`;
        slot.style.height = `${pieceH}px`;
        slot.style.transform = `translate(${assemblyRect.left - bannerRect.left + col * pieceW}px, ${assemblyRect.top - bannerRect.top + row * pieceH}px)`;
        pipelineBanner.appendChild(slot);
      }

      const order = Array.from({ length: TOTAL }, (_, i) => i);
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }

      const margin = 6;
      order.forEach((slotIndex, seq) => {
        const col = slotIndex % COLS;
        const row = Math.floor(slotIndex / COLS);
        const targetX = assemblyRect.left - bannerRect.left + col * pieceW;
        const targetY = assemblyRect.top - bannerRect.top + row * pieceH;
        const startX = scatterRect.left - bannerRect.left + margin + Math.random() * Math.max(1, scatterRect.width - pieceW - margin * 2);
        const startY = scatterRect.top - bannerRect.top + margin + Math.random() * Math.max(1, scatterRect.height - pieceH - margin * 2);
        const startRotate = (Math.random() * 50 - 25).toFixed(1);

        const piece = document.createElement('div');
        piece.className = 'piece';
        piece.style.width = `${pieceW + BLEED * 2}px`;
        piece.style.height = `${pieceH + BLEED * 2}px`;
        piece.style.backgroundImage = `url(${src})`;
        piece.style.backgroundSize = `${assemblyRect.width}px ${assemblyRect.height}px`;
        piece.style.backgroundPosition = `${-(col * pieceW - BLEED)}px ${-(row * pieceH - BLEED)}px`;
        const arriveDelay = `${seq * PIECE_DELAY_STEP}ms`;
        piece.style.transitionDelay = arriveDelay;
        piece.style.setProperty('--arrive-delay', arriveDelay);
        piece.style.transform = `translate(${startX - BLEED}px, ${startY - BLEED}px) rotate(${startRotate}deg) scale(0.85)`;
        piece.dataset.targetX = `${targetX - BLEED}px`;
        piece.dataset.targetY = `${targetY - BLEED}px`;
        pipelineBanner.appendChild(piece);
      });
    };

    const assemble = () => {
      pipelineBanner.classList.remove('done');
      pipelineBanner.classList.add('assembled');
      pipelineBanner.querySelectorAll('.piece').forEach(piece => {
        piece.style.transform = `translate(${piece.dataset.targetX}, ${piece.dataset.targetY}) rotate(0deg) scale(1)`;
      });
    };

    const REST_MS = 3000; // how long "pipeline concluído" stays up before looping
    let isVisible = false;
    let cycleActive = false;

    const runCycle = () => {
      if (!isVisible || cycleActive) return;
      cycleActive = true;
      build();

      // Ensure the browser paints the scattered state at least once before
      // it becomes eligible to flip to "assembled" — otherwise, when the
      // section is already in view, the transition has nothing to animate
      // from and the pieces appear pre-assembled.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          assemble();
          const totalTime = (TOTAL - 1) * PIECE_DELAY_STEP + PIECE_TRANSITION_MS + 150;
          setTimeout(() => {
            pipelineBanner.classList.add('done');
            setTimeout(() => {
              cycleActive = false;
              runCycle(); // loop, but only if still in view
            }, REST_MS);
          }, totalTime);
        });
      });
    };

    const armPipeline = () => {
      if ('IntersectionObserver' in window) {
        const pipelineObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            isVisible = entry.isIntersecting;
            if (isVisible) runCycle();
          });
        }, { threshold: 0.3 });
        pipelineObserver.observe(pipelineBanner);
      } else {
        isVisible = true;
        runCycle();
      }
    };

    let resizeTimer;
    window.addEventListener('resize', () => {
      if (cycleActive) return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 150);
    }, { passive: true });

    if (pipelineImg.complete) {
      armPipeline();
    } else {
      pipelineImg.addEventListener('load', armPipeline, { once: true });
    }
  }

  /* Typed hero role */
  const typedEl = document.querySelector('.typed');
  if (typedEl && window.Typed) {
    const strings = typedEl.getAttribute('data-typed-items').split(',').map(s => s.trim());
    new Typed('.typed', {
      strings,
      loop: true,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1800
    });
  }

  /* Portfolio + passions lightbox */
  if (window.GLightbox) {
    GLightbox({ selector: '.portfolio-lightbox, .passion-lightbox' });
  }

  /* Netlify contact form (AJAX submit) */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const status = contactForm.querySelector('.form-status');
    const encode = (data) => Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      const t = window.i18n ? window.i18n.t : (key) => key;

      status.textContent = t('contact.sending');
      status.setAttribute('data-state', 'sending');

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data)
      })
        .then(() => {
          status.textContent = t('contact.success');
          status.setAttribute('data-state', 'success');
          contactForm.reset();
        })
        .catch(() => {
          status.textContent = t('contact.error');
          status.setAttribute('data-state', 'error');
        });
    });
  }

  /* Footer year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
