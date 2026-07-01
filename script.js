/* ===================== REHA-DATEN: BURSITIS ILIOPECTINEA ===================== */

const weekData = [
  /* ===================== MONTAG ===================== */
  {
    day: "Montag",
    focus: "Entlastung + Grundaktivierung",
    goal: "Reizung reduzieren, Hüftbeuger beruhigen und leichte Aktivierung starten.",
    warmup: [
      "5 Minuten lockeres Gehen",
      "Keine großen Schritte",
      "Keine Dehnung in den Schmerz"
    ],
    exercises: [
      {
        name: "Rückenlage Knee Drop",
        area: "Leiste / vordere Hüfte",
        sets: "2–3 Durchgänge pro Seite",
        reps: "30–60 Sekunden halten",
        intensity: "Sehr leicht",
        execution:
          "Lege dich auf den Rücken. Ein Bein ist angewinkelt, das andere bleibt locker ausgestreckt. Lasse das angewinkelte Knie langsam nach außen fallen. Nur so weit, wie es angenehm bleibt. Kein Drücken, kein Nachfedern."
      },
      {
        name: "Isometrischer Hüftbeuger-Hold",
        area: "Iliopsoas / Hüftbeuger",
        sets: "3 Sätze pro Seite",
        reps: "10–15 Sekunden halten",
        intensity: "Leicht",
        execution:
          "Setze dich aufrecht hin oder lege dich auf den Rücken. Hebe ein Knie leicht an, als würdest du die Hüfte beugen. Halte die Position ruhig ohne Bewegung. Bauch leicht anspannen. Kein stechender Leistenschmerz."
      },
      {
        name: "Glute Bridge",
        area: "Gesäß / hintere Kette",
        sets: "3 Sätze",
        reps: "10 Wiederholungen",
        intensity: "Leicht",
        execution:
          "Lege dich auf den Rücken, stelle beide Füße auf. Drücke die Fersen leicht in den Boden und hebe das Becken kontrolliert an. Oben kurz halten, dann langsam absenken. Fokus liegt auf dem Gesäß, nicht auf dem unteren Rücken."
      },
      {
        name: "Ball- oder Kissen-Squeeze",
        area: "Adduktoren / Leiste",
        sets: "3 Sätze",
        reps: "10 Sekunden halten",
        intensity: "Sehr leicht",
        execution:
          "Lege dich auf den Rücken, Knie angewinkelt. Lege ein Kissen oder einen Ball zwischen die Knie. Drücke nur leicht zusammen, ungefähr 30–40 Prozent Kraft. Danach komplett lösen."
      }
    ],
    avoid: [
      "Kein Spagat",
      "Keine Kicks",
      "Keine Sprünge",
      "Kein aggressives Hüftbeuger-Dehnen",
      "Keine Bewegung mit stechendem Leistenschmerz"
    ],
    notes: [
      "Heute geht es nur darum, die Hüfte zu beruhigen.",
      "Maximal 2–3/10 Schmerz erlaubt.",
      "Wenn es danach stärker wird, beim nächsten Mal weniger machen."
    ]
  },

  /* ===================== DIENSTAG ===================== */
  {
    day: "Dienstag",
    focus: "Core + Hüftkontrolle",
    goal: "Bessere Kontrolle der Hüfte aufbauen, ohne den Schleimbeutel zusätzlich zu reizen.",
    warmup: [
      "5 Minuten lockeres Gehen",
      "10 langsame Beckenkippungen in Rückenlage",
      "Danach kurz prüfen: Leiste ruhig oder gereizt?"
    ],
    exercises: [
      {
        name: "Dead Bug",
        area: "Core / Hüftkontrolle",
        sets: "3 Sätze",
        reps: "6–8 Wiederholungen pro Seite",
        intensity: "Leicht",
        execution:
          "Lege dich auf den Rücken. Arme zeigen nach oben, Beine sind in 90 Grad angewinkelt. Senke langsam einen Arm und das gegenüberliegende Bein. Der Rücken bleibt ruhig am Boden. Nur so weit gehen, wie du Kontrolle hältst."
      },
      {
        name: "Glute Bridge mit kurzem Halten",
        area: "Gesäß",
        sets: "3 Sätze",
        reps: "10–12 Wiederholungen",
        intensity: "Leicht bis moderat",
        execution:
          "Führe eine normale Glute Bridge aus. Halte oben 2 Sekunden. Becken bleibt gerade. Nicht ins Hohlkreuz gehen."
      },
      {
        name: "Seitlage Clamshell ohne Band",
        area: "Seitliche Hüfte / Gluteus medius",
        sets: "2–3 Sätze pro Seite",
        reps: "10 Wiederholungen",
        intensity: "Leicht",
        execution:
          "Lege dich auf die Seite. Knie leicht beugen, Füße bleiben zusammen. Öffne das obere Knie langsam und kontrolliert, ohne das Becken nach hinten zu drehen. Danach langsam schließen."
      },
      {
        name: "Rückenlage Knee Drop",
        area: "Leiste / vordere Hüfte",
        sets: "2 Durchgänge pro Seite",
        reps: "45 Sekunden halten",
        intensity: "Sehr leicht",
        execution:
          "Wie am Montag. Kein Ziehen erzwingen. Die Bewegung soll entspannen, nicht maximal dehnen."
      }
    ],
    avoid: [
      "Keine seitlichen Kicks",
      "Keine tiefen Ausfallschritte",
      "Keine dynamischen Dehnungen",
      "Keine Sprünge"
    ],
    notes: [
      "Core-Arbeit soll die Hüfte entlasten.",
      "Wenn Dead Bug in der Leiste zieht, Bewegungsradius kleiner machen."
    ]
  },

  /* ===================== MITTWOCH ===================== */
  {
    day: "Mittwoch",
    focus: "Sanfte Mobilität + Stabilität",
    goal: "Beweglichkeit kontrolliert verbessern, ohne Endpositionen wie Spagat zu reizen.",
    warmup: [
      "5–8 Minuten ruhiges Gehen",
      "Danach kleine Hüftkreise ohne Schmerz"
    ],
    exercises: [
      {
        name: "Controlled Hip Circles im Stand",
        area: "Hüftmobilität",
        sets: "2 Sätze pro Seite",
        reps: "8 kleine Kreise je Richtung",
        intensity: "Sehr leicht",
        execution:
          "Stelle dich stabil hin. Hebe ein Knie leicht an und mache kleine, langsame Kreise. Die Bewegung bleibt klein. Kein Reißen, kein Schwung, kein Endrange-Stress."
      },
      {
        name: "Isometrischer Hüftbeuger-Hold",
        area: "Iliopsoas / Hüftbeuger",
        sets: "3 Sätze pro Seite",
        reps: "15–20 Sekunden halten",
        intensity: "Leicht bis moderat",
        execution:
          "Hebe das Knie leicht an und halte ruhig. Becken bleibt stabil. Nicht maximal anspannen. Ziel ist Kontrolle, nicht Krafttest."
      },
      {
        name: "Wall Sit kurz",
        area: "Beine / Hüftbelastung ohne große Bewegung",
        sets: "3 Sätze",
        reps: "15–25 Sekunden halten",
        intensity: "Leicht bis moderat",
        execution:
          "Lehne dich mit dem Rücken an eine Wand. Gehe nur leicht bis mittel in die Knie. Nicht tief sitzen. Die Leiste muss ruhig bleiben."
      },
      {
        name: "Ball- oder Kissen-Squeeze",
        area: "Adduktoren / Leiste",
        sets: "3 Sätze",
        reps: "10–15 Sekunden halten",
        intensity: "Leicht",
        execution:
          "Kissen oder Ball zwischen die Knie. Leicht zusammendrücken, halten, lösen. Kein maximaler Druck."
      }
    ],
    avoid: [
      "Kein Spagat-Training",
      "Keine hohen Beinhebungen",
      "Keine schnellen Richtungswechsel",
      "Keine Bewegungen, die danach nachbrennen"
    ],
    notes: [
      "Heute darf es minimal aktiver sein, aber weiterhin vorsichtig.",
      "Wenn die Hüfte am nächsten Tag schlechter ist, war es zu viel."
    ]
  },

  /* ===================== DONNERSTAG ===================== */
  {
    day: "Donnerstag",
    focus: "Regeneration + Beruhigung",
    goal: "Schutzspannung reduzieren und der Hüfte bewusst einen ruhigen Tag geben.",
    warmup: [
      "Optional 10–15 Minuten lockeres Spazieren",
      "Nicht erzwingen, wenn die Hüfte müde oder gereizt ist"
    ],
    exercises: [
      {
        name: "Rückenlage Atmung mit Beckenkontrolle",
        area: "Core / Entspannung",
        sets: "3 Durchgänge",
        reps: "60 Sekunden",
        intensity: "Sehr leicht",
        execution:
          "Lege dich auf den Rücken, Beine aufgestellt. Atme ruhig in den Bauch. Beim Ausatmen kippe das Becken minimal, ohne Kraft. Die Hüfte bleibt locker."
      },
      {
        name: "Rückenlage Knee Drop",
        area: "Leiste / vordere Hüfte",
        sets: "2 Durchgänge pro Seite",
        reps: "60 Sekunden halten",
        intensity: "Sehr leicht",
        execution:
          "Lasse das Knie locker nach außen sinken. Kein aktives Drücken. Kein Nachfedern. Es soll angenehm bleiben."
      },
      {
        name: "Glute Bridge sehr leicht",
        area: "Gesäß / Durchblutung",
        sets: "2 Sätze",
        reps: "8–10 Wiederholungen",
        intensity: "Sehr leicht",
        execution:
          "Kleine, kontrollierte Bewegung. Nicht maximal hochdrücken. Nur leichte Aktivierung."
      }
    ],
    avoid: [
      "Kein Beweglichkeitstest",
      "Kein Spagat-Versuch",
      "Keine Kicks",
      "Keine Plyos oder Sprünge"
    ],
    notes: [
      "Dieser Tag ist bewusst leichter.",
      "Regeneration ist bei chronischen Beschwerden ein aktiver Teil der Reha."
    ]
  },

  /* ===================== FREITAG ===================== */
  {
    day: "Freitag",
    focus: "Stabilität aufbauen",
    goal: "Hüft- und Beckenstabilität verbessern, damit der Hüftbeuger langfristig weniger überlastet.",
    warmup: [
      "5 Minuten lockeres Gehen",
      "10 kleine Hüftkreise pro Seite"
    ],
    exercises: [
      {
        name: "Single Leg Balance",
        area: "Hüftstabilität / Becken",
        sets: "3 Sätze pro Seite",
        reps: "20–30 Sekunden halten",
        intensity: "Leicht",
        execution:
          "Stelle dich auf ein Bein. Knie leicht weich lassen. Becken bleibt gerade. Nicht ins Hohlkreuz fallen. Bei Bedarf an der Wand festhalten."
      },
      {
        name: "Seitlage Clamshell ohne Band",
        area: "Gluteus medius / seitliche Hüfte",
        sets: "3 Sätze pro Seite",
        reps: "10–12 Wiederholungen",
        intensity: "Leicht",
        execution:
          "Seitlage, Füße zusammen. Oberes Knie langsam öffnen. Oben 1 Sekunde halten. Kein Schwung und keine Rotation im Becken."
      },
      {
        name: "Dead Bug",
        area: "Core / Hüftkontrolle",
        sets: "3 Sätze",
        reps: "8 Wiederholungen pro Seite",
        intensity: "Leicht bis moderat",
        execution:
          "Langsam und sauber ausführen. Wenn die Leiste zieht, das Bein weniger weit absenken."
      },
      {
        name: "Isometrischer Hüftbeuger-Hold",
        area: "Iliopsoas / Hüftbeuger",
        sets: "3 Sätze pro Seite",
        reps: "15–20 Sekunden halten",
        intensity: "Leicht bis moderat",
        execution:
          "Knie leicht anheben und ruhig halten. Kein Schwung. Kein maximaler Druck. Ziel ist schmerzfreie Belastbarkeit."
      }
    ],
    avoid: [
      "Keine explosiven Beinbewegungen",
      "Keine seitlichen Kicks",
      "Keine tiefen Dehnpositionen",
      "Keine Maximalbelastung"
    ],
    notes: [
      "Wenn Einbeinstand schmerzfrei ist, ist das ein gutes Zeichen.",
      "Das bedeutet aber noch nicht, dass Kicks wieder bereit sind."
    ]
  },

  /* ===================== SAMSTAG ===================== */
  {
    day: "Samstag",
    focus: "Kontrollierte Belastung",
    goal: "Leichte Beinbelastung integrieren, ohne die vordere Hüfte zu reizen.",
    warmup: [
      "5–8 Minuten Gehen",
      "Danach 2 leichte Runden Knee Drop"
    ],
    exercises: [
      {
        name: "Mini Squat",
        area: "Beine / Hüfte",
        sets: "3 Sätze",
        reps: "8–10 Wiederholungen",
        intensity: "Leicht",
        execution:
          "Schulterbreiter Stand. Gehe nur leicht in die Knie. Rücken neutral, Knie folgen den Füßen. Nicht tief beugen. Die Leiste bleibt ruhig."
      },
      {
        name: "Wall Sit kurz",
        area: "Beine / statische Belastung",
        sets: "3 Sätze",
        reps: "20–30 Sekunden halten",
        intensity: "Leicht bis moderat",
        execution:
          "Rücken an die Wand. Nur so tief gehen, dass kein Leistenschmerz entsteht. Gleichmäßig über beide Füße belasten."
      },
      {
        name: "Glute Bridge",
        area: "Gesäß",
        sets: "3 Sätze",
        reps: "12 Wiederholungen",
        intensity: "Leicht bis moderat",
        execution:
          "Becken kontrolliert anheben. Oben 1–2 Sekunden halten. Kein Hohlkreuz."
      },
      {
        name: "Ball- oder Kissen-Squeeze",
        area: "Adduktoren / Leiste",
        sets: "3 Sätze",
        reps: "15 Sekunden halten",
        intensity: "Leicht",
        execution:
          "Gleichmäßig drücken, danach komplett lösen. Kein maximaler Druck."
      }
    ],
    avoid: [
      "Keine Sprungübungen",
      "Keine Kicktechnik",
      "Kein explosives Beinheben",
      "Kein starker Muskelkater provozieren"
    ],
    notes: [
      "Heute darf es sich leicht wie Training anfühlen, aber nicht wie Sport.",
      "Die Hüfte sollte am nächsten Tag gleich gut oder besser sein."
    ]
  },

  /* ===================== SONNTAG ===================== */
  {
    day: "Sonntag",
    focus: "Check + ruhige Wiederholung",
    goal: "Woche auswerten und Informationen für den Orthopäden sammeln.",
    warmup: [
      "10 Minuten lockeres Gehen",
      "Danach kurz prüfen: Wie fühlt sich die Leiste im Alltag an?"
    ],
    exercises: [
      {
        name: "Rückenlage Knee Drop",
        area: "Leiste / vordere Hüfte",
        sets: "2 Durchgänge pro Seite",
        reps: "60 Sekunden halten",
        intensity: "Sehr leicht",
        execution:
          "Ruhig sinken lassen. Keine Dehnung erzwingen. Kein Nachfedern."
      },
      {
        name: "Dead Bug",
        area: "Core / Hüftkontrolle",
        sets: "2–3 Sätze",
        reps: "8 Wiederholungen pro Seite",
        intensity: "Leicht",
        execution:
          "Langsam und sauber. Rücken bleibt ruhig. Schmerzfrei bleiben."
      },
      {
        name: "Single Leg Balance",
        area: "Hüftstabilität",
        sets: "3 Sätze pro Seite",
        reps: "20–30 Sekunden halten",
        intensity: "Leicht",
        execution:
          "Achte darauf, ob eine Seite deutlich instabiler ist. Becken gerade halten. Nicht in den Schmerz gehen."
      },
      {
        name: "Glute Bridge",
        area: "Gesäß",
        sets: "2–3 Sätze",
        reps: "10–12 Wiederholungen",
        intensity: "Leicht",
        execution:
          "Sauber und ruhig ausführen. Kein Hohlkreuz. Fokus auf Gesäßaktivierung."
      }
    ],
    avoid: [
      "Kein Spagat-Test",
      "Keine hohen Kicks zum Prüfen",
      "Keine explosive Technik",
      "Keine Übung mit Schmerz über 3/10"
    ],
    notes: [
      "Heute sammelst du Infos für deinen Orthopäden.",
      "Merke dir: Welche Übungen gingen gut? Welche haben gereizt?",
      "Wichtig: Nicht testen, ob Spagat oder Kicks schon wieder gehen."
    ]
  }
];

