/* ============================================================
   WalletLess — interaction layer (no dependencies)
   ============================================================ */
(function () {
	'use strict';

	var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var $ = function (s, c) { return (c || document).querySelector(s); };
	var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

	/* ---------- Footer year ---------- */
	var year = $('#year');
	if (year) year.textContent = new Date().getFullYear();

	/* ---------- Scroll reveal ---------- */
	var revealables = $$('.reveal');
	if (reduced || !('IntersectionObserver' in window)) {
		revealables.forEach(function (el) { el.classList.add('is-in'); });
	} else {
		var revealer = new IntersectionObserver(function (entries) {
			entries.forEach(function (e) {
				if (!e.isIntersecting) return;
				e.target.classList.add('is-in');
				revealer.unobserve(e.target);
			});
		}, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
		revealables.forEach(function (el) { revealer.observe(el); });
	}

	/* ---------- Card pile collapse (story) ---------- */
	var pile = $('#pile');
	if (pile) {
		if (reduced || !('IntersectionObserver' in window)) {
			pile.classList.add('is-stacked');
		} else {
			new IntersectionObserver(function (entries, obs) {
				entries.forEach(function (e) {
					if (!e.isIntersecting) return;
					setTimeout(function () { pile.classList.add('is-stacked'); }, 260);
					obs.unobserve(e.target);
				});
			}, { threshold: 0.45 }).observe(pile);
		}
	}

	/* ---------- Nav: stuck state, progress bar, parallax ---------- */
	var nav = $('#nav');
	var bar = $('#progressBar');
	var parallaxEls = reduced ? [] : $$('[data-parallax]');
	var ticking = false;

	function onFrame() {
		var y = window.pageYOffset || document.documentElement.scrollTop;

		if (nav) nav.classList.toggle('is-stuck', y > 12);

		if (bar) {
			var max = document.documentElement.scrollHeight - window.innerHeight;
			bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
		}

		for (var i = 0; i < parallaxEls.length; i++) {
			var el = parallaxEls[i];
			var speed = parseFloat(el.getAttribute('data-parallax')) || 0;
			el.style.transform = 'translate3d(0,' + (y * speed).toFixed(2) + 'px,0)';
		}

		ticking = false;
	}

	function onScroll() {
		if (ticking) return;
		ticking = true;
		window.requestAnimationFrame(onFrame);
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll, { passive: true });
	onFrame();

	/* ---------- Active section in nav ---------- */
	var navLinks = $$('.nav__links [data-nav]');
	var sections = navLinks
		.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
		.filter(Boolean);

	if (sections.length && 'IntersectionObserver' in window) {
		var spy = new IntersectionObserver(function (entries) {
			entries.forEach(function (e) {
				if (!e.isIntersecting) return;
				navLinks.forEach(function (a) {
					a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id);
				});
			});
		}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
		sections.forEach(function (s) { spy.observe(s); });
	}

	/* ---------- Mobile menu ---------- */
	var burger = $('#burger');
	var menu = $('#mobileMenu');

	function setMenu(open) {
		if (!burger || !menu || !nav) return;
		burger.setAttribute('aria-expanded', String(open));
		nav.classList.toggle('is-open', open);
		menu.hidden = !open;
	}

	if (burger) {
		burger.addEventListener('click', function () {
			setMenu(burger.getAttribute('aria-expanded') !== 'true');
		});
		$$('a', menu).forEach(function (a) {
			a.addEventListener('click', function () { setMenu(false); });
		});
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') setMenu(false);
		});
		window.addEventListener('resize', function () {
			if (window.innerWidth > 720) setMenu(false);
		});
	}

	/* ---------- Tile cursor spotlight ---------- */
	if (!reduced && window.matchMedia('(hover: hover)').matches) {
		$$('.tile').forEach(function (tile) {
			tile.addEventListener('pointermove', function (e) {
				var r = tile.getBoundingClientRect();
				tile.style.setProperty('--mx', (e.clientX - r.left) + 'px');
				tile.style.setProperty('--my', (e.clientY - r.top) + 'px');
			});
		});
	}

	/* ---------- Count-up stats ---------- */
	var counters = $$('[data-count]');
	if (counters.length && !reduced && 'IntersectionObserver' in window) {
		var countObs = new IntersectionObserver(function (entries, obs) {
			entries.forEach(function (e) {
				if (!e.isIntersecting) return;
				obs.unobserve(e.target);
				runCount(e.target);
			});
		}, { threshold: 0.6 });
		counters.forEach(function (el) { countObs.observe(el); });
	}

	function runCount(el) {
		var target = parseFloat(el.getAttribute('data-count')) || 0;
		var prefix = el.getAttribute('data-prefix') || '';
		var suffix = el.getAttribute('data-suffix') || '';
		var dur = 1300;
		var start = null;

		if (target === 0) { el.textContent = prefix + '0' + suffix; return; }

		function step(ts) {
			if (start === null) start = ts;
			var p = Math.min((ts - start) / dur, 1);
			var eased = 1 - Math.pow(1 - p, 4);
			el.textContent = prefix + Math.round(target * eased) + suffix;
			if (p < 1) window.requestAnimationFrame(step);
		}
		el.textContent = prefix + '0' + suffix;
		window.requestAnimationFrame(step);
	}

	/* ---------- Smooth anchor scroll (offset for fixed nav) ---------- */
	document.addEventListener('click', function (e) {
		var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
		if (!a) return;
		var id = a.getAttribute('href');
		if (!id || id === '#') return;
		var target = document.querySelector(id);
		if (!target) return;

		e.preventDefault();
		var top = target.getBoundingClientRect().top + window.pageYOffset - 76;
		window.scrollTo({ top: Math.max(top, 0), behavior: reduced ? 'auto' : 'smooth' });
		history.replaceState(null, '', id);
	});
})();
