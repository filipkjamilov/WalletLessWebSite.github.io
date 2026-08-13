/* ============================================================
   WalletLess — MK / EN / SQ
   Text lives here; markup carries data-i18n keys.
   ============================================================ */
(function () {
	'use strict';

	var STORE_KEY = 'wl-lang';
	var DEFAULT = 'mk';

	var DICT = {
		mk: {
			'meta.title': 'WalletLess — Сите ваши картички за лојалност на едно место',
			'meta.desc': 'WalletLess е виртуелен паричник за вашите картички за лојалност. Достапни офлајн, подредени според вашата локација. Бесплатно за iPhone.',

			'skip': 'Прескокни до содржината',
			'a11y.menu': 'Мени',
			'a11y.lang': 'Избор на јазик',
			'a11y.links': 'Дополнителни врски',

			'nav.overview': 'Преглед',
			'nav.why': 'Зошто',
			'nav.story': 'Приказна',
			'nav.contact': 'Контакт',
			'nav.whyLong': 'Зошто WalletLess?',
			'nav.storyLong': 'Како започна',

			'hero.badge': 'Достапно на App Store',
			'hero.appstore': 'Преземи на App Store',
			'hero.more': 'Дознај повеќе',
			'hero.title1': 'Сите ваши картички.',
			'hero.title2': 'Во еден паричник.',
			'hero.lede': 'WalletLess ги собира сите ваши картички за лојалност во телефонот. Достапни се и офлајн, а секогаш најгоре е онаа што ви треба — подредени според тоа каде се наоѓате.',
			'hero.meta1': 'Бесплатно',
			'hero.meta2': 'Без реклами',
			'hero.meta3': 'Работи офлајн',

			'ui.title': 'Мои картички',
			'ui.near': 'Во близина · Скопје',
			'ui.badge': 'Најблиску',
			'chip.sorted': 'Сортирано по локација',
			'chip.offline': 'Достапно офлајн',

			'stat.langs': 'јазици во апликацијата',
			'stat.cards': 'картички без ограничување',
			'stat.offline': 'функционалност офлајн',
			'stat.priceValue': '0 ден.',
			'stat.price': 'сега и засекогаш',

			'why.eyebrow': 'Зошто WalletLess?',
			'why.title1': 'Полесни џебови.',
			'why.title2': 'Помалку размислување.',

			't1.h': 'Картичката што ви треба — секогаш на врвот',
			't1.p': 'WalletLess ги подредува картичките според локацијата на вашиот уред. Влегувате во продавница, ја вадите апликацијата и таа веќе ве чека.',
			't2.h': 'Помалку за носење',
			't2.p': 'Додајте ги сите картички за лојалност еднаш и оставете го паричникот дома.',
			't3.h': 'Работи и без интернет',
			't3.p': 'Сите картички се зачувани на уредот. Слаб сигнал во маркетот повеќе не е проблем.',
			't4.p': 'Достапно на три јазици — македонски, англиски и албански.',

			'story.eyebrow': 'Како се започна?',
			'story.title': 'Паричниците стануваа сè подебели.',
			'story.p1': 'Секој супермаркет, продавница за храна, кино и аптека има своја картичка за лојалност. Со нив доаѓаат поени, попусти и членства — награди што сите ги сакаме.',
			'story.p2': 'Но носењето десетина парчиња пластика во џеб е сè друго освен пријатно.',
			'story.quote': 'Ајде да признаеме! Тоа е фрустрирачки.',

			'cta.title': 'Оставете го паричникот дома.',
			'cta.lede': 'Преземете ја апликацијата бесплатно и додајте ја првата картичка за помалку од минута.',
			'cta.ios': 'Преземи за iPhone',
			'cta.mail': 'Прашање или предлог?',

			'footer.email': 'Е-пошта',
			'footer.rights': 'Сите права задржани.'
		},

		en: {
			'meta.title': 'WalletLess — All your loyalty cards in one place',
			'meta.desc': 'WalletLess is a virtual wallet for your loyalty cards. Available offline and sorted by your location. Free for iPhone.',

			'skip': 'Skip to content',
			'a11y.menu': 'Menu',
			'a11y.lang': 'Choose language',
			'a11y.links': 'More links',

			'nav.overview': 'Overview',
			'nav.why': 'Why',
			'nav.story': 'Story',
			'nav.contact': 'Contact',
			'nav.whyLong': 'Why WalletLess?',
			'nav.storyLong': 'How it started',

			'hero.badge': 'Available on the App Store',
			'hero.appstore': 'Download on the App Store',
			'hero.more': 'Learn more',
			'hero.title1': 'All your cards.',
			'hero.title2': 'In one wallet.',
			'hero.lede': 'WalletLess keeps every loyalty card you own inside your phone. They work offline, and the one you need is always on top — sorted by where you are.',
			'hero.meta1': 'Free',
			'hero.meta2': 'No ads',
			'hero.meta3': 'Works offline',

			'ui.title': 'My cards',
			'ui.near': 'Nearby · Skopje',
			'ui.badge': 'Nearest',
			'chip.sorted': 'Sorted by location',
			'chip.offline': 'Available offline',

			'stat.langs': 'languages in the app',
			'stat.cards': 'cards, no limit',
			'stat.offline': 'offline functionality',
			'stat.priceValue': 'Free',
			'stat.price': 'now and forever',

			'why.eyebrow': 'Why WalletLess?',
			'why.title1': 'Lighter pockets.',
			'why.title2': 'Less to think about.',

			't1.h': 'The card you need — always on top',
			't1.p': 'WalletLess sorts your cards by your device’s location. Walk into a store, open the app, and the right card is already waiting for you.',
			't2.h': 'Less to carry',
			't2.p': 'Add all your loyalty cards once and leave the wallet at home.',
			't3.h': 'Works without internet',
			't3.p': 'Every card is stored on your device. A weak signal inside the store is no longer a problem.',
			't4.p': 'Available in three languages — Macedonian, English and Albanian.',

			'story.eyebrow': 'How it started',
			'story.title': 'Wallets kept getting thicker.',
			'story.p1': 'Every supermarket, grocery store, cinema and pharmacy has its own loyalty card. With them come points, discounts and memberships — rewards we all want.',
			'story.p2': 'But carrying a dozen pieces of plastic in your pocket is anything but pleasant.',
			'story.quote': 'Let’s admit it! It’s frustrating.',

			'cta.title': 'Leave the wallet at home.',
			'cta.lede': 'Download the app for free and add your first card in under a minute.',
			'cta.ios': 'Download for iPhone',
			'cta.mail': 'A question or an idea?',

			'footer.email': 'Email',
			'footer.rights': 'All rights reserved.'
		},

		sq: {
			'meta.title': 'WalletLess — Të gjitha kartelat tuaja të besnikërisë në një vend',
			'meta.desc': 'WalletLess është një portofol virtual për kartelat tuaja të besnikërisë. Të disponueshme offline dhe të renditura sipas vendndodhjes suaj. Falas për iPhone.',

			'skip': 'Kalo te përmbajtja',
			'a11y.menu': 'Menu',
			'a11y.lang': 'Zgjidh gjuhën',
			'a11y.links': 'Lidhje të tjera',

			'nav.overview': 'Përmbledhje',
			'nav.why': 'Pse',
			'nav.story': 'Historia',
			'nav.contact': 'Kontakt',
			'nav.whyLong': 'Pse WalletLess?',
			'nav.storyLong': 'Si filloi',

			'hero.badge': 'I disponueshëm në App Store',
			'hero.appstore': 'Shkarko në App Store',
			'hero.more': 'Mëso më shumë',
			'hero.title1': 'Të gjitha kartelat tuaja.',
			'hero.title2': 'Në një portofol.',
			'hero.lede': 'WalletLess i mban të gjitha kartelat tuaja të besnikërisë në telefon. Funksionojnë edhe offline, dhe ajo që ju nevojitet është gjithmonë në krye — të renditura sipas vendndodhjes suaj.',
			'hero.meta1': 'Falas',
			'hero.meta2': 'Pa reklama',
			'hero.meta3': 'Funksionon offline',

			'ui.title': 'Kartelat e mia',
			'ui.near': 'Afër · Shkup',
			'ui.badge': 'Më afër',
			'chip.sorted': 'Renditur sipas vendndodhjes',
			'chip.offline': 'E disponueshme offline',

			'stat.langs': 'gjuhë në aplikacion',
			'stat.cards': 'kartela pa kufi',
			'stat.offline': 'funksionalitet offline',
			'stat.priceValue': 'Falas',
			'stat.price': 'tani dhe përgjithmonë',

			'why.eyebrow': 'Pse WalletLess?',
			'why.title1': 'Xhepa më të lehtë.',
			'why.title2': 'Më pak për të menduar.',

			't1.h': 'Kartela që ju nevojitet — gjithmonë në krye',
			't1.p': 'WalletLess i rendit kartelat sipas vendndodhjes së pajisjes suaj. Hyni në një dyqan, hapni aplikacionin dhe kartela e duhur ju pret tashmë.',
			't2.h': 'Më pak për të mbajtur',
			't2.p': 'Shtoni të gjitha kartelat e besnikërisë një herë dhe lëreni portofolin në shtëpi.',
			't3.h': 'Funksionon edhe pa internet',
			't3.p': 'Të gjitha kartelat ruhen në pajisjen tuaj. Sinjali i dobët brenda dyqanit nuk është më problem.',
			't4.p': 'I disponueshëm në tre gjuhë — maqedonisht, anglisht dhe shqip.',

			'story.eyebrow': 'Si filloi?',
			'story.title': 'Portofolat po trasheshin gjithnjë e më shumë.',
			'story.p1': 'Çdo supermarket, dyqan ushqimor, kinema dhe farmaci ka kartelën e vet të besnikërisë. Me to vijnë pikët, zbritjet dhe anëtarësimet — shpërblime që i duam të gjithë.',
			'story.p2': 'Por mbajtja e një duzine copash plastike në xhep është gjithçka tjetër, veç e këndshme.',
			'story.quote': 'Ta pranojmë! Është frustruese.',

			'cta.title': 'Lëreni portofolin në shtëpi.',
			'cta.lede': 'Shkarkoni aplikacionin falas dhe shtoni kartelën tuaj të parë në më pak se një minutë.',
			'cta.ios': 'Shkarko për iPhone',
			'cta.mail': 'Një pyetje apo ide?',

			'footer.email': 'Email',
			'footer.rights': 'Të gjitha të drejtat e rezervuara.'
		}
	};

	var ORDER = ['mk', 'en', 'sq'];

	function detect() {
		var q = new URLSearchParams(window.location.search).get('lang');
		if (q && DICT[q.toLowerCase()]) return q.toLowerCase();

		var saved;
		try { saved = localStorage.getItem(STORE_KEY); } catch (e) { /* private mode */ }
		if (saved && DICT[saved]) return saved;

		var prefs = navigator.languages || [navigator.language || ''];
		for (var i = 0; i < prefs.length; i++) {
			var tag = String(prefs[i]).toLowerCase();
			if (tag.indexOf('mk') === 0) return 'mk';
			if (tag.indexOf('sq') === 0) return 'sq';
			if (tag.indexOf('en') === 0) return 'en';
		}
		return DEFAULT;
	}

	function apply(lang) {
		var t = DICT[lang] || DICT[DEFAULT];

		document.documentElement.lang = lang;
		document.title = t['meta.title'];

		var desc = document.querySelector('meta[name="description"]');
		if (desc) desc.setAttribute('content', t['meta.desc']);

		Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
			var v = t[el.getAttribute('data-i18n')];
			if (typeof v === 'string') el.textContent = v;
		});

		// data-i18n-attr="aria-label:a11y.menu" (comma-separated pairs)
		Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-attr]'), function (el) {
			el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
				var bits = pair.split(':');
				var v = t[(bits[1] || '').trim()];
				if (typeof v === 'string') el.setAttribute(bits[0].trim(), v);
			});
		});

		// switcher state
		var sw = document.getElementById('langsw');
		if (sw) {
			sw.style.setProperty('--i', String(Math.max(ORDER.indexOf(lang), 0)));
			Array.prototype.forEach.call(sw.querySelectorAll('[data-lang]'), function (b) {
				var on = b.getAttribute('data-lang') === lang;
				b.setAttribute('aria-pressed', String(on));
				b.classList.toggle('is-on', on);
			});
		}

		document.dispatchEvent(new CustomEvent('wl:langchange', { detail: { lang: lang } }));
	}

	function set(lang) {
		if (!DICT[lang]) return;
		try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* ignore */ }
		apply(lang);
	}

	function init() {
		var sw = document.getElementById('langsw');
		if (sw) {
			sw.addEventListener('click', function (e) {
				var btn = e.target.closest('[data-lang]');
				if (btn) set(btn.getAttribute('data-lang'));
			});
		}
		apply(detect());
	}

	window.WLi18n = { set: set, apply: apply, langs: ORDER };

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
