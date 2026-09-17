# 🇮🇳 Desi Drift — Wander India

A beautiful, fully responsive India travel & food discovery website built with vanilla HTML, CSS, and JavaScript.

---

## 📁 Project Structure

```
desidrift/
├── index.html          ← Main HTML page
├── assets/
│   ├── styles.css      ← All CSS styles & responsive rules
│   └── script.js       ← All JavaScript (data + interactions)
└── README.md           ← This file
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🗺️ Destinations | 8 curated Indian destinations with filter tabs (Heritage, Nature, Beaches, Mountains, Spiritual) |
| 🍛 Food Section | 8 iconic Indian dishes with filter tabs (North, South, Street Food, Vegetarian) |
| 🎭 Experiences | Food Walks, Off-Beat Trails, Cultural Immersion, Custom Itineraries |
| 📋 Trip Planner | Full form with destination, style, date, and success state |
| 🔍 Live Search | Search bar with live dropdown for destinations, dishes, and regions |
| 📊 Stats Counter | Animated counter triggered on scroll |
| 💬 Modals | Click any card to open a detailed info modal |
| 🍞 Toast Notifications | Feedback toasts for all user actions |
| 📱 Fully Responsive | Mobile menu, stacked layouts on smaller screens |
| ✉️ Newsletter CTA | Email subscribe with success state |
| ♿ Accessible | ARIA roles, labels, keyboard navigation (Escape to close modal) |

---

## 🚀 Getting Started

### Option 1 — Open directly in browser
Just double-click `index.html` — no server needed since it uses no backend or build tools.

### Option 2 — Serve locally (recommended)

Using Python:
```bash
cd desidrift
python3 -m http.server 3000
# Open http://localhost:3000
```

Using Node.js (npx):
```bash
cd desidrift
npx serve .
```

Using VS Code:
Install the **Live Server** extension → right-click `index.html` → "Open with Live Server"

---

## 🌐 Deployment

### Netlify (drag & drop)
1. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
2. Drag the entire `desidrift/` folder into the upload box
3. Done! Your site is live in seconds.

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Source → main branch / root**
3. Your site will be live at `https://yourusername.github.io/repo-name`

### Vercel
```bash
npm i -g vercel
cd desidrift
vercel
```

---

## 🎨 Customisation

### Colours
All colours are defined as CSS variables at the top of `assets/styles.css`:

```css
:root {
  --saffron:  #FF6B1A;   /* primary orange */
  --gold:     #F5C342;   /* gold accents */
  --turmeric: #E8A020;   /* warm amber */
  --deep:     #1A0A00;   /* near-black background */
  --cream:    #FFF8EE;   /* warm white */
  --rose:     #C0392B;   /* deep red */
}
```

### Adding a New Destination
In `assets/script.js`, add an entry to the `destinations` object:

```js
newplace: {
  emoji: '🏛️',
  bg: 'linear-gradient(135deg, #color1, #color2)',
  region: 'State Name',
  name: 'City Name',
  desc: 'Description text...',
  highlights: ['🏛️ Highlight 1', '🌿 Highlight 2', '🍛 Highlight 3']
}
```

Then add a card in `index.html` inside `#destGrid`:

```html
<div class="dest-card" data-category="heritage" onclick="openDestModal('newplace')">
  ...
</div>
```

### Adding a New Dish
Same pattern — add to the `foods` object in `script.js` and a `.food-card` in `#foodGrid`.

---

## 🛠️ Technologies Used

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox, Keyframe animations
- **Vanilla JavaScript** — No frameworks or dependencies
- **Google Fonts** — Playfair Display + Raleway
- **Intersection Observer API** — Scroll-triggered reveal animations

---

## 📄 License

Free to use and modify for personal and commercial projects.  
Built with 🧡 for wanderers of Bharat.
