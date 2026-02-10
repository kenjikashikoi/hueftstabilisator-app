const data = [
{
day: "Montag",
nutrition: {
breakfast: {
title: "3 Rühreier + Vollkornbrot",
ingredients: ["3 Eier", "1 Scheibe Vollkornbrot"],
prep: "Eier in beschichteter Pfanne langsam stocken lassen. Brot toasten."
},
lunch: {
title: "Arbeitsmahlzeit",
ingredients: ["Proteinreiche Kantinenmahlzeit"],
prep: "Keine Zubereitung – bewusst wählen."
},
dinner: {
title: "Skyr + Apfel",
ingredients: ["250 g Skyr", "1 Apfel"],
prep: "Apfel schneiden, mit Skyr mischen."
}
},
training: []
},

{
day: "Dienstag",
nutrition: {
breakfast: {
title: "Skyr + Hafer + Banane",
ingredients: ["300 g Skyr", "80 g Haferflocken", "1 Banane"],
prep: "Alles in Schüssel mischen."
},
lunch: {
title: "Thunfisch-Zwiebel-Pasta",
ingredients: ["Vollkornnudeln", "2 Dosen Thunfisch", "Zwiebeln", "Quark"],
prep: "Nudeln kochen, Zwiebeln anbraten, Thunfisch & Sauce unterheben."
}
},
training: [
{
name: "Isometrische Außenrotation",
muscle: "Tiefe Hüftrotatoren",
gear: "Wand / Band",
execution: "Seitlich stehen, Knie leicht gebeugt, Druck gegen Wand halten."
},
{
name: "Single-Leg Squat",
muscle: "Gluteus medius",
gear: "Körpergewicht",
execution: "Einbeinig kontrolliert absenken, Becken stabil halten."
}
]
},

{
day: "Mittwoch",
nutrition: {
breakfast: {
title: "3 Rühreier + Vollkornbrot",
ingredients: ["3 Eier", "1 Scheibe Brot"],
prep: "Rührei fettarm zubereiten."
},
lunch: {
title: "Arbeitsmahlzeit",
ingredients: ["Proteinreich"],
prep: "Keine Zubereitung."
},
dinner: {
title: "½ Portion Pasta",
ingredients: ["Reste vom Dienstag"],
prep: "Schonend aufwärmen."
}
},
training: []
}
];

const week = document.getElementById("week");

data.forEach(d => {
const el = document.createElement("div");
el.className = "day";

el.innerHTML = `
<h2>${d.day} <span>▼</span></h2>
<div class="inner">

<div class="section">
<div class="toggle">🍽️ Essensplan <span class="arrow">▶</span></div>
<div class="inner">
${Object.values(d.nutrition).map(m => `
<div class="toggle">${m.title} <span class="arrow">▶</span></div>
<div class="inner">
<strong>Zutaten:</strong>
<ul>${m.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
<strong>Zubereitung:</strong>
<p>${m.prep}</p>
</div>
`).join("")}
</div>
</div>

${d.training.length ? `
<div class="section">
<div class="toggle">🏋️ Training <span class="arrow">▶</span></div>
<div class="inner">
${d.training.map(t => `
<div class="toggle">${t.name} <span class="arrow">▶</span></div>
<div class="inner">
<strong>Muskelregion:</strong> ${t.muscle}<br>
<strong>Hilfsmittel:</strong> ${t.gear}<br>
<strong>Ausführung:</strong> ${t.execution}
</div>
`).join("")}
</div>
</div>` : ""}

</div>
`;

week.appendChild(el);
});

document.querySelectorAll(".day h2").forEach(h => {
h.onclick = () => {
const inner = h.nextElementSibling;
inner.style.display = inner.style.display === "block" ? "none" : "block";
};
});

document.querySelectorAll(".toggle").forEach(t => {
t.onclick = () => {
t.classList.toggle("open");
const inner = t.nextElementSibling;
inner.style.display = inner.style.display === "block" ? "none" : "block";
};
});
