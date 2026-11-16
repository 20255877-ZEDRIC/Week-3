/* DriveHome - shared script for all pages */
/* ------------------------------------------------------------
   BRAND LOGOS
   Paste your logo link inside the quotes: logo: "https://.../toyota.png"
   Until then, a circle with the first letter is shown.

   CAR PICTURES
   Each car row below ends with "" - paste your main image link there.
   Example: ..., "520 mi", "https://example.com/vios.jpg"],
   Extra gallery photos (optional): use the GALLERY list further down.

   Row order: brand, model, type, price, year, mileage,
              transmission, fuel, seats, range, image link
------------------------------------------------------------ */
const BRANDS = [
  { name: "Toyota", logo: "" }, { name: "Honda", logo: "" }, { name: "Mitsubishi", logo: "" },
  { name: "Nissan", logo: "" }, { name: "Ford", logo: "" }, { name: "Hyundai", logo: "" },
  { name: "Kia", logo: "" }, { name: "Mazda", logo: "" }, { name: "BMW", logo: "" },
  { name: "Mercedes-Benz", logo: "" }
];

const RAW = [
  ["Toyota","Vios","Sedan",14900,2021,38000,"Automatic","Petrol",5,"520 mi","NISSAN LEAF.jpg"],
  ["Toyota","Corolla Cross","SUV",22500,2022,24000,"Automatic","Hybrid",5,"560 mi",""],
  ["Toyota","Fortuner","SUV",33900,2020,46000,"Automatic","Diesel",7,"600 mi",""],
  ["Toyota","Camry","Sedan",24800,2020,42000,"Automatic","Petrol",5,"480 mi",""],
  ["Toyota","Hilux","Pickup",27500,2021,36000,"Manual","Diesel",5,"550 mi",""],
  ["Honda","Civic","Sedan",17500,2019,52000,"Automatic","Petrol",5,"400 mi",""],
  ["Honda","City","Sedan",13800,2021,30000,"Automatic","Petrol",5,"450 mi",""],
  ["Honda","CR-V","SUV",26900,2021,33000,"Automatic","Petrol",5,"480 mi",""],
  ["Honda","HR-V","SUV",21500,2022,22000,"Automatic","Petrol",5,"440 mi",""],
  ["Honda","Brio","Hatchback",10900,2020,35000,"Manual","Petrol",5,"400 mi",""],
  ["Mitsubishi","Xpander","MPV",17900,2022,20000,"Automatic","Petrol",7,"480 mi",""],
  ["Mitsubishi","Montero Sport","SUV",30500,2021,38000,"Automatic","Diesel",7,"600 mi",""],
  ["Mitsubishi","Mirage","Hatchback",9800,2020,41000,"Manual","Petrol",5,"450 mi",""],
  ["Mitsubishi","Strada","Pickup",25900,2021,34000,"Automatic","Diesel",5,"560 mi",""],
  ["Mitsubishi","Outlander","SUV",28900,2022,19000,"Automatic","Petrol",7,"470 mi",""],
  ["Nissan","Leaf","Electric",15900,2020,30000,"Automatic","Electric",5,"149 mi",""],
  ["Nissan","Almera","Sedan",12500,2021,29000,"Automatic","Petrol",5,"430 mi",""],
  ["Nissan","Navara","Pickup",26800,2020,47000,"Automatic","Diesel",5,"580 mi",""],
  ["Nissan","Terra","SUV",29900,2021,36000,"Automatic","Diesel",7,"590 mi",""],
  ["Nissan","Kicks","SUV",19800,2022,21000,"Automatic","Hybrid",5,"520 mi",""],
  ["Ford","Explorer","SUV",36500,2021,33000,"Automatic","Petrol",7,"480 mi",""],
  ["Ford","Ranger","Pickup",31900,2022,28000,"Automatic","Diesel",5,"570 mi",""],
  ["Ford","Everest","SUV",38900,2022,25000,"Automatic","Diesel",7,"590 mi",""],
  ["Ford","Territory","SUV",21900,2021,31000,"Automatic","Petrol",5,"450 mi",""],
  ["Ford","Mustang","Luxury",42900,2020,22000,"Automatic","Petrol",4,"350 mi",""],
  ["Hyundai","Accent","Sedan",12900,2021,33000,"Automatic","Petrol",5,"470 mi",""],
  ["Hyundai","Tucson","SUV",25900,2022,23000,"Automatic","Petrol",5,"470 mi",""],
  ["Hyundai","Santa Fe","SUV",32900,2021,35000,"Automatic","Diesel",7,"560 mi",""],
  ["Hyundai","Ioniq 5","Electric",38900,2022,17000,"Automatic","Electric",5,"303 mi",""],
  ["Hyundai","Elantra","Sedan",18900,2020,40000,"Automatic","Petrol",5,"450 mi",""],
  ["Kia","Seltos","SUV",20900,2022,22000,"Automatic","Petrol",5,"460 mi",""],
  ["Kia","Sportage","SUV",26500,2021,31000,"Automatic","Diesel",5,"520 mi",""],
  ["Kia","Carnival","MPV",38500,2021,33000,"Automatic","Diesel",8,"560 mi",""],
  ["Kia","Soluto","Sedan",11500,2021,28000,"Manual","Petrol",5,"440 mi",""],
  ["Kia","EV6","Electric",41900,2022,16000,"Automatic","Electric",5,"310 mi",""],
  ["Mazda","3","Sedan",19800,2020,39000,"Manual","Petrol",5,"430 mi",""],
  ["Mazda","CX-5","SUV",27900,2021,34000,"Automatic","Petrol",5,"450 mi",""],
  ["Mazda","CX-30","SUV",24500,2022,20000,"Automatic","Petrol",5,"440 mi",""],
  ["Mazda","2","Hatchback",14900,2021,26000,"Automatic","Petrol",5,"420 mi",""],
  ["Mazda","BT-50","Pickup",27900,2021,37000,"Automatic","Diesel",5,"560 mi",""],
  ["BMW","3 Series","Luxury",38900,2021,26000,"Automatic","Petrol",5,"410 mi",""],
  ["BMW","5 Series","Luxury",46800,2021,28000,"Automatic","Petrol",5,"420 mi",""],
  ["BMW","X3","Luxury",44900,2021,30000,"Automatic","Petrol",5,"400 mi",""],
  ["BMW","X5","Luxury",58900,2022,21000,"Automatic","Petrol",5,"420 mi",""],
  ["BMW","i4","Electric",52900,2022,14000,"Automatic","Electric",5,"301 mi",""],
  ["Mercedes-Benz","C-Class","Luxury",41900,2021,27000,"Automatic","Petrol",5,"430 mi",""],
  ["Mercedes-Benz","E-Class","Luxury",52000,2022,18000,"Automatic","Petrol",5,"450 mi",""],
  ["Mercedes-Benz","GLC","Luxury",49900,2021,29000,"Automatic","Petrol",5,"410 mi",""],
  ["Mercedes-Benz","GLE","Luxury",64900,2022,19000,"Automatic","Petrol",5,"430 mi",""],
  ["Mercedes-Benz","EQB","Electric",54900,2022,12000,"Automatic","Electric",7,"260 mi",""]
];