/* ===================== HILFSFUNKTIONEN ===================== */

function createExerciseId(dayIndex, exerciseIndex) {
  return `bursitis_reha_${dayIndex}_${exerciseIndex}`;
}

function getProgress() {
  const saved = localStorage.getItem("bursitisRehaProgress");
  return saved ? JSON.parse(saved) : {};
}

function saveProgress(progress) {
  localStorage.setItem("bursitisRehaProgress", JSON.stringify(progress));
}

function toggleExercise(id) {
  const progress = getProgress();
  progress[id] = !progress[id];
  saveProgress(progress);
  renderWeek();
}

function resetProgress() {
  const confirmReset = confirm("Möchtest du deinen Reha-Fortschritt wirklich zurücksetzen?");
  if (!confirmReset) return;

  localStorage.removeItem("bursitisRehaProgress");
  renderWeek();
}

/* ===================== RENDER ===================== */

const container = document.getElementById("week");

function renderWeek() {
  const progress = getProgress();

  if (!container) {
    console.error("Kein Element mit der ID 'week' gefunden.");
    return;
  }

  container.innerHTML = "";

  const introDiv = document.createElement("div");
  introDiv.className = "day";

  introDiv.innerHTML = `
    <h2>Reha-Plan: Bursitis Iliopectinea</h2>
    <div class="inner">
      <div class="section">
        <div class="toggle">⚠️ Schmerzregel <span class="arrow">▶</span></div>
        <div class="inner">
          <p>
            Während der Übungen maximal <strong>2–3/10 Schmerz</strong>.
            Kein stechender Leistenschmerz. Wenn die Beschwerden am Folgetag deutlich stärker sind,
            reduziere Umfang oder pausiere die auslösende Übung.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="toggle">🎯 Ziel dieser Woche <span class="arrow">▶</span></div>
        <div class="inner">
          <ul>
            <li>Entzündung beruhigen</li>
            <li>Hüftbeuger entlasten</li>
            <li>Gesäß und Core aktivieren</li>
            <li>Beweglichkeit kontrolliert verbessern</li>
            <li>Keine Spagat- oder Kick-Belastung erzwingen</li>
          </ul>
        </div>
      </div>

      <div class="section">
        <button id="resetProgressBtn" type="button">Fortschritt zurücksetzen</button>
      </div>
    </div>
  `;

  container.appendChild(introDiv);

  weekData.forEach((d, dayIndex) => {
    const completedCount = d.exercises.filter((_, exerciseIndex) => {
      return progress[createExerciseId(dayIndex, exerciseIndex)];
    }).length;

    const dayDiv = document.createElement("div");
    dayDiv.className = "day";

    dayDiv.innerHTML = `
      <h2>${d.day} – ${d.focus}</h2>
      <div class="inner">

        <div class="section">
          <div class="toggle">📌 Tagesziel <span class="arrow">▶</span></div>
          <div class="inner">
            <p>${d.goal}</p>
            <p><strong>Fortschritt:</strong> ${completedCount}/${d.exercises.length} Übungen erledigt</p>
          </div>
        </div>

        <div class="section">
          <div class="toggle">🔥 Warm-up <span class="arrow">▶</span></div>
          <div class="inner">
            <ul>
              ${d.warmup.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="section">
          <div class="toggle">✅ Übungen des Tages <span class="arrow">▶</span></div>
          <div class="inner">
            ${
              d.exercises.length
                ? d.exercises.map((e, exerciseIndex) => {
                    const id = createExerciseId(dayIndex, exerciseIndex);
                    const checked = progress[id] ? "checked" : "";

                    return `
                      <div class="toggle">
                        <label>
                          <input type="checkbox" class="exercise-check" data-id="${id}" ${checked}>
                          ${e.name}
                        </label>
                        <span class="arrow">▶</span>
                      </div>

                      <div class="inner">
                        <strong>Bereich:</strong> ${e.area}<br>
                        <strong>Sätze:</strong> ${e.sets}<br>
                        <strong>Dauer/Wiederholungen:</strong> ${e.reps}<br>
                        <strong>Intensität:</strong> ${e.intensity}<br>
                        <strong>Ausführung:</strong>
                        <p>${e.execution}</p>
                      </div>
                    `;
                  }).join("")
                : "<em>Keine Übungen hinterlegt</em>"
            }
          </div>
        </div>

        <div class="section">
          <div class="toggle">❌ Heute vermeiden <span class="arrow">▶</span></div>
          <div class="inner">
            <ul>
              ${d.avoid.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="section">
          <div class="toggle">📝 Hinweise <span class="arrow">▶</span></div>
          <div class="inner">
            <ul>
              ${d.notes.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>

      </div>
    `;

    container.appendChild(dayDiv);
  });

  initToggles();
  initCheckboxes();
  initResetButton();
}

/* ===================== TOGGLES ===================== */

function initToggles() {
  document.querySelectorAll(".day h2").forEach(h => {
    h.onclick = () => {
      const inner = h.nextElementSibling;
      if (inner) {
        inner.style.display = inner.style.display === "block" ? "none" : "block";
      }
    };
  });

  document.querySelectorAll(".toggle").forEach(t => {
    t.onclick = event => {
      if (event.target.tagName === "INPUT" || event.target.tagName === "LABEL") {
        return;
      }

      t.classList.toggle("open");

      const inner = t.nextElementSibling;
      if (inner) {
        inner.style.display = inner.style.display === "block" ? "none" : "block";
      }
    };
  });
}

/* ===================== CHECKBOXEN ===================== */

function initCheckboxes() {
  document.querySelectorAll(".exercise-check").forEach(checkbox => {
    checkbox.onclick = event => {
      event.stopPropagation();
    };

    checkbox.onchange = () => {
      const id = checkbox.getAttribute("data-id");
      toggleExercise(id);
    };
  });
}

/* ===================== RESET ===================== */

function initResetButton() {
  const resetBtn = document.getElementById("resetProgressBtn");

  if (resetBtn) {
    resetBtn.onclick = resetProgress;
  }
}

/* ===================== START ===================== */

renderWeek();
