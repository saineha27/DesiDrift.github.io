/* ════════════════════════════════════════════
   DESI DRIFT — script.js
   India Travel & Food Discovery Website
   ════════════════════════════════════════════ */

'use strict';

// ─── DATA ────────────────────────────────────────────────────────────────────

const destinations = {
  agra: {
    emoji: '🕌',
    bg: 'linear-gradient(160deg, #1a1a2e, #0f3460)',
    region: 'Uttar Pradesh',
    name: 'Agra',
    desc: 'Agra is one of the most visited cities in India, home to the iconic Taj Mahal — a symbol of eternal love built by Emperor Shah Jahan. Beyond the Taj, explore the magnificent Agra Fort, the abandoned city of Fatehpur Sikri, and the colourful Kinari Bazaar. Don\'t leave without tasting the city\'s famous petha sweets.',
    highlights: ['🏛️ Taj Mahal', '🏯 Agra Fort', '🍬 Petha Sweets', '🕌 Fatehpur Sikri', '🌅 Sunrise Views']
  },
  alleppey: {
    emoji: '🌴',
    bg: 'linear-gradient(135deg, #0d7377, #14a085)',
    region: 'Kerala',
    name: 'Alleppey (Alappuzha)',
    desc: 'Known as the Venice of the East, Alleppey is famous for its tranquil backwaters, lush paddy fields, and traditional houseboats. Drift through 900 km of waterways, watch local fishermen at work, and feast on a traditional Kerala sadya on a banana leaf. The backwaters at dusk are among the most beautiful sights in India.',
    highlights: ['🚢 Houseboat Stay', '🌿 Backwater Cruise', '🍱 Kerala Sadya', '🦀 Seafood Markets', '🌅 Sunset Cruises']
  },
  jaipur: {
    emoji: '🏯',
    bg: 'linear-gradient(135deg, #c0392b, #8e1c1c)',
    region: 'Rajasthan',
    name: 'Jaipur',
    desc: 'The Pink City of Jaipur is the crown jewel of Rajasthan, a city that feels like a living museum. From the hilltop Amber Fort to the intricate Hawa Mahal, every corner tells a story. Shop for block-printed textiles, blue pottery, and gemstones in Johari Bazaar. The city\'s cuisine — dal baati churma, ghewar, and laal maas — is legendary.',
    highlights: ['🏯 Amber Fort', '🌸 Hawa Mahal', '💎 Johari Bazaar', '🥘 Dal Baati Churma', '🐘 Elephant Rides']
  },
  manali: {
    emoji: '⛰️',
    bg: 'linear-gradient(135deg, #2c3e50, #4a6741)',
    region: 'Himachal Pradesh',
    name: 'Manali',
    desc: 'Nestled in the Beas River Valley at 2,050 m, Manali is a haven for adventurers and nature lovers alike. In winter, the town transforms into a snow paradise, while summers bring trekkers heading to Rohtang Pass and Spiti Valley. The old Manali village has charming cafes, apple orchards, and the ancient Hadimba Temple. Warm up with a bowl of thukpa or siddu.',
    highlights: ['❄️ Rohtang Pass', '🍎 Apple Orchards', '🍜 Thukpa & Siddu', '🛷 Snow Activities', '🏕️ Solang Valley']
  },
  goa: {
    emoji: '🌊',
    bg: 'linear-gradient(135deg, #f39c12, #e74c3c)',
    region: 'Goa',
    name: 'Goa',
    desc: 'Goa is India\'s smallest state but packs an enormous punch — golden beaches, turquoise waters, colonial Portuguese architecture, and some of the country\'s liveliest nightlife. Beyond the famous Baga and Anjuna beaches, explore Fort Aguada, the UNESCO-listed churches of Old Goa, and the spice plantations of the hinterland. The fiery fish curry and feni cocktails are unmissable.',
    highlights: ['🏖️ Beach Hopping', '⛪ Old Goa Churches', '🍹 Feni & Cocktails', '🐟 Fish Thali', '🛵 Scooter Rides']
  },
  varanasi: {
    emoji: '🪔',
    bg: 'linear-gradient(135deg, #b7791f, #744210)',
    region: 'Uttar Pradesh',
    name: 'Varanasi',
    desc: 'One of the world\'s oldest continuously inhabited cities, Varanasi sits on the banks of the holy Ganges. Every dawn and dusk, thousands of pilgrims descend its 88 ghats for ritual baths and prayers. The evening Ganga Aarti — a fire ceremony with chanting priests and thousands of lamps — is one of the most profound experiences in India.',
    highlights: ['🪔 Ganga Aarti', '🛶 Dawn Boat Ride', '🕍 Vishwanath Temple', '🧶 Banarasi Silk', '🍵 Malaiyo & Lassi']
  },
  ladakh: {
    emoji: '🏔️',
    bg: 'linear-gradient(135deg, #1e3a5f, #2d6a9f)',
    region: 'Jammu & Kashmir',
    name: 'Ladakh',
    desc: 'At over 3,000 metres above sea level, Ladakh is India\'s most dramatic landscape — a cold desert of ancient monasteries, shimmering salt lakes, and towering Himalayan peaks. Pangong Tso lake, with its impossible blue hues, and the monasteries of Hemis and Thikse are among the most photographed spots in Asia.',
    highlights: ['💧 Pangong Tso Lake', '🏛️ Hemis Monastery', '🏍️ Khardung La Pass', '🥟 Tibetan Momos', '⭐ Stargazing Camps']
  },
  coorg: {
    emoji: '☕',
    bg: 'linear-gradient(135deg, #1a3c1a, #2d7a2d)',
    region: 'Karnataka',
    name: 'Coorg (Kodagu)',
    desc: 'Often called the Scotland of India, Coorg is a lush district of coffee and spice estates, misty hills, and roaring waterfalls. The Kodavas are a unique martial community with fascinating traditions, and their cuisine — pandi curry, kadambuttoo, and akki roti — is unlike anything elsewhere in India.',
    highlights: ['☕ Coffee Estate Tours', '🌊 Abbey Falls', '🐗 Pandi Curry', '🌿 Spice Plantations', '🦜 Bird Watching']
  }
};

const foods = {
  butterchicken: {
    emoji: '🍛',
    region: 'Punjab · North India',
    name: 'Butter Chicken (Murgh Makhani)',
    desc: 'Born in Delhi in the 1950s at Moti Mahal restaurant, Butter Chicken is arguably India\'s most globally recognised dish. A velvety tomato-cream gravy with tender tandoor-roasted chicken, mildly spiced and deeply aromatic. The best versions are found in old Delhi\'s Daryaganj lanes — eaten with a butter-brushed naan fresh from the tandoor.',
    highlights: ['🌶️ Mild Spice', '🍞 Best with Naan', '📍 Old Delhi', '🏆 North Indian Classic', '⏰ Try at Dinner']
  },
  fishcurry: {
    emoji: '🦞',
    region: 'Goa · West Coast',
    name: 'Goan Fish Curry',
    desc: 'Goa\'s fish curry rice is the soul food of the coast — a tangy, coconut milk-based curry made with kokum and fresh catch of the day, usually kingfish or pomfret. Eaten with steamed Goan red rice next to the Arabian Sea, it\'s one of the most satisfying meals you\'ll ever have.',
    highlights: ['🥥 Coconut Based', '🌶️ Hot & Tangy', '🐟 Fresh Catch Daily', '📍 Best in South Goa', '🍚 Eat with Red Rice']
  },
  dalbaati: {
    emoji: '🥘',
    region: 'Rajasthan · Northwest',
    name: 'Dal Baati Churma',
    desc: 'The royal dish of the desert, Dal Baati Churma is a three-part feast: hard wheat bread rolls (baati) baked in cow dung embers or a tandoor, dunked in five-lentil dal, and served with churma — a crumbled sweet made from baati, ghee, and jaggery.',
    highlights: ['🌾 Wheat Bread Rolls', '🫙 5-Lentil Dal', '🍯 Sweet Churma', '📍 Jaipur & Jaisalmer', '🌿 Pure Vegetarian']
  },
  thukpa: {
    emoji: '🍜',
    region: 'Ladakh · Himalayas',
    name: 'Thukpa',
    desc: 'A Tibetan noodle soup that warms you from the inside out, thukpa is the signature dish of Ladakh and the Himalayan belt. Hand-pulled noodles in a clear broth with vegetables, chicken or yak meat, flavoured with ginger, garlic, and a hint of soy.',
    highlights: ['🍲 Clear Broth Soup', '🌶️ Mild Warmth', '📍 Leh & Manali', '❄️ Perfect Winter Dish', '🥢 Tibetan Origin']
  },
  biryani: {
    emoji: '🍲',
    region: 'Telangana · South India',
    name: 'Hyderabadi Biryani',
    desc: 'A legacy of the Nizams of Hyderabad, this biryani is unlike any other in India. Long-grain basmati rice and marinated meat are layered and slow-cooked in a sealed clay pot (dum method). The rice is delicately fragrant with saffron, caramelised onions, and whole spices.',
    highlights: ['🍚 Dum Cooked', '🌿 Saffron & Rose Water', '🌶️ Very Spicy', '📍 Old Hyderabad', '🏆 India\'s Best Biryani']
  },
  sadya: {
    emoji: '🍱',
    region: 'Kerala · South India',
    name: 'Onam Sadya',
    desc: 'A sadya is not just a meal — it\'s a ceremony. Served during the Onam festival and on special occasions, it consists of 26 or more vegetarian dishes presented on a fresh banana leaf in a specific arrangement. Every dish has a purpose, and the order in which you eat them follows centuries-old tradition.',
    highlights: ['🌱 100% Vegetarian', '🍌 On Banana Leaf', '🥛 Payasam Dessert', '📍 Kerala', '🎉 Festival Special']
  },
  momos: {
    emoji: '🥟',
    region: 'Sikkim · Northeast India',
    name: 'Momos',
    desc: 'Brought to India from Tibet and Nepal, momos have become a beloved street food across the entire country. Steamed dumplings filled with minced meat, cabbage, ginger and garlic — served with a fiery tomato-chilli dipping sauce. The best momos are found in Gangtok\'s MG Marg.',
    highlights: ['🥩 Meat or Veg Fillings', '🌶️ Spicy Dipping Sauce', '📍 Gangtok & Darjeeling', '🍃 Steamed Healthy', '☁️ Mountain Comfort Food']
  },
  panipuri: {
    emoji: '🍡',
    region: 'Pan-India · Streetside',
    name: 'Pani Puri',
    desc: 'Pani Puri — also known as Gol Gappa in Delhi and Puchka in Bengal — is India\'s great unifier. Hollow crispy shells filled with spiced mashed potato and dunked in tangy tamarind or mint water. The flavours — sour, sweet, spicy, tangy — explode at once.',
    highlights: ['💥 Flavour Explosion', '🌶️ Extremely Spicy', '🏪 Every Street Corner', '🌿 Mint & Tamarind', '🍃 Vegan Friendly']
  }
};

const experiences = {
  foodwalk: {
    title: 'Food Walks',
    emoji: '🍽️',
    desc: 'Our expert food guides take you through the buzzing lanes of India\'s most legendary food streets. Walk through Chandni Chowk in Delhi to taste 400-year-old jalebis and stuffed parathas. These are not just food tours — they\'re history lessons served on a leaf.',
    includes: ['👨‍🍳 Expert Local Guide', '🍴 10+ Tastings Per Walk', '📖 Food History Stories', '🗺️ Secret Alley Routes', '🕐 3-Hour Experience']
  },
  offbeat: {
    title: 'Off-Beat Trails',
    emoji: '🏕️',
    desc: 'India\'s best experiences are often the ones that don\'t show up on the first page of Google. We take you to Ziro Valley in Arunachal Pradesh, to Spiti Valley\'s ancient monasteries in winter, to Chettinad\'s colonial mansions in Tamil Nadu.',
    includes: ['🗺️ Unexplored Routes', '🏠 Homestay Network', '🤝 Local Community Access', '📸 Photographer Guides', '🌿 Eco-Friendly Travel']
  },
  cultural: {
    title: 'Cultural Immersion',
    emoji: '🎭',
    desc: 'Don\'t just watch — participate. Learn classical Bharatanatyam dance in Chennai, attend a week-long Rajasthani folk music workshop, or volunteer at a temple kitchen in Amritsar. We partner with local artists and craftspeople to give you access to living traditions.',
    includes: ['🎨 Art & Craft Workshops', '🎵 Live Music Sessions', '🙏 Temple & Ritual Access', '🧵 Weaving & Pottery', '🎭 Performing Arts']
  },
  itinerary: {
    title: 'Custom Itineraries',
    emoji: '🗺️',
    desc: 'Every drift is unique. Tell us your travel dates, budget, group size, and what gets you excited — temples or treks, spice markets or beach sunsets — and our India experts build a day-by-day plan that fits you perfectly.',
    includes: ['📅 Day-by-Day Planning', '🏨 Stay Recommendations', '🍽️ Restaurant Shortlists', '🚗 Route Optimisation', '📞 24/7 Trip Support']
  }
};

const searchData = [
  { name: 'Agra',            type: 'Destination', emoji: '🕌',  action: () => openDestModal('agra') },
  { name: 'Alleppey',        type: 'Destination', emoji: '🌴',  action: () => openDestModal('alleppey') },
  { name: 'Jaipur',          type: 'Destination', emoji: '🏯',  action: () => openDestModal('jaipur') },
  { name: 'Manali',          type: 'Destination', emoji: '⛰️', action: () => openDestModal('manali') },
  { name: 'Goa',             type: 'Destination', emoji: '🌊',  action: () => openDestModal('goa') },
  { name: 'Varanasi',        type: 'Destination', emoji: '🪔',  action: () => openDestModal('varanasi') },
  { name: 'Ladakh',          type: 'Destination', emoji: '🏔️', action: () => openDestModal('ladakh') },
  { name: 'Coorg',           type: 'Destination', emoji: '☕',  action: () => openDestModal('coorg') },
  { name: 'Rajasthan',       type: 'Region',      emoji: '🏯',  action: () => filterAndScroll('heritage') },
  { name: 'Kerala',          type: 'Region',      emoji: '🌴',  action: () => filterAndScroll('nature') },
  { name: 'Himachal Pradesh',type: 'Region',      emoji: '⛰️', action: () => filterAndScroll('mountain') },
  { name: 'Butter Chicken',  type: 'Dish',        emoji: '🍛',  action: () => { scrollToSection('food'); setTimeout(() => openFoodModal('butterchicken'), 600); } },
  { name: 'Biryani',         type: 'Dish',        emoji: '🍲',  action: () => { scrollToSection('food'); setTimeout(() => openFoodModal('biryani'), 600); } },
  { name: 'Momos',           type: 'Dish',        emoji: '🥟',  action: () => { scrollToSection('food'); setTimeout(() => openFoodModal('momos'), 600); } },
  { name: 'Pani Puri',       type: 'Dish',        emoji: '🍡',  action: () => { scrollToSection('food'); setTimeout(() => openFoodModal('panipuri'), 600); } },
  { name: 'Fish Curry',      type: 'Dish',        emoji: '🦞',  action: () => { scrollToSection('food'); setTimeout(() => openFoodModal('fishcurry'), 600); } },
  { name: 'Thukpa',          type: 'Dish',        emoji: '🍜',  action: () => { scrollToSection('food'); setTimeout(() => openFoodModal('thukpa'), 600); } },
  { name: 'Food Walks',      type: 'Experience',  emoji: '🍽️', action: () => openExpModal('foodwalk') },
  { name: 'Off-Beat Trails', type: 'Experience',  emoji: '🏕️', action: () => openExpModal('offbeat') },
  { name: 'Plan Trip',       type: 'Action',      emoji: '🗺️', action: () => scrollToSection('plan') },
];

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

/**
 * Smooth-scroll to a section by its ID.
 * @param {string} id - the element id
 */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Expose globally so inline onclick handlers can call it
window.scrollTo = scrollToSection;  // override default (same signature needed)
// Actually we keep both names to avoid breaking native scrollTo
window.scrollToSection = scrollToSection;

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

function toggleMobileMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('open');
}

// ─── SEARCH ──────────────────────────────────────────────────────────────────

let searchTimeout;

