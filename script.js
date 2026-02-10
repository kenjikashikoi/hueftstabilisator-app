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
training: [] // Resttag
},

{
day: "Dienstag",
nutrition: {
breakfast: {
title: "Skyr + Hafer + Banane",
ingredients: ["300 g Skyr", "80 g Haferflocken", "1 Banane"],
prep: "Alles in einer Schüssel vermengen."
},
lunch: {
title: "Thunfisch-Zwiebel-Pasta",
ingredients: ["Vollkornnudeln", "2 Dosen Thunfisch", "Zwiebeln", "Magerquark"],
prep: "Nudeln kochen, Zwiebeln anbraten, Thunfisch & Sauce unterheben."
}
},
training: [
{
name: "Isometrische Hüft-Außenrotation",
muscle: "Tiefe Hüftrotatoren, Gluteus medius",
gear: "Wand oder Miniband",
execution: "Seitlich zur Wand stehen, Knie leicht gebeugt. Das äußere Knie aktiv gegen die Wand drücken, Becken bleibt stabil. Spannung konstant halten."
},
{
name: "Single-Leg Squat",
muscle: "Gluteus medius, Quadrizeps",
gear: "Körpergewicht",
execution: "Einbeinig stehen, Becken waagrecht halten. Langsam in die Kniebeuge absenken und kontrolliert wieder hochdrücken."
},
{
name: "Pogo Jumps",
muscle: "Wade, Achillessehne",
gear: "keins",
execution: "Auf dem Vorfuß federn, Knie fast gestreckt. Kurze Bodenkontaktzeit, aufrecht bleiben."
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
training: [] // Resttag
},

{
day: "Donnerstag",
nutrition: {
breakfast: {
title: "Skyr + Hafer + Banane",
ingredients: ["300 g Skyr", "80 g Haferflocken", "1 Banane"],
prep: "Alles vermengen."
},
lunch: {
title: "Chili-Hack-Reis",
ingredients: ["Reis", "Hackfleisch", "Kidneybohnen", "Tomaten"],
prep: "Reis kochen, Hackfleisch anbraten, Bohnen & Tomaten köcheln."
}
},
training: [
{
name: "Lateral Step-Down",
muscle: "Gluteus medius, Oberschenkel",
gear: "Box / Treppenstufe",
execution: "Ein Bein auf erhöhter Fläche, anderes Bein senkt sich kontrolliert Richtung Boden. Becken bleibt stabil."
},
{
name: "Skater Hops",
muscle: "Gluteus medius, Adduktoren",
gear: "keins",
execution: "Seitlich explosiv abspringen, weich auf einem Bein landen, Knie stabil führen."
},
{
name: "Countermovement Jump",
muscle: "Gesamte Streckkette",
gear: "keins",
execution: "Schnelle Gegenbewegung nach unten, dann explosiv nach oben springen, weich landen."
}
]
},

{
day: "Freitag",
nutrition: {
breakfast: {
title: "Skyr + Hafer + Banane",
ingredients: ["300 g Skyr", "80 g Haferflocken", "1 Banane"],
prep: "Alles vermengen."
},
lunch: {
title: "Chili-Hack-Reis",
ingredients: ["Reis", "Hackfleisch", "Bohnen"],
prep: "Vorgekochtes Gericht aufwärmen."
}
},
training: [
{
name: "90/90 Hüftrotation",
muscle: "Innen- & Außenrotatoren Hüfte",
gear: "keins",
execution: "Sitzend in 90/90-Position, Oberkörper aufrecht, kontrolliert von Seite zu Seite rotieren."
},
{
name: "Single-Leg RDL",
muscle: "Gluteus maximus, Hamstrings",
gear: "Körpergewicht / Kurzhantel",
execution: "Einbeinig nach vorne neigen, Rücken gerade, Hüfte aktiv nach hinten schieben."
}
]
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

<div class="section">
<div class="toggle">🏋️ Trainingsplan des Tages <span class="arrow">▶</span></div>
<div class="inner">
${d.training.length ? d.training.map(t => `
<div class="toggle">${t.name} <span class="arrow">▶</span></div>
<div class="inner">
<strong>Muskelregion:</strong> ${t.muscle}<br>
<strong>Hilfsmittel/Gerät:</strong> ${t.gear}<br>
<strong>Ausführung:</strong>
<p>${t.execution}</p>
</div>
`).join("") : "<em>Resttag / kein Training</em>"}
</div>
</div>

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
