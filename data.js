// All data below is fictional placeholder content for testing/layout only.
const POPULAR = [
  { name: "Fernwood Roast", tag: "Coffee & pantry", codes: 15, used: 6368, color: "#5b2a86" },
  { name: "Kessler Kicks", tag: "Sneakers", codes: 17, used: 7004, color: "#ff6b5e" },
  { name: "Bramble Grooming", tag: "Personal care", codes: 22, used: 9110, color: "#2f7d5b" },
  { name: "PulseGym Club", tag: "Fitness", codes: 6, used: 7877, color: "#d98a1f" },
  { name: "NovaWell", tag: "Nutrition", codes: 10, used: 8176, color: "#3d6fb5" },
  { name: "Glazed & Co.", tag: "Bakery", codes: 18, used: 7914, color: "#c0457a" },
];

const CATEGORIES = {
  "Food": [
    { title: "Rapid Eats delivery deal", off: "45% OFF", used: 3148 },
    { title: "Summit Pizza weekday offer", off: "10% OFF", used: 2241 },
    { title: "Jetstream Slice promo", off: "30% OFF", used: 4403 },
    { title: "Fridge & Fork bundle", off: "70% OFF", used: 5242 },
    { title: "Noodle Nook voucher", off: "$4 OFF", used: 3173 },
    { title: "Cellar Door drinks code", off: "15% OFF", used: 9365 },
  ],
  "Entertainment": [
    { title: "Prism Arts exhibition pass", off: "25% OFF", used: 6724 },
    { title: "TideWorld tickets", off: "25% OFF", used: 5935 },
    { title: "StreamZone campaign", off: "PROMO", used: 5228 },
    { title: "Grand Screen cinemas", off: "25% OFF", used: 4007 },
    { title: "ShowFinder booking", off: "25% OFF", used: 7209 },
    { title: "FrontRow seats", off: "$10 OFF", used: 4330 },
  ],
  "Home & Garden": [
    { title: "CloudRest bedding", off: "$140 OFF", used: 1355 },
    { title: "Homestead Supply", off: "40% OFF", used: 5879 },
    { title: "Makers Lane crafts", off: "20% OFF", used: 6665 },
    { title: "TidyBox storage", off: "$500 OFF", used: 7887 },
    { title: "Beam Hardware code", off: "$5 OFF", used: 2372 },
    { title: "Hearth & Hue decor", off: "40% OFF", used: 9436 },
  ],
  "Health & Beauty": [
    { title: "Lumen Scents offer", off: "50% OFF", used: 4541 },
    { title: "MindLift program", off: "20% OFF", used: 6524 },
    { title: "ClearView eyewear", off: "10% OFF", used: 2635 },
    { title: "Atelier Skin bundle", off: "25% OFF", used: 3940 },
    { title: "VitaShelf supplements", off: "20% OFF", used: 1681 },
    { title: "Bramble Grooming set", off: "15% OFF", used: 9205 },
  ],
  "Fashion": [
    { title: "Kessler Kicks drop", off: "10% OFF", used: 2606 },
    { title: "Ridgeline outerwear", off: "25% OFF", used: 6400 },
    { title: "Meridian basics", off: "$10 OFF", used: 8078 },
    { title: "StrideLab running", off: "15% OFF", used: 5720 },
    { title: "Harbor & Oak polos", off: "$10 OFF", used: 8396 },
    { title: "Scrubline workwear", off: "15% OFF", used: 4568 },
  ],
};

const FAQ = [
  {
    q: "How do I use a code on SaveNest?",
    a: "This is a demo, so nothing charges real money. In a live version you would tap a deal card, the code copies to your clipboard, and you paste it at the retailer's checkout. Here it just shows a confirmation."
  },
  {
    q: "Are these deals real?",
    a: "No. Every brand, discount, and usage number on this site is invented placeholder content, created so the layout can be tested without touching any real retailer's data."
  },
  {
    q: "Can I deploy this myself?",
    a: "Yes. The whole site is static HTML, CSS, and JavaScript with no build step, so you can drag the folder into Netlify or connect it from a Git repository and it will just work."
  },
];