function handleSearch(val) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => showSearchResults(val), 150);
}

function showSearchResults(val) {
  const dd = document.getElementById('searchDropdown');
  if (!val.trim()) { dd.classList.remove('open'); return; }

  const q = val.toLowerCase();
  const matches = searchData.filter(d =>
    d.name.toLowerCase().includes(q) || d.type.toLowerCase().includes(q)
  );

  if (!matches.length) {
    dd.innerHTML = `<div class="no-results">No results for "${val}" — try a city or dish name</div>`;
  } else {
    const top = matches.slice(0, 6);
    dd.innerHTML = top.map((m, i) => `
      <div class="search-result-item" onclick="selectSearchResult(${i}, '${val.replace(/'/g, "\\'")}')">
        <span class="result-emoji">${m.emoji}</span>
        <div class="result-info">
          <div class="result-name">${m.name}</div>
          <div class="result-type">${m.type}</div>
        </div>
      </div>
    `).join('');
    dd._results = top;
  }
  dd.classList.add('open');
}

function selectSearchResult(idx, val) {
  const dd = document.getElementById('searchDropdown');
  const results = dd._results || searchData.filter(d =>
    d.name.toLowerCase().includes(val.toLowerCase())
  );
  if (results[idx]) {
    results[idx].action();
    document.getElementById('heroSearch').value = results[idx].name;
    dd.classList.remove('open');
  }
}

function triggerSearch() {
  const val = document.getElementById('heroSearch').value.trim();
  if (!val) { showToast('Type a city, state, or dish to search 🔍'); return; }

  const q = val.toLowerCase();
  const match = searchData.find(d => d.name.toLowerCase().includes(q));
  if (match) {
    match.action();
    document.getElementById('searchDropdown').classList.remove('open');
    showToast(`Showing: ${match.name} ✨`);
  } else {
    showToast(`No results for "${val}" — try Jaipur, Biryani, or Goa`);
  }
}

document.addEventListener('click', e => {
  if (!e.target.closest('.search-bar')) {
    document.getElementById('searchDropdown')?.classList.remove('open');
  }
});

document.getElementById('heroSearch')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') triggerSearch();
});

// ─── DESTINATION FILTERS ─────────────────────────────────────────────────────

function filterDest(cat, btn) {
  document.querySelectorAll('#destFilters .filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('#destGrid .dest-card').forEach(card => {
    const matches = cat === 'all' || card.dataset.category === cat;
    card.classList.toggle('hidden', !matches);
  });

  showToast(cat === 'all' ? 'Showing all destinations 🗺️' : `Filtered: ${btn.textContent} ✨`);
}

function filterAndScroll(cat) {
  scrollToSection('destinations');
  setTimeout(() => {
    const btn = document.querySelector(`#destFilters .filter-tab[onclick*="${cat}"]`);
    if (btn) filterDest(cat, btn);
  }, 600);
}

// ─── FOOD FILTERS ────────────────────────────────────────────────────────────

function filterFood(cat, btn) {
  document.querySelectorAll('#foodFilters .filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('#foodGrid .food-card').forEach(card => {
    const cats = card.dataset.category || '';
    const matches = cat === 'all' || cats.includes(cat);
    card.classList.toggle('hidden', !matches);
  });

  showToast(cat === 'all' ? 'Showing all dishes 🍽️' : `Filtered: ${btn.textContent} 🌶️`);
}

function filterFoodAndScroll(cat) {
  scrollToSection('food');
  setTimeout(() => {
    const btn = document.querySelector(`#foodFilters .filter-tab[onclick*="${cat}"]`);
    if (btn) filterFood(cat, btn);
  }, 600);
}

// ─── MODALS ──────────────────────────────────────────────────────────────────

function _openModal({ bg, emoji, region, name, desc, highlights }) {
  document.getElementById('modalHero').style.background = bg;
  document.getElementById('modalHero').innerHTML = `<span style="font-size:6rem;">${emoji}</span>`;
  document.getElementById('modalRegion').textContent   = region;
  document.getElementById('modalName').textContent     = name;
  document.getElementById('modalDesc').textContent     = desc;
  document.getElementById('modalHighlights').innerHTML =
    highlights.map(h => `<span class="modal-highlight">${h}</span>`).join('');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openDestModal(key) {
  const d = destinations[key];
  if (!d) return;
  _openModal({ ...d, highlights: d.highlights });
}

function openFoodModal(key) {
  const d = foods[key];
  if (!d) return;
  _openModal({
    bg:         'linear-gradient(135deg, #1a0a00, #3d1a00)',
    emoji:      d.emoji,
    region:     d.region,
    name:       d.name,
    desc:       d.desc,
    highlights: d.highlights
  });
}

function openExpModal(key) {
  const d = experiences[key];
  if (!d) return;
  _openModal({
    bg:         'linear-gradient(135deg, #FF6B1A, #E8A020)',
    emoji:      d.emoji,
    region:     'Experience',
    name:       d.title,
    desc:       d.desc,
    highlights: d.includes
  });
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalDirect();
});

// ─── TRIP PLANNER ────────────────────────────────────────────────────────────

function submitPlan() {
  const name  = document.getElementById('planName').value.trim();
  const email = document.getElementById('planEmail').value.trim();
  const dest  = document.getElementById('planDest').value;
  const style = document.getElementById('planStyle').value;

  if (!name)                      { showToast('Please enter your name ✏️'); return; }
  if (!email || !email.includes('@')) { showToast('Please enter a valid email 📧'); return; }
  if (!dest)                      { showToast('Please choose a destination 🗺️'); return; }
  if (!style)                     { showToast('Please select a travel style 🎒'); return; }

  document.getElementById('plannerForm').style.display = 'none';
  document.getElementById('planSuccessMsg').textContent =
    `We've received your details for ${dest} and will send a custom ${style.toLowerCase()} itinerary to ${email} within 24 hours. Get ready to drift, ${name}!`;
  document.getElementById('planSuccess').style.display = 'block';
  showToast('Trip request sent! 🎉');
}

function resetPlanner() {
  document.getElementById('plannerForm').style.display = 'block';
  document.getElementById('planSuccess').style.display = 'none';
  ['planName', 'planEmail', 'planDate', 'planDays', 'planNotes'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('planDest').value  = '';
  document.getElementById('planStyle').value = '';
}

// ─── CTA SUBSCRIBE ───────────────────────────────────────────────────────────

function ctaSubscribe() {
  const email = document.getElementById('ctaEmail').value.trim();
  if (!email || !email.includes('@')) { showToast('Please enter a valid email 📧'); return; }
  document.getElementById('ctaGroup').style.display  = 'none';
  document.getElementById('ctaThanks').style.display = 'block';
  showToast('Subscribed! Welcome to Desi Drift 🎉');
}

// ─── TOAST ───────────────────────────────────────────────────────────────────

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── STATS COUNTER ───────────────────────────────────────────────────────────

function animateStats() {
  document.querySelectorAll('.num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = target >= 10000 ? 'K+' : '+';
    const displayTarget = target >= 1000 ? Math.floor(target / 1000) : target;
    let current = 0;
    const step  = Math.ceil(displayTarget / 40);

    const timer = setInterval(() => {
      current = Math.min(current + step, displayTarget);
      el.textContent = current + suffix;
      if (current >= displayTarget) clearInterval(timer);
    }, 30);
  });
}

// ─── INTERSECTION OBSERVER (scroll reveal + stats) ───────────────────────────

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.dest-card, .food-card, .exp-card').forEach(el => {
  revealObserver.observe(el);
});

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateStats(); statsObserver.disconnect(); }
  });
}, { threshold: 0.5 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);

// ─── GLOBAL HELPERS (used by inline onclick in HTML) ─────────────────────────
// Re-export everything the HTML needs on window

Object.assign(window, {
  scrollToTop,
  scrollToSection,
  toggleMobileMenu,
  handleSearch,
  triggerSearch,
  selectSearchResult,
  filterDest,
  filterAndScroll,
  filterFood,
  filterFoodAndScroll,
  openDestModal,
  openFoodModal,
  openExpModal,
  closeModal,
  closeModalDirect,
  submitPlan,
  resetPlanner,
  ctaSubscribe,
  showToast,
});
