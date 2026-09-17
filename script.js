/* ============================================================
   Wool & Wild — Reader Experience JS
   Pure vanilla JavaScript · no libraries · no dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ---------- WAIT FOR DOM ---------- */
  document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       1. UNIQUE IDs FOR EVERY PART (so we can link/bookmark them)
       ============================================================ */
    const allParts = document.querySelectorAll(
      'main > section:nth-of-type(2) > article > section > article'
    );

    allParts.forEach(function (part, index) {
      const partNumber = index + 1;
      part.id = 'part-' + partNumber;
      part.setAttribute('data-part-number', partNumber);

      // Grab the Burmese title from the <h5>
      const titleEl = part.querySelector('h5');
      if (titleEl) {
        part.setAttribute('data-part-title', titleEl.textContent.trim());
      }
    });

    /* ============================================================
       2. READING PROGRESS BAR (top of page)
       ============================================================ */
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
    document.body.appendChild(progressBar);

    const progressFill = progressBar.querySelector('.reading-progress-fill');

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressFill.style.width = percent + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    /* ============================================================
       3. FLOATING "CONTINUE READING" BUTTON
       Remembers last scroll position in localStorage
       ============================================================ */
    const STORAGE_KEY = 'woolAndWild_lastScroll';

    const continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.setAttribute('aria-label', 'Continue reading where you left off');
    continueBtn.innerHTML = '📖 <span>Continue</span>';
    continueBtn.style.display = 'none';
    document.body.appendChild(continueBtn);

    // Save scroll position occasionally (throttled)
    let saveTimer = null;
    window.addEventListener('scroll', function () {
      if (saveTimer) return;
      saveTimer = setTimeout(function () {
        try {
          localStorage.setItem(STORAGE_KEY, window.scrollY);
        } catch (e) { /* localStorage may be blocked */ }
        saveTimer = null;
      }, 400);
    }, { passive: true });

    // Show button if a saved position exists and we've scrolled away
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && parseInt(saved, 10) > 400) {
        continueBtn.style.display = 'flex';
      }
    } catch (e) { /* ignore */ }

    continueBtn.addEventListener('click', function () {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          window.scrollTo({ top: parseInt(saved, 10), behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (e) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Hide the button when user is near the top
    window.addEventListener('scroll', function () {
      if (window.scrollY < 300) {
        continueBtn.classList.add('faded');
      } else {
        continueBtn.classList.remove('faded');
      }
    }, { passive: true });

    /* ============================================================
       4. FLOATING TOOLBAR — bottom-right
       Contains: theme toggle · font size · back-to-top
       ============================================================ */
    const toolbar = document.createElement('div');
    toolbar.className = 'reader-toolbar';
    toolbar.innerHTML = `
      <button class="tool-btn" id="themeToggle" aria-label="Toggle dark mode" title="Dark / Light mode">🌙</button>
      <button class="tool-btn" id="fontDown" aria-label="Decrease font size" title="Smaller text">A−</button>
      <button class="tool-btn" id="fontUp" aria-label="Increase font size" title="Larger text">A+</button>
      <button class="tool-btn" id="backTop" aria-label="Back to top" title="Back to top">↑</button>
    `;
    document.body.appendChild(toolbar);

    /* ---------- 4a. THEME TOGGLE ---------- */
    const themeToggle = document.getElementById('themeToggle');
    const THEME_KEY = 'woolAndWild_theme';

    function applyTheme(theme) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
      } else {
        document.documentElement.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
      }
    }

    try {
      const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
      applyTheme(savedTheme);
    } catch (e) {
      applyTheme('light');
    }

    themeToggle.addEventListener('click', function () {
      const isDark = document.documentElement.classList.contains('dark-mode');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      try { localStorage.setItem(THEME_KEY, newTheme); } catch (e) {}
    });

    /* ---------- 4b. FONT SIZE CONTROLS ---------- */
    const fontDown = document.getElementById('fontDown');
    const fontUp = document.getElementById('fontUp');
    const FONT_KEY = 'woolAndWild_fontSize';
    const FONT_MIN = 80;
    const FONT_MAX = 140;
    const FONT_STEP = 10;

    function applyFontSize(size) {
      document.documentElement.style.setProperty('--reader-font-scale', size + '%');
    }

    let currentFont = 100;
    try {
      const saved = localStorage.getItem(FONT_KEY);
      if (saved) currentFont = parseInt(saved, 10);
    } catch (e) {}
    applyFontSize(currentFont);

    fontUp.addEventListener('click', function () {
      currentFont = Math.min(FONT_MAX, currentFont + FONT_STEP);
      applyFontSize(currentFont);
      try { localStorage.setItem(FONT_KEY, currentFont); } catch (e) {}
    });

    fontDown.addEventListener('click', function () {
      currentFont = Math.max(FONT_MIN, currentFont - FONT_STEP);
      applyFontSize(currentFont);
      try { localStorage.setItem(FONT_KEY, currentFont); } catch (e) {}
    });

    /* ---------- 4c. BACK TO TOP ---------- */
    document.getElementById('backTop').addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ============================================================
       5. "PREV / NEXT PART" BUTTONS ON EACH NOVEL PART
       ============================================================ */
    allParts.forEach(function (part, index) {
      const nav = document.createElement('div');
      nav.className = 'part-nav';

      // Previous button
      const prevBtn = document.createElement('button');
      prevBtn.className = 'part-nav-btn';
      if (index === 0) {
        prevBtn.disabled = true;
        prevBtn.innerHTML = '← Start';
      } else {
        prevBtn.innerHTML = '← Previous';
        prevBtn.addEventListener('click', function () {
          scrollToPart(index - 1);
        });
      }
      nav.appendChild(prevBtn);

      // Chapter label in the middle
      const label = document.createElement('span');
      label.className = 'part-nav-label';
      label.textContent = 'Part ' + (index + 1) + ' of ' + allParts.length;
      nav.appendChild(label);

      // Next button
      const nextBtn = document.createElement('button');
      nextBtn.className = 'part-nav-btn';
      if (index === allParts.length - 1) {
        nextBtn.disabled = true;
        nextBtn.innerHTML = 'End →';
      } else {
        nextBtn.innerHTML = 'Next →';
        nextBtn.addEventListener('click', function () {
          scrollToPart(index + 1);
        });
      }
      nav.appendChild(nextBtn);

      part.appendChild(nav);
    });

    /* ---------- SCROLL TO A PART WITH OFFSET ---------- */
    function scrollToPart(index) {
      const target = allParts[index];
      if (!target) return;
      const headerOffset = 20;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
      // brief highlight
      target.classList.add('part-highlight');
      setTimeout(function () {
        target.classList.remove('part-highlight');
      }, 1500);
    }

    /* ============================================================
       6. TABLE OF CONTENTS (auto-generated)
       Injected right after the novel's <h3> / <p> meta block
       ============================================================ */
    const novelArticle = document.querySelector(
      'main > section:nth-of-type(2) > article'
    );

    if (novelArticle && allParts.length > 0) {
      const toc = document.createElement('details');
      toc.className = 'toc';
      toc.open = false;

      const summary = document.createElement('summary');
      summary.innerHTML = '📑 Table of Contents';
      toc.appendChild(summary);

      const list = document.createElement('ol');
      list.className = 'toc-list';

      let currentChapter = null;

      allParts.forEach(function (part, index) {
        // Find the closest chapter heading
        const chapterSection = part.closest('section');
        const chapterH4 = chapterSection
          ? chapterSection.querySelector('h4')
          : null;
        const chapterName = chapterH4 ? chapterH4.textContent.trim() : '';

        if (chapterName && chapterName !== currentChapter) {
          currentChapter = chapterName;
          const chapterHeader = document.createElement('li');
          chapterHeader.className = 'toc-chapter';
          chapterHeader.textContent = chapterName;
          list.appendChild(chapterHeader);
        }

        const titleEl = part.querySelector('h5');
        const partTitle = titleEl ? titleEl.textContent.trim() : 'Part ' + (index + 1);

        const li = document.createElement('li');
        li.className = 'toc-item';
        const link = document.createElement('a');
        link.href = '#part-' + (index + 1);
        link.textContent = partTitle;
        link.addEventListener('click', function (e) {
          e.preventDefault();
          scrollToPart(index);
          // close TOC on mobile after choosing
          if (window.innerWidth < 720) toc.open = false;
        });
        li.appendChild(link);
        list.appendChild(li);
      });

      toc.appendChild(list);

      // Insert TOC after the meta info, before the first chapter section
      const firstChapterSection = novelArticle.querySelector('section');
      if (firstChapterSection) {
        novelArticle.insertBefore(toc, firstChapterSection);
      } else {
        novelArticle.appendChild(toc);
      }
    }

    /* ============================================================
       7. KEYBOARD SHORTCUTS
       j / ↓  → next part
       k / ↑  → previous part
       t      → toggle theme
       Home   → back to top
       ============================================================ */
    document.addEventListener('keydown', function (e) {
      // Ignore when typing in an input (future-proof)
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      if (e.key === 'j') {
        const next = findNextVisiblePart(1);
        if (next) scrollToPart(next);
      } else if (e.key === 'k') {
        const prev = findNextVisiblePart(-1);
        if (prev) scrollToPart(prev);
      } else if (e.key.toLowerCase() === 't') {
        themeToggle.click();
      } else if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    function findNextVisiblePart(direction) {
      // Find the part whose top is closest to viewport top in given direction
      const scrollY = window.scrollY;
      let bestIndex = null;

      allParts.forEach(function (part, index) {
        const top = part.getBoundingClientRect().top + scrollY;
        if (direction > 0 && top > scrollY + 40) {
          if (bestIndex === null || top < getTop(bestIndex)) bestIndex = index;
        } else if (direction < 0 && top < scrollY - 40) {
          if (bestIndex === null || top > getTop(bestIndex)) bestIndex = index;
        }
      });

      function getTop(i) {
        return allParts[i].getBoundingClientRect().top + window.scrollY;
      }

      return bestIndex;
    }

    /* ============================================================
       8. SMOOTH SCROLL FOR IN-PAGE ANCHOR LINKS
       ============================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        const id = this.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 20;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });

    /* ============================================================
       9. "NEW" BADGE FOR UNREAD PARTS
       Marks each part as read once the user scrolls past it.
       ============================================================ */
    const READ_KEY = 'woolAndWild_readParts';
    let readSet = new Set();
    try {
      const stored = localStorage.getItem(READ_KEY);
      if (stored) readSet = new Set(JSON.parse(stored));
    } catch (e) {}

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const id = entry.target.id;
          const num = entry.target.getAttribute('data-part-number');
          if (num && !readSet.has(num)) {
            readSet.add(num);
            try {
              localStorage.setItem(READ_KEY, JSON.stringify(Array.from(readSet)));
            } catch (e) {}
          }
        }
      });
    }, { threshold: 0.5 });

    allParts.forEach(function (part) { observer.observe(part); });

    /* ============================================================
       10. LIVE WORD COUNT FOR NOVEL (optional info at top)
       ============================================================ */
    if (novelArticle) {
      let totalWords = 0;
      novelArticle.querySelectorAll('p').forEach(function (p) {
        const text = p.textContent.trim();
        if (!text) return;
        // count words separated by whitespace (works ok for Burmese too)
        totalWords += text.split(/\s+/).filter(Boolean).length;
      });

      const counter = document.createElement('p');
      counter.className = 'word-count';
      counter.textContent = '≈ ' + totalWords.toLocaleString() + ' words';
      novelArticle.appendChild(counter);
    }

  });
})();