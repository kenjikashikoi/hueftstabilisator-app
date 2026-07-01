/* ===================== REHA-APP: BURSITIS ILIOPECTINEA ===================== */
/* 
  Startseite = Phasen/Wochen
  Klick auf Phase/Woche = Dropdown mit Übungen, Bemerkungen, Vermeiden etc.
*/

/* ===================== PHASEN / WOCHEN DATEN ===================== */

const phaseData = [
  {
    phase: "Phase 1",
    title: "Woche 1 – Beruhigung & Grundaktivierung",
    duration: "7 Tage",
    status: "Aktueller Start",
    goal:
      "Die Entzündungsreizung reduzieren, den Hüftbeuger beruhigen und die Hüfte wieder kontrolliert bewegen, ohne Spagat oder Kicks zu provozieren.",
    description:
      "Diese Woche ist bewusst vorsichtig. Es geht nicht darum, stark zu trainieren, sondern den dauerhaften Reizkreislauf zu unterbrechen.",
    rules: [
      "Maximal 2–3/10 Schmerz während der Übungen",
      "Kein stechender Leistenschmerz",
      "Keine Spagat-Tests",
      "Keine hohen oder seitlichen Kicks",
      "Wenn es am nächsten Tag deutlich schlechter ist, war es zu viel"
    ],
    avoid: [
      "Spagat",
      "Seitliche Kicks",
      "Hohe Kicks",
      "Explosive Hüftbewegungen",
      "Dynamisches Dehnen",
      "Tiefe Ausfallschritte",
      "Alles, was vorne in der Leiste sticht"
    ],
    exercises: [
      {
        name: "Rückenlage Knee Drop",
        area: "Leiste / vordere Hüfte",
        frequency: "Täglich",
        sets: "2–3 Durchgänge pro Seite",
        reps: "30–60 Sekunden",
        intensity: "Sehr leicht",
        execution:
          "Lege dich auf den Rücken. Ein Bein ist angewinkelt, das andere bleibt locker ausgestreckt. Lasse das angewinkelte Knie langsam nach außen fallen. Nur so weit, wie es angenehm bleibt. Kein Drücken, kein Nachfedern.",
        notes:
          "Diese Übung soll entspannen, nicht maximal dehnen. Wenn du vorne in der Leiste ein Stechen spürst, Bewegungsradius sofort verkleinern."
      },
      {
        name: "Isometrischer Hüftbeuger-Hold",
        area: "Iliopsoas / Hüftbeuger",
        frequency: "5–6x pro Woche",
        sets: "3 Sätze pro Seite",
        reps: "10–20 Sekunden halten",
        intensity: "Leicht bis moderat",
        execution:
          "Setze dich aufrecht hin oder lege dich auf den Rücken. Hebe ein Knie leicht an, als würdest du die Hüfte beugen. Halte die Position ruhig ohne Bewegung. Bauch leicht anspannen. Kein Schwung.",
        notes:
          "Das ist eine der wichtigsten Übungen, weil der Hüftbeuger belastet wird, ohne dass viel Reibung durch Bewegung entsteht."
      },
      {
        name: "Glute Bridge",
        area: "Gesäß / hintere Kette",
        frequency: "5–6x pro Woche",
        sets: "3 Sätze",
        reps: "10–12 Wiederholungen",
        intensity: "Leicht",
        execution:
          "Lege dich auf den Rücken, stelle beide Füße auf. Drücke die Fersen leicht in den Boden und hebe das Becken kontrolliert an. Oben kurz halten, dann langsam absenken. Fokus liegt auf dem Gesäß, nicht auf dem unteren Rücken.",
        notes:
          "Ziel ist, dass dein Gesäß wieder mehr Arbeit übernimmt und die Vorderseite der Hüfte weniger überlastet."
      },
      {
        name: "Dead Bug",
        area: "Core / Hüftkontrolle",
        frequency: "4–5x pro Woche",
        sets: "2–3 Sätze",
        reps: "6–8 Wiederholungen pro Seite",
        intensity: "Leicht",
        execution:
          "Lege dich auf den Rücken. Arme zeigen nach oben, Beine sind in 90 Grad angewinkelt. Senke langsam einen Arm und das gegenüberliegende Bein. Der Rücken bleibt ruhig am Boden. Nur so weit gehen, wie du Kontrolle hältst.",
        notes:
          "Wenn die Leiste zieht, das Bein weniger weit absenken. Es geht um Kontrolle, nicht um maximale Reichweite."
      },
      {
        name: "Ball- oder Kissen-Squeeze",
        area: "Adduktoren / Leiste",
        frequency: "4–5x pro Woche",
        sets: "3 Sätze",
        reps: "10–15 Sekunden halten",
        intensity: "Sehr leicht bis leicht",
        execution:
          "Lege dich auf den Rücken, Knie angewinkelt. Lege ein Kissen oder einen Ball zwischen die Knie. Drücke nur leicht zusammen, ungefähr 30–40 Prozent Kraft. Danach komplett lösen.",
        notes:
          "Nicht maximal drücken. Die Leiste soll kontrolliert aktiviert werden, nicht gereizt."
      },
      {
        name: "Controlled Hip Circles klein",
        area: "Hüftmobilität",
        frequency: "3–4x pro Woche",
        sets: "2 Sätze pro Seite",
        reps: "8 kleine Kreise je Richtung",
        intensity: "Sehr leicht",
        execution:
          "Stelle dich stabil hin. Hebe ein Knie leicht an und mache kleine, langsame Kreise. Die Bewegung bleibt klein. Kein Reißen, kein Schwung, keine Endposition.",
        notes:
          "Die Kreise bleiben bewusst klein. Keine Mobility-Challenge daraus machen."
      },
      {
        name: "Single Leg Balance",
        area: "Hüftstabilität / Becken",
        frequency: "3–4x pro Woche",
        sets: "3 Sätze pro Seite",
        reps: "20–30 Sekunden halten",
        intensity: "Leicht",
        execution:
          "Stelle dich auf ein Bein. Knie leicht weich lassen. Becken bleibt gerade. Nicht ins Hohlkreuz fallen. Bei Bedarf an der Wand festhalten.",
        notes:
          "Wenn diese Übung schmerzfrei klappt, ist das ein gutes Zeichen für bessere Hüftkontrolle. Es bedeutet aber noch nicht, dass Kicks wieder bereit sind."
      }
    ],
    weeklyNotes: [
      "Diese Woche nicht testen, ob Spagat oder Kicks schon wieder gehen.",
      "Der wichtigste Fortschritt ist weniger Druck in der Leiste und weniger Reizung am Folgetag.",
      "Wenn du nach 7 Tagen weniger Grundspannung spürst, ist das bereits ein guter Anfang."
    ]
  },

  {
    phase: "Phase 2",
    title: "Woche 2 – Stabilität & kontrollierte Belastung",
    duration: "7 Tage",
    status: "Nach Woche 1, wenn Schmerz nicht schlechter wurde",
    goal:
      "Die Hüfte weiter stabilisieren und etwas mehr Belastung einbauen, ohne direkt wieder in sportartspezifische Endpositionen zu gehen.",
    description:
      "Diese Phase startest du nur, wenn Woche 1 insgesamt gut vertragen wurde. Es geht um leichte Kraft, Stabilität und bessere Belastbarkeit.",
    rules: [
      "Nur starten, wenn Woche 1 keine deutliche Verschlechterung ausgelöst hat",
      "Weiterhin maximal 2–3/10 Schmerz",
      "Keine explosive Technik",
      "Kein Spagat-Test",
      "Wenn eine Übung nachbrennt, zurück zu Phase 1"
    ],
    avoid: [
      "Volle Kicks",
      "Spagat",
      "Sprung-Kombinationen",
      "Tricking-Technik mit Hüft-Endposition",
      "Schwere Beinübungen",
      "Tiefe Bulgarian Split Squats",
      "Box Jumps oder Skater Hops"
    ],
    exercises: [
      {
        name: "Mini Squat",
        area: "Beine / Hüfte",
        frequency: "3–4x pro Woche",
        sets: "3 Sätze",
        reps: "8–10 Wiederholungen",
        intensity: "Leicht",
        execution:
          "Schulterbreiter Stand. Gehe nur leicht in die Knie. Rücken neutral, Knie folgen den Füßen. Nicht tief beugen. Die Leiste bleibt ruhig.",
        notes:
          "Diese Übung ist kein Krafttest. Sie soll zeigen, ob die Hüfte leichte Alltagsbelastung kontrolliert toleriert."
      },
      {
        name: "Wall Sit kurz",
        area: "Beine / statische Belastung",
        frequency: "3–4x pro Woche",
        sets: "3 Sätze",
        reps: "20–30 Sekunden halten",
        intensity: "Leicht bis moderat",
        execution:
          "Lehne dich mit dem Rücken an eine Wand. Gehe nur so tief, dass kein Leistenschmerz entsteht. Gleichmäßig über beide Füße belasten.",
        notes:
          "Nicht tief sitzen. Vorderseite der Hüfte darf nicht drücken oder stechen."
      },
      {
        name: "Glute Bridge mit Halten",
        area: "Gesäß / Hüftstreckung",
        frequency: "4–5x pro Woche",
        sets: "3 Sätze",
        reps: "10–12 Wiederholungen, oben 2 Sekunden halten",
        intensity: "Leicht bis moderat",
        execution:
          "Führe eine normale Glute Bridge aus. Halte oben 2 Sekunden. Becken bleibt gerade. Nicht ins Hohlkreuz gehen.",
        notes:
          "Saubere Gesäßaktivierung ist wichtiger als Höhe."
      },
      {
        name: "Seitlage Clamshell ohne Band",
        area: "Seitliche Hüfte / Gluteus medius",
        frequency: "4x pro Woche",
        sets: "3 Sätze pro Seite",
        reps: "10–12 Wiederholungen",
        intensity: "Leicht",
        execution:
          "Lege dich auf die Seite. Knie leicht beugen, Füße bleiben zusammen. Öffne das obere Knie langsam und kontrolliert, ohne das Becken nach hinten zu drehen. Danach langsam schließen.",
        notes:
          "Diese Übung hilft der seitlichen Hüftstabilität, was bei Kicks und Standbein-Kontrolle später wichtig wird."
      },
      {
        name: "Standing March Hold",
        area: "Hüftbeuger / Core / Balance",
        frequency: "3x pro Woche",
        sets: "3 Sätze pro Seite",
        reps: "10–15 Sekunden halten",
        intensity: "Leicht",
        execution:
          "Stehe aufrecht. Hebe ein Knie bis maximal Hüfthöhe oder darunter, wenn es zieht. Halte die Position ruhig. Becken bleibt gerade, Bauch leicht aktiv.",
        notes:
          "Das ist eine vorsichtige Steigerung vom isometrischen Hüftbeuger-Hold. Kein Schwung, kein hohes Bein."
      },
      {
        name: "Dead Bug erweitert",
        area: "Core / Hüftkontrolle",
        frequency: "3–4x pro Woche",
        sets: "3 Sätze",
        reps: "8–10 Wiederholungen pro Seite",
        intensity: "Leicht bis moderat",
        execution:
          "Wie Dead Bug aus Woche 1, aber etwas kontrollierter und mit minimal größerem Bewegungsradius, nur wenn schmerzfrei.",
        notes:
          "Bewegungsradius nur erhöhen, wenn die Leiste ruhig bleibt."
      }
    ],
    weeklyNotes: [
      "Woche 2 ist noch kein Return-to-Tricking.",
      "Du baust Belastbarkeit auf, ohne die alte Reizung direkt wieder zu triggern.",
      "Wenn alles ruhig bleibt, kann danach langsam sportartspezifischer gearbeitet werden."
    ]
  },

  {
    phase: "Phase 3",
    title: "Woche 3–4 – Vorbereitung auf Technik",
    duration: "2 Wochen",
    status: "Nur wenn Phase 1 und 2 gut vertragen wurden",
    goal:
      "Die Hüfte auf kontrollierte sportlichere Bewegungen vorbereiten, aber weiterhin ohne volle Kicks oder Spagat-Endposition.",
    description:
      "Diese Phase ist der Übergang von Reha zu kontrollierter Sportvorbereitung. Es wird etwas dynamischer, aber noch nicht maximal.",
    rules: [
      "Nur starten, wenn Alltag und Phase-2-Übungen weitgehend ruhig sind",
      "Keine maximale Range of Motion",
      "Keine explosiven High Kicks",
      "Langsam steigern",
      "Nach jeder Einheit Folgetag beobachten"
    ],
    avoid: [
      "Volle seitliche Kicks",
      "Maximaler Spagat",
      "Tricking-Kombos",
      "Explosive Rotationskicks",
      "Springen mit harter Landung",
      "Dehnen mit Partnerdruck"
    ],
    exercises: [
      {
        name: "Step Back Lunge klein",
        area: "Beine / Hüftkontrolle",
        frequency: "3x pro Woche",
        sets: "2–3 Sätze pro Seite",
        reps: "6–8 Wiederholungen",
        intensity: "Leicht",
        execution:
          "Mache einen kleinen Schritt nach hinten. Senke dich nur leicht ab. Oberkörper bleibt aufrecht, Becken stabil. Nicht tief gehen.",
        notes:
          "Kein tiefer Ausfallschritt. Die vordere Hüfte darf nicht ziehen."
      },
      {
        name: "Standing Hip Flexion langsam",
        area: "Hüftbeuger kontrolliert",
        frequency: "3x pro Woche",
        sets: "3 Sätze pro Seite",
        reps: "8 langsame Wiederholungen",
        intensity: "Leicht",
        execution:
          "Stehe aufrecht und hebe das Knie langsam nach oben, nur bis zur schmerzfreien Höhe. Langsam wieder absenken. Kein Schwung.",
        notes:
          "Das ist noch kein Kick. Es ist kontrolliertes Beinheben."
      },
      {
        name: "Side Step ohne Band",
        area: "Seitliche Hüfte",
        frequency: "3x pro Woche",
        sets: "3 Sätze",
        reps: "8–10 Schritte je Richtung",
        intensity: "Leicht",
        execution:
          "Gehe in leichter Kniebeuge seitlich kleine Schritte. Becken stabil halten, Schritte klein halten.",
        notes:
          "Nur kleine Schritte. Kein tiefes Absinken."
      },
      {
        name: "Single Leg Balance mit Armbewegung",
        area: "Balance / Hüftstabilität",
        frequency: "3–4x pro Woche",
        sets: "3 Sätze pro Seite",
        reps: "20–30 Sekunden",
        intensity: "Leicht bis moderat",
        execution:
          "Stehe auf einem Bein und bewege die Arme langsam nach vorne, oben oder zur Seite. Becken bleibt stabil.",
        notes:
          "Wenn die Hüfte ausweicht oder die Leiste zieht, zurück zur normalen Single Leg Balance."
      },
      {
        name: "Glute Bridge March sehr klein",
        area: "Gesäß / Core / Hüftkontrolle",
        frequency: "2–3x pro Woche",
        sets: "2 Sätze",
        reps: "6 Wiederholungen pro Seite",
        intensity: "Leicht bis moderat",
        execution:
          "Gehe in die Glute Bridge. Hebe einen Fuß minimal vom Boden ab, halte das Becken stabil und setze ihn wieder ab. Seiten wechseln.",
        notes:
          "Nur durchführen, wenn normale Glute Bridge absolut ruhig ist."
      }
    ],
    weeklyNotes: [
      "Diese Phase ist noch kontrolliert, nicht explosiv.",
      "Du bereitest die Hüfte auf Technik vor, ohne die Entzündung wieder anzuschieben.",
      "Wenn Symptome zurückkommen, direkt 1 Phase zurückgehen."
    ]
  },

  {
    phase: "Phase 4",
    title: "Woche 5+ – Vorsichtiger Return to Tricking",
    duration: "offen / schrittweise",
    status: "Nur nach ärztlicher/therapeutischer Freigabe sinnvoll",
    goal:
      "Langsam wieder sportartspezifische Bewegungen einbauen, ohne direkt in volle Intensität, volle Kicks oder Spagat zurückzugehen.",
    description:
      "Diese Phase ist bewusst vorsichtig formuliert. Sie sollte idealerweise mit deinem Orthopäden oder Physio abgestimmt werden.",
    rules: [
      "Nur starten, wenn normale Übungen schmerzfrei oder nahezu schmerzfrei sind",
      "Technik zuerst langsam und niedrig",
      "Keine Maximalhöhe",
      "Keine Maximal-Dehnung",
      "Pro Einheit nur wenige Wiederholungen testen"
    ],
    avoid: [
      "Direkt volle Kicks",
      "Direkt volle Tricking-Session",
      "Spagat erzwingen",
      "Mehrere neue Belastungen gleichzeitig",
      "Training trotz Folgetag-Reizung"
    ],
    exercises: [
      {
        name: "Low Kick Pattern langsam",
        area: "Technik-Vorbereitung",
        frequency: "2x pro Woche",
        sets: "2 Sätze pro Seite",
        reps: "5 sehr kontrollierte Wiederholungen",
        intensity: "Sehr leicht",
        execution:
          "Führe eine Kick-Bewegung nur niedrig und langsam aus. Keine maximale Höhe. Kein Schwung. Bewegung sofort abbrechen, wenn die Leiste zieht.",
        notes:
          "Das ist ein Technik-Test, kein Training."
      },
      {
        name: "Controlled Chamber Hold",
        area: "Kick-Vorposition / Hüftbeuger",
        frequency: "2x pro Woche",
        sets: "2–3 Sätze pro Seite",
        reps: "5–10 Sekunden halten",
        intensity: "Leicht",
        execution:
          "Gehe langsam in eine niedrige Chamber-Position. Halte kurz stabil. Dann kontrolliert absetzen.",
        notes:
          "Nur niedrige Position. Kein Hochziehen in alte Kick-Höhe."
      },
      {
        name: "Partial Split Position",
        area: "Beweglichkeit vorsichtig",
        frequency: "2x pro Woche",
        sets: "2 Durchgänge",
        reps: "20–30 Sekunden",
        intensity: "Sehr leicht",
        execution:
          "Gehe nur in eine sehr reduzierte Spagat-ähnliche Position. Kein Endrange. Kein Ziehen erzwingen. Du bleibst weit weg vom Schmerzpunkt.",
        notes:
          "Diese Übung nur machen, wenn dein Orthopäde oder Physio nichts dagegen hat."
      },
      {
        name: "Return Check: Folgetag-Test",
        area: "Belastungssteuerung",
        frequency: "Nach jeder Technik-Einheit",
        sets: "1 Check",
        reps: "Am nächsten Morgen bewerten",
        intensity: "Kontrolle",
        execution:
          "Bewerte am nächsten Tag: Ist die Leiste gleich, besser oder schlechter? Wenn schlechter, war die Belastung zu hoch.",
        notes:
          "Dieser Check entscheidet, ob du steigern darfst oder zurückgehen musst."
      }
    ],
    weeklyNotes: [
      "Return to Tricking ist kein einzelner Tag, sondern ein Prozess.",
      "Wenn du zu früh hochgehst, kann die Reizung schnell zurückkommen.",
      "Diese Phase solltest du beim Arzttermin unbedingt ansprechen."
    ]
  }
];

/* ===================== HILFSFUNKTIONEN ===================== */

function createExerciseId(phaseIndex, exerciseIndex) {
  return `bursitis_phase_${phaseIndex}_exercise_${exerciseIndex}`;
}

function getProgress() {
  const saved = localStorage.getItem("bursitisRehaPhaseProgress");
  return saved ? JSON.parse(saved) : {};
}

function saveProgress(progress) {
  localStorage.setItem("bursitisRehaPhaseProgress", JSON.stringify(progress));
}

function toggleExercise(id) {
  const progress = getProgress();
  progress[id] = !progress[id];
  saveProgress(progress);
  renderPhases();
}

function resetProgress() {
  const confirmReset = confirm("Möchtest du deinen gesamten Reha-Fortschritt wirklich zurücksetzen?");
  if (!confirmReset) return;

  localStorage.removeItem("bursitisRehaPhaseProgress");
  renderPhases();
}

function calculatePhaseProgress(phase, phaseIndex, progress) {
  const total = phase.exercises.length;

  const completed = phase.exercises.filter((_, exerciseIndex) => {
    return progress[createExerciseId(phaseIndex, exerciseIndex)];
  }).length;

  return {
    total,
    completed,
    percent: total === 0 ? 0 : Math.round((completed / total) * 100)
  };
}

/* ===================== RENDER ===================== */

const container = document.getElementById("week");

function renderPhases() {
  const progress = getProgress();

  if (!container) {
    console.error("Kein Element mit der ID 'week' gefunden.");
    return;
  }

  container.innerHTML = "";

  const introDiv = document.createElement("div");
  introDiv.className = "day intro-card";

  introDiv.innerHTML = `
    <h2>🦴 Reha-Übersicht</h2>
    <div class="inner">
      <div class="section">
        <div class="toggle">⚠️ Wichtige Schmerzregel <span class="arrow">▶</span></div>
        <div class="inner">
          <p>
            Während der Übungen maximal <strong>2–3/10 Schmerz</strong>.
            Kein stechender Leistenschmerz. Wenn die Beschwerden am nächsten Tag deutlich stärker sind,
            war die Belastung zu hoch.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="toggle">🎯 Aufbau der App <span class="arrow">▶</span></div>
        <div class="inner">
          <p>
            Auf der Startseite siehst du die einzelnen Phasen bzw. Wochen.
            Klicke auf eine Phase, um Ziele, Regeln, Übungen und Bemerkungen zu öffnen.
          </p>
        </div>
      </div>

      <div class="section">
        <button id="resetProgressBtn" type="button">Fortschritt zurücksetzen</button>
      </div>
    </div>
  `;

  container.appendChild(introDiv);

  phaseData.forEach((phase, phaseIndex) => {
    const phaseProgress = calculatePhaseProgress(phase, phaseIndex, progress);

    const phaseDiv = document.createElement("div");
    phaseDiv.className = "day phase-card";

    phaseDiv.innerHTML = `
      <h2>
        <span>${phase.phase}: ${phase.title}</span>
        <span class="phase-status">${phaseProgress.completed}/${phaseProgress.total}</span>
      </h2>

      <div class="inner">

        <div class="phase-summary">
          <p><strong>Dauer:</strong> ${phase.duration}</p>
          <p><strong>Status:</strong> ${phase.status}</p>
          <p><strong>Ziel:</strong> ${phase.goal}</p>

          <div class="progress-wrapper">
            <div class="progress-text">${phaseProgress.percent}% erledigt</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${phaseProgress.percent}%"></div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="toggle">📌 Beschreibung <span class="arrow">▶</span></div>
          <div class="inner">
            <p>${phase.description}</p>
          </div>
        </div>

        <div class="section">
          <div class="toggle">✅ Regeln für diese Phase <span class="arrow">▶</span></div>
          <div class="inner">
            <ul>
              ${phase.rules.map(rule => `<li>${rule}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="section">
          <div class="toggle">🏋️ Übungen inkl. Bemerkungen <span class="arrow">▶</span></div>
          <div class="inner">
            ${
              phase.exercises.length
                ? phase.exercises.map((exercise, exerciseIndex) => {
                    const id = createExerciseId(phaseIndex, exerciseIndex);
                    const checked = progress[id] ? "checked" : "";

                    return `
                      <div class="exercise-card">
                        <div class="toggle exercise-toggle">
                          <label class="exercise-label">
                            <input type="checkbox" class="exercise-check" data-id="${id}" ${checked}>
                            <span>${exercise.name}</span>
                          </label>
                          <span class="arrow">▶</span>
                        </div>

                        <div class="inner">
                          <div class="exercise-grid">
                            <p><strong>Bereich:</strong> ${exercise.area}</p>
                            <p><strong>Häufigkeit:</strong> ${exercise.frequency}</p>
                            <p><strong>Sätze:</strong> ${exercise.sets}</p>
                            <p><strong>Dauer/Wdh.:</strong> ${exercise.reps}</p>
                            <p><strong>Intensität:</strong> ${exercise.intensity}</p>
                          </div>

                          <p><strong>Ausführung:</strong></p>
                          <p>${exercise.execution}</p>

                          <p><strong>Bemerkung:</strong></p>
                          <p>${exercise.notes}</p>
                        </div>
                      </div>
                    `;
                  }).join("")
                : "<em>Keine Übungen hinterlegt</em>"
            }
          </div>
        </div>

        <div class="section">
          <div class="toggle">❌ In dieser Phase vermeiden <span class="arrow">▶</span></div>
          <div class="inner">
            <ul>
              ${phase.avoid.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="section">
          <div class="toggle">📝 Wochen-/Phasenhinweise <span class="arrow">▶</span></div>
          <div class="inner">
            <ul>
              ${phase.weeklyNotes.map(note => `<li>${note}</li>`).join("")}
            </ul>
          </div>
        </div>

      </div>
    `;

    container.appendChild(phaseDiv);
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
      if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "LABEL" ||
        event.target.closest("label")
      ) {
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

renderPhases();
