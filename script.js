const data = [
/* ===================== MONTAG ===================== */
{
  day: "Montag",
  nutrition: {
    breakfast: {
      title: "3 Rühreier + 1 Scheibe Vollkornbrot",
      ingredients: ["3 Eier", "1 Scheibe Vollkornbrot"],
      prep: "Eier in beschichteter Pfanne ohne viel Fett langsam stocken lassen. Brot toasten."
    },
    lunch: {
      title: "Arbeitsmahlzeit",
      ingredients: ["Proteinreiche Mahlzeit (30–50 g Protein)"],
      prep: "Bewusst proteinreich wählen."
    },
    snack: {
      title: "Proteinriegel",
      ingredients: ["1 Proteinriegel"],
      prep: "Fertigprodukt – keine Zubereitung."
    },
    dinner: {
      title: "Skyr + Apfel",
      ingredients: ["250 g Skyr", "1 Apfel"],
      prep: "Apfel schneiden und mit Skyr mischen."
    }
  },
  training: [] // Resttag
},

/* ===================== DIENSTAG ===================== */
{
  day: "Dienstag",
  nutrition: {
    breakfast: {
      title: "Skyr + Haferflocken + Banane",
      ingredients: ["300 g Skyr", "80 g Haferflocken", "1 Banane"],
      prep: "Alles in einer Schüssel gut vermengen."
    },
    lunch: {
      title: "Thunfisch-Zwiebel-Pasta",
      ingredients: ["Vollkornnudeln", "2 Dosen Thunfisch", "Zwiebeln", "Magerquark", "Milch"],
      prep: "Nudeln kochen. Zwiebeln anbraten, Thunfisch dazugeben, Quark & Milch einrühren."
    }
  },
  training: [
    {
      name: "Isometrische Hüft-Außenrotation",
      muscle: "Tiefe Hüftrotatoren, Gluteus medius",
      gear: "Wand oder Miniband",
      execution: "Seitlich zur Wand stehen, Knie leicht gebeugt. Das äußere Knie aktiv gegen die Wand drücken. Becken bleibt stabil."
    },
    {
      name: "Single-Leg Squat",
      muscle: "Gluteus medius, Quadrizeps",
      gear: "Körpergewicht",
      execution: "Einbeinig absenken, Becken waagrecht halten, kontrolliert hochdrücken."
    },
    {
      name: "Pogo Jumps",
      muscle: "Wade, Achillessehne",
      gear: "keins",
      execution: "Auf dem Vorfuß federn, Knie fast gestreckt, kurze Bodenkontaktzeit."
    }
  ]
},

/* ===================== MITTWOCH ===================== */
{
  day: "Mittwoch",
  nutrition: {
    breakfast: {
      title: "3 Rühreier + Vollkornbrot",
      ingredients: ["3 Eier", "1 Scheibe Vollkornbrot"],
      prep: "Rührei fettarm zubereiten."
    },
    lunch: {
      title: "Arbeitsmahlzeit",
      ingredients: ["Proteinreiche Mahlzeit"],
      prep: "Keine Zubereitung."
    },
    dinner: {
      title: "½ Portion Thunfisch-Pasta",
      ingredients: ["Reste vom Dienstag"],
      prep: "Schonend aufwärmen."
    }
  },
  training: [] // Resttag
},

/* ===================== DONNERSTAG ===================== */
{
  day: "Donnerstag",
  nutrition: {
    breakfast: {
      title: "Skyr + Haferflocken + Banane",
      ingredients: ["300 g Skyr", "80 g Haferflocken", "1 Banane"],
      prep: "Alles vermengen."
    },
    lunch: {
      title: "Chili-Hack-Reis",
      ingredients: ["Reis", "Hackfleisch", "Kidneybohnen", "Tomaten"],
      prep: "Reis kochen, Hackfleisch anbraten, Bohnen & Tomaten köcheln lassen."
    }
  },
  training: [
    {
      name: "Lateral Step-Down",
      muscle: "Gluteus medius, Quadrizeps",
      gear: "Stufe / Box",
      execution: "Ein Bein auf der Stufe, anderes senkt sich kontrolliert Richtung Boden. Becken stabil halten."
    },
    {
      name: "Skater Hops",
      muscle: "Gluteus medius, Adduktoren",
      gear: "keins",
      execution: "Seitlich explosiv abspringen, weich auf einem Bein landen."
    },
    {
      name: "Countermovement Jumps",
      muscle: "Gesamte Streckkette",
      gear: "keins",
      execution: "Schnelle Gegenbewegung, dann explosiv nach oben springen, weich landen."
    }
  ]
},

/* ===================== FREITAG ===================== */
{
  day: "Freitag",
  nutrition: {
    breakfast: {
      title: "Skyr + Haferflocken + Banane",
      ingredients: ["300 g Skyr", "80 g Haferflocken", "1 Banane"],
      prep: "Alles vermengen."
    },
    lunch: {
      title: "Chili-Hack-Reis",
      ingredients: ["Reste vom Donnerstag"],
      prep: "Schonend aufwärmen."
    }
  },
  training: [
    {
      name: "90/90 Hüftrotation",
      muscle: "Innen- & Außenrotatoren der Hüfte",
      gear: "keins",
      execution: "Aufrecht sitzen, kontrolliert von Seite zu Seite rotieren."
    },
    {
      name: "Single-Leg RDL",
      muscle: "Gluteus maximus, Hamstrings",
      gear: "Körpergewicht oder Kurzhantel",
      execution: "Einbeinig nach vorne neigen, Rücken gerade, Hüfte aktiv nach hinten schieben."
    }
  ]
},

/* ===================== WOCHENENDE ===================== */
{
  day: "Samstag",
  nutrition: {},
  training: []
},
{
  day: "Sonntag",
  nutrition: {},
  training: []
}
];

/* ===================== RENDER LOGIK ===================== */

const week = document.getElementById("week");

data.forEach(d => {
  const dayEl = document.createElement("div");
  dayEl.className = "day";

  dayEl.innerHTML = `
    <h2>${d.day}</h2>
    <div class="inner">

      <div class="section">
        <div class="toggle">🍽️ Essensplan <span class="arrow">▶</span></div>
        <div class="inner">
          ${Object.values(d.nutrition || {}).map(m => `
            <div class="toggle">${m.title} <span class="arrow">▶</span></div>
            <div class="inner">
              <strong>Zutaten:</strong>
              <ul>${m.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
              <strong>Zubereitung:</strong>
              <p>${m.prep}</p>
            </div>
          `).join("") || "<em>Kein Essensplan hinterlegt</em>"}
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

  week.appendChild(dayEl);
});

/* ===================== TOGGLES ===================== */

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