// Extra gallery photos (optional). Use the car number (1 = first row above).
// Example: 1: ["https://example.com/vios-2.jpg", "https://example.com/vios-3.jpg"],
const GALLERY = {
};

const CARS = RAW.map((r, i) => ({
  id: i + 1, brand: r[0], name: r[0] + " " + r[1], type: r[2], price: r[3], year: r[4], mi: r[5],
  trans: r[6], fuel: r[7], seats: r[8], range: r[9], img: r[10], gallery: GALLERY[i + 1] || []
}));

const $ = (s) => document.querySelector(s);
const money = (n) => "$" + Math.round(n).toLocaleString("en-US");
const params = new URLSearchParams(location.search);
const page = location.pathname.split("/").pop() || "index.html";

let saved = new Set();
try { saved = new Set(JSON.parse(localStorage.getItem("drivehome-saved") || "[]")); } catch (e) {}
const persist = () => { try { localStorage.setItem("drivehome-saved", JSON.stringify([...saved])); } catch (e) {} };

/* ---------- Shared header and footer ---------- */
const LINKS = [["index.html", "Home"], ["cars.html", "Cars"], ["about.html", "About"], ["contact.html", "Contact"]];
$("#header").innerHTML = `<div class="wrap">
  <a class="logo" href="index.html">Drive<b>Home</b></a>
  <button class="menu" aria-label="Menu" aria-expanded="false">☰</button>
  <nav id="nav">${LINKS.map(([h, t]) => `<a href="${h}" class="${h === page ? "active" : ""}">${t}</a>`).join("")}<a href="cars.html#saved" id="sl">Saved (0)</a></nav></div>`;
$("#footer").innerHTML = `<div class="wrap"><div class="fgrid">
  <div><a class="logo" href="index.html">Drive<b>Home</b></a><p>Trusted used cars, clear pricing and a no-pressure buying experience.</p></div>
  <div><h4>Explore</h4>${LINKS.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}</div>
  <div><h4>Visit us</h4><p>Parker Rd, New Mexico<br>Mon–Sat, 9am–6pm<br>hello@drivehome.example</p></div></div>
  <div class="copy">© 2026 DriveHome. All rights reserved.</div></div>`;
$(".menu").onclick = (e) => {
  const open = $("#nav").classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
};
const updateSaved = () => { $("#sl").textContent = `Saved (${saved.size})`; };
updateSaved();

/* ---------- Brand logos ---------- */
if ($("#brands")) {
  const active = params.get("brand");
  $("#brands").innerHTML = BRANDS.map((b) => `<a class="brand ${b.name === active ? "on" : ""}" href="cars.html?brand=${encodeURIComponent(b.name)}">
    <div class="blogo">${b.logo ? `<img src="${b.logo}" alt="${b.name}" onerror="this.replaceWith(document.createTextNode('${b.name[0]}'))">` : b.name[0]}</div>${b.name}</a>`).join("");
}

/* ---------- Shared car card ---------- */
const heart = '<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.6-9.3-9A5.3 5.3 0 0 1 12 6.5 5.3 5.3 0 0 1 21.3 12C19 16.4 12 21 12 21z"/></svg>';
const photo = (c) => `<div class="ph">${c.img ? `<img src="${c.img}" alt="${c.name}" onerror="this.remove()">` : "Car photo"}<span class="lbl">${c.name}</span></div>`;
const card = (c) => `<article class="card" data-id="${c.id}">
  <button class="fav ${saved.has(c.id) ? "on" : ""}" data-f="${c.id}" aria-label="Save ${c.name}">${heart}</button>
  ${photo(c)}<div class="info"><h3><a href="car.html?id=${c.id}" style="color:inherit;text-decoration:none">${c.name}</a></h3>
  <div class="meta">${c.year} · ${c.mi.toLocaleString("en-US")} mi · ${c.fuel}</div><div class="price">${money(c.price)}</div></div></article>`;

document.addEventListener("click", (e) => {
  const f = e.target.closest("[data-f]");
  if (f) {
    const id = +f.dataset.f;
    saved.has(id) ? saved.delete(id) : saved.add(id);
    persist(); updateSaved();
    if (typeof render === "function") render();
    document.querySelectorAll(`[data-f="${id}"]`).forEach((b) => b.classList.toggle("on", saved.has(id)));
    return;
  }
  if (e.target.closest("a")) return;
  const k = e.target.closest(".card");
  if (k) openQuick(CARS.find((x) => x.id === +k.dataset.id));
});

/* ---------- Specification popup ---------- */
document.body.insertAdjacentHTML("beforeend", '<dialog id="qv"></dialog>');
const qv = $("#qv");
qv.onclick = (e) => { if (e.target === qv) qv.close(); };
function openQuick(c) {
  qv.innerHTML = `<div class="d" style="position:relative">
    <button class="x" onclick="document.getElementById('qv').close()" aria-label="Close">✕</button>
    ${photo(c)}
    <div class="in"><h3 style="margin:0;font-size:1.4rem">${c.name} ${c.year}</h3><div class="price">${money(c.price)}</div>
    <h4 style="margin:14px 0 0">Specifications</h4>
    <div class="specs"><div><small>Year</small>${c.year}</div><div><small>Mileage</small>${c.mi.toLocaleString("en-US")} mi</div><div><small>Body type</small>${c.type}</div>
    <div><small>Transmission</small>${c.trans}</div><div><small>Fuel</small>${c.fuel}</div><div><small>Seats</small>${c.seats}</div><div><small>Range</small>${c.range}</div></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn" href="car.html?id=${c.id}">View full details</a>
    <a class="btn ghost" href="contact.html?car=${encodeURIComponent(c.name)}">Book a test drive</a></div></div></div>`;
  qv.showModal();
}

/* ---------- Home page ---------- */
if ($("#featured")) $("#featured").innerHTML = ["Mitsubishi Xpander", "Toyota Fortuner", "BMW 5 Series", "Hyundai Ioniq 5"].map((n) => card(CARS.find((c) => c.name === n))).join("");

/* ---------- Cars page ---------- */
let render;
if ($("#cars")) {
  let budget = params.get("budget") || "all", type = params.get("type") || "all", brand = params.get("brand") || "all";
  let query = (params.get("q") || "").toLowerCase(), sort = "popular";
  const inBudget = (p) => budget === "all" || (budget === "low" && p < 20000) || (budget === "mid" && p >= 20000 && p <= 40000) || (budget === "high" && p > 40000);

  render = () => {
    const list = CARS.filter((c) => inBudget(c.price) && (type === "all" || c.type === type) && (brand === "all" || c.brand === brand) && (c.name + c.type).toLowerCase().includes(query));
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "miles") list.sort((a, b) => a.mi - b.mi);
    $("#cars").innerHTML = list.length ? list.map(card).join("") : '<p class="empty">No cars match your filters.</p>';
    $("#count").textContent = `${list.length} car${list.length === 1 ? "" : "s"} found`;
    const s = CARS.filter((c) => saved.has(c.id));
    $("#sg").innerHTML = s.length ? s.map(card).join("") : '<p class="empty">Click the heart on a car to save it.</p>';
  };
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.toggle("on", t.dataset.b === budget);
    t.onclick = () => { budget = t.dataset.b; document.querySelectorAll(".tab").forEach((x) => x.classList.toggle("on", x === t)); render(); };
  });
  $("#brand").innerHTML = '<option value="all">All brands</option>' + BRANDS.map((b) => `<option>${b.name}</option>`).join("");
  $("#brand").value = brand;
  $("#brand").onchange = (e) => { brand = e.target.value; render(); };
  $("#type").value = type;
  $("#q").value = params.get("q") || "";
  $("#q").oninput = (e) => { query = e.target.value.trim().toLowerCase(); render(); };
  $("#type").onchange = (e) => { type = e.target.value; render(); };
  $("#sort").onchange = (e) => { sort = e.target.value; render(); };
  render();
}

/* ---------- Car detail page ---------- */
if ($("#detail")) {
  const c = CARS.find((x) => x.id === +params.get("id"));
  if (!c) {
    $("#detail").innerHTML = '<p class="empty">Car not found. <a href="cars.html">Back to all cars</a></p>';
  } else {
    document.title = `${c.name} ${c.year} | DriveHome`;
    $("#dtitle").textContent = `${c.name} ${c.year}`;
    $("#dprice").textContent = money(c.price);
    $("#crumb").innerHTML = `<a href="index.html">Home</a> / <a href="cars.html">Cars</a> / <a href="cars.html?brand=${encodeURIComponent(c.brand)}">${c.brand}</a> / <b style="color:var(--accent)">${c.name}</b>`;
    const rows = [["Brand", c.brand], ["Year", c.year], ["Mileage", c.mi.toLocaleString("en-US") + " mi"], ["Body type", c.type], ["Transmission", c.trans], ["Fuel", c.fuel], ["Seats", c.seats], ["Range", c.range]];
    const q = encodeURIComponent(c.name);
    $("#detail").innerHTML = `<div>
      <section class="box" id="gallery"><div class="bh" style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center"><div><h2>Image Gallery</h2><p class="sub">View ${c.name} ${c.year} interior, exterior &amp; road test images</p></div></div><div class="gal" id="gal">${c.name}</div></section>
      <section class="box" id="specs"><div class="bh"><h2>Key specs</h2></div><div class="bb"><table class="spec-table">${rows.map((r) => `<tr><td>${r[0]}</td><td><b>${r[1]}</b></td></tr>`).join("")}</table></div></section>
      <section class="box calc" id="payment"><h2>Monthly payment estimate</h2><p class="sub">Adjust the numbers to see what this car could cost per month.</p>
        <label>Down payment ($)<input id="dp" type="number" min="0" value="${Math.round(c.price * 0.1)}"></label>
        <label>Loan term<select id="tm"><option value="36">36 months</option><option value="48">48 months</option><option value="60" selected>60 months</option><option value="72">72 months</option></select></label>
        <label>APR (%)<input id="apr" type="number" step="0.1" min="0" value="6.5"></label>
        <p style="margin:14px 0 0">Estimated payment</p><div class="monthly" id="mo"></div></section></div>
      <aside class="side"><div class="box"><div class="bb" style="padding-top:22px"><h3>Get the Best Deal</h3><p class="sub">Get a quotation for this ${c.name} from our sales team.</p>
        <a class="btn" href="contact.html?car=${q}">Get Quotes</a><a class="btn dark" href="contact.html?car=${q}">Inquire</a><a class="btn out" href="contact.html?car=${q}">Request A Test Drive</a><button class="btn out" id="sv"></button></div></div>
        <div class="blue"><h3>Need financing for this car?</h3><p>Plan your budget before you visit our showroom.</p><ul><li>Instant monthly payment estimate</li><li>No-pressure advice from our team</li></ul><a href="#payment">Estimate my payment →</a></div></aside>`;

    // Gallery: uses name.jpg, then name-2.jpg, name-3.jpg, name-4.jpg when they exist
        const urls = [c.img, ...(c.gallery || [])].filter(Boolean);
    let ok = [], idx = 0;
    const gal = $("#gal");
    const show = () => {
      if (!ok.length) { gal.textContent = `${c.name} (add an image link in script.js)`; return; }
      gal.innerHTML = `<img src="${ok[idx]}" alt="${c.name}"><span class="lbl">${c.name}</span>${ok.length > 1 ? '<button class="arrow l" aria-label="Previous photo">←</button><button class="arrow r" aria-label="Next photo">→</button>' : ""}<button class="pill">View All ${ok.length} Photo${ok.length > 1 ? "s" : ""}</button>`;
      if (ok.length > 1) {
        gal.querySelector(".l").onclick = () => { idx = (idx - 1 + ok.length) % ok.length; show(); };
        gal.querySelector(".r").onclick = () => { idx = (idx + 1) % ok.length; show(); };
      }
      gal.querySelector(".pill").onclick = () => {
        const lb = $("#lb");
        lb.innerHTML = `<button class="x" onclick="document.getElementById('lb').close()" aria-label="Close">✕</button>${ok.map((u) => `<img src="${u}" alt="${c.name}">`).join("")}`;
        lb.showModal();
      };
    };
    Promise.all(urls.map((u) => new Promise((r) => { const i = new Image(); i.onload = () => r(u); i.onerror = () => r(null); i.src = u; })))
      .then((a) => { ok = a.filter(Boolean); show(); });

    const calc = () => {
      const P = Math.max(c.price - (+$("#dp").value || 0), 0), n = +$("#tm").value, r = (+$("#apr").value || 0) / 1200;
      $("#mo").textContent = money(r ? (P * r) / (1 - Math.pow(1 + r, -n)) : P / n) + " / mo";
    };
    ["#dp", "#tm", "#apr"].forEach((s) => ($(s).oninput = calc));
    calc();
    const label = () => ($("#sv").textContent = saved.has(c.id) ? "Saved ✓ (click to remove)" : "♡ Save this car");
    $("#sv").onclick = () => { saved.has(c.id) ? saved.delete(c.id) : saved.add(c.id); persist(); updateSaved(); label(); };
    label();
    $("#similar").innerHTML = CARS.filter((x) => x.type === c.type && x.id !== c.id).concat(CARS.filter((x) => x.type !== c.type)).slice(0, 4).map(card).join("");
    document.querySelectorAll("#dtabs a").forEach((a) => (a.onclick = () => {
      document.querySelectorAll("#dtabs a").forEach((x) => x.classList.toggle("on", x === a));
    }));
  }
}

/* ---------- Contact page ---------- */
if ($("#form")) {
  if (params.get("car")) $("#interest").value = params.get("car");
  $("#form").onsubmit = (e) => {
    e.preventDefault();
    $("#msg").textContent = "Thanks! Your message has been received and we’ll reply within one business day.";
    e.target.reset();
  };
}
