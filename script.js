"use strict";

/*
|--------------------------------------------------------------------------
| STORAGE
|--------------------------------------------------------------------------
*/

const PROGRESS_KEY = "trickingPerformanceProgressV1";
const OPEN_SECTIONS_KEY = "trickingOpenSectionsV1";

let activeFilter = "all";
let activeDay = null;


/*
|--------------------------------------------------------------------------
| WOCHENPLAN
|--------------------------------------------------------------------------
*/

const weeklySchedule = [

    {
        day: 1,
        name: "Montag",
        shortName: "Mo",
        icon: "🏋️",
        title: "Kraft A",
        focus: "Maximalkraft + Beinkraft",
        category: "strength",
        sections: ["strength", "hip"],
        exercises: [
            "weighted-squat",
            "bulgarian-split-squat",
            "single-leg-rdl",
            "calf-raises",
            "soleus-raises"
        ]
    },

    {
        day: 2,
        name: "Dienstag",
        shortName: "Di",
        icon: "🧘",
        title: "Mobility C",
        focus: "Beweglichkeit + Hüftstabilität",
        category: "mobility",
        sections: ["mobility", "hip"],
        exercises: [
            "hip-cars",
            "seated-internal-rotation",
            "pancake-lifts",
            "cossack-squat",
            "hamstring-floss",
            "side-leg-raise",
            "single-leg-bridge",
            "banded-walk",
            "hip-airplane",
            "dead-bug"
        ]
    },

    {
        day: 3,
        name: "Mittwoch",
        shortName: "Mi",
        icon: "⚡",
        title: "Sprung B",
        focus: "Explosivkraft + Reaktivkraft",
        category: "power",
        sections: ["power"],
        exercises: [
            "box-jump",
            "explosive-step-up",
            "explosive-skips",
            "pogos",
            "broad-jump"
        ]
    },

    {
        day: 4,
        name: "Donnerstag",
        shortName: "Do",
        icon: "🧘",
        title: "Mobility C",
        focus: "Beweglichkeit + Hüftstabilität",
        category: "mobility",
        sections: ["mobility", "hip"],
        exercises: [
            "hip-cars",
            "seated-internal-rotation",
            "pancake-lifts",
            "cossack-squat",
            "hamstring-floss",
            "side-leg-raise",
            "hip-airplane",
            "side-plank",
            "copenhagen",
            "dead-bug"
        ]
    },

    {
        day: 5,
        name: "Freitag",
        shortName: "Fr",
        icon: "🤸",
        title: "Tricking D",
        focus: "Technik + Skills",
        category: "tricking",
        sections: ["tricking"],
        exercises: [
            "chamber-hold",
            "partial-extension",
            "low-side-kick",
            "takeoff-drill",
            "combination",
            "next-day-check"
        ]
    },

    {
        day: 6,
        name: "Samstag",
        shortName: "Sa",
        icon: "💤",
        title: "Frei",
        focus: "Regeneration",
        category: "rest",
        sections: [],
        exercises: []
    },

    {
        day: 0,
        name: "Sonntag",
        shortName: "So",
        icon: "💤",
        title: "Frei",
        focus: "Regeneration",
        category: "rest",
        sections: [],
        exercises: []
    }

];


/*
|--------------------------------------------------------------------------
| TRAININGSDATEN
|--------------------------------------------------------------------------
*/

const trainingData = [

    {
        id: "hip",
        category: "hip",
        number: "Bereich 1",
        icon: "🦴",
        title: "Hüftstabilität und Belastbarkeit",
        subtitle: "Dienstag + Donnerstag",

        exercises: [

            {
                id: "single-leg-bridge",
                name: "Single Leg Glute Bridge",
                focus: "Gluteus + Beckenkontrolle",
                sets: "2–3 Sätze",
                reps: "8–12 pro Seite",
                rest: "60–90 Sek.",
                intensity: "Kontrolliert",
                execution:
                    "Ein Bein aufstellen, das andere Bein leicht anheben. Becken kontrolliert nach oben drücken und langsam absenken.",
                note:
                    "Becken während der gesamten Bewegung gerade halten.",
                stop:
                    "Bei Schmerzen in der Hüfte oder im unteren Rücken abbrechen."
            },

            {
                id: "banded-walk",
                name: "Banded Lateral Walk",
                focus: "Gluteus medius + seitliche Hüftstabilität",
                sets: "2–3 Sätze",
                reps: "10–15 Schritte pro Richtung",
                rest: "45–60 Sek.",
                intensity: "Leicht bis moderat",
                execution:
                    "Band oberhalb der Knie oder an den Knöcheln platzieren. Knie leicht beugen und kontrolliert seitwärts gehen.",
                note:
                    "Knie aktiv nach außen führen und Becken stabil halten.",
                stop:
                    "Nicht mit Schwung arbeiten oder in Schmerzen hinein trainieren."
            },

            {
                id: "hip-airplane",
                name: "Hip Airplane",
                focus: "Einbeinige Hüftkontrolle + Rotation",
                sets: "2 Sätze",
                reps: "5–8 pro Seite",
                rest: "60–90 Sek.",
                intensity: "Kontrolliert",
                execution:
                    "Auf einem Bein stehen, Oberkörper leicht nach vorne neigen und das Becken kontrolliert öffnen und schließen.",
                note:
                    "Kleine Bewegungsamplitude ist völlig in Ordnung.",
                stop:
                    "Abbrechen, wenn die Bewegung schmerzhaft oder unkontrolliert wird."
            },

            {
                id: "side-plank",
                name: "Side Plank",
                focus: "Seitliche Rumpf- und Hüftstabilität",
                sets: "2–3 Sätze",
                reps: "20–40 Sek. pro Seite",
                rest: "45–60 Sek.",
                intensity: "Moderat",
                execution:
                    "Seitlich auf Unterarm und Fuß bzw. Knie abstützen. Körper in einer Linie halten.",
                note:
                    "Hüfte aktiv oben halten.",
                stop:
                    "Bei Schmerzen in Schulter, Hüfte oder Rücken abbrechen."
            },

            {
                id: "copenhagen",
                name: "Copenhagen Plank",
                focus: "Adduktoren + Hüftstabilität",
                sets: "2 Sätze",
                reps: "15–30 Sek. pro Seite",
                rest: "60–90 Sek.",
                intensity: "Moderat",
                execution:
                    "Seitstütz mit dem oberen Bein auf einer erhöhten Fläche. Körper stabil halten.",
                note:
                    "Mit einer leichteren Variante beginnen.",
                stop:
                    "Bei stechendem Schmerz in der Leiste oder Hüfte abbrechen."
            },

            {
                id: "dead-bug",
                name: "Dead Bug",
                focus: "Core + Beckenkontrolle",
                sets: "2–3 Sätze",
                reps: "6–10 pro Seite",
                rest: "45–60 Sek.",
                intensity: "Kontrolliert",
                execution:
                    "Rücken am Boden halten und gegenüberliegenden Arm und Bein langsam strecken.",
                note:
                    "Lendenwirbelsäule kontrolliert am Boden halten.",
                stop:
                    "Wenn die Kontrolle verloren geht, Wiederholung beenden."
            }

        ]
    },


    {
        id: "mobility",
        category: "mobility",
        number: "Bereich 2",
        icon: "🧘",
        title: "Aktive Range und Beweglichkeit",
        subtitle: "Dienstag + Donnerstag",

        exercises: [

            {
                id: "hip-cars",
                name: "Hip CARs",
                focus: "Aktive Hüftbeweglichkeit",
                sets: "2 Sätze",
                reps: "3–5 pro Seite",
                rest: "30–60 Sek.",
                intensity: "Sehr kontrolliert",
                execution:
                    "Das Knie langsam und kontrolliert durch möglichst große schmerzfreie Bewegungsbahnen führen.",
                note:
                    "Langsam ausführen. Qualität ist wichtiger als maximale Range.",
                stop:
                    "Nicht in schmerzhafte Endpositionen drücken."
            },

            {
                id: "seated-internal-rotation",
                name: "Seated Internal Rotation",
                focus: "Innenrotation der Hüfte",
                sets: "2 Sätze",
                reps: "6–10 pro Seite",
                rest: "30–60 Sek.",
                intensity: "Leicht",
                execution:
                    "Im Sitzen das Knie kontrolliert nach innen bewegen und wieder zurückführen.",
                note:
                    "Nur den kontrollierten Bewegungsbereich verwenden.",
                stop:
                    "Bei tiefem oder stechendem Hüftschmerz abbrechen."
            },

            {
                id: "pancake-lifts",
                name: "Active Pancake Lifts",
                focus: "Adduktoren + aktive Beweglichkeit",
                sets: "3 Sätze",
                reps: "8–10",
                rest: "60 Sek.",
                intensity: "Moderat",
                execution:
                    "Im breiten Sitz die Beine aktiv in den Boden drücken und versuchen, die Beine bzw. Fersen leicht zu entlasten.",
                note:
                    "Rücken möglichst lang halten.",
                stop:
                    "Keine aggressive Dehnung erzwingen."
            },

            {
                id: "cossack-squat",
                name: "Cossack Squat",
                focus: "Adduktoren + Hüftbeweglichkeit",
                sets: "2 Sätze",
                reps: "5–8 pro Seite",
                rest: "60–90 Sek.",
                intensity: "Kontrolliert",
                execution:
                    "Gewicht auf eine Seite verlagern, während das andere Bein gestreckt bleibt.",
                note:
                    "Bewegungsradius langsam aufbauen.",
                stop:
                    "Bei Schmerzen in Hüfte, Knie oder Leiste abbrechen."
            },

            {
                id: "hamstring-floss",
                name: "Hamstring Floss",
                focus: "Dynamische hintere Kette",
                sets: "2 Sätze",
                reps: "8–12 pro Seite",
                rest: "30–45 Sek.",
                intensity: "Leicht",
                execution:
                    "Bein kontrolliert strecken und wieder lösen, ohne lange in der Endposition zu halten.",
                note:
                    "Soll sich dynamisch und leicht anfühlen.",
                stop:
                    "Nicht in starke Dehnung oder Schmerzen drücken."
            },

            {
                id: "side-leg-raise",
                name: "Side Leg Raise",
                focus: "Seitliche Hüftmuskulatur",
                sets: "2–3 Sätze",
                reps: "10–15 pro Seite",
                rest: "45–60 Sek.",
                intensity: "Leicht bis moderat",
                execution:
                    "Seitlich liegen und das obere Bein kontrolliert anheben und absenken.",
                note:
                    "Becken nicht nach hinten kippen.",
                stop:
                    "Bei Hüftschmerz abbrechen."
            }

        ]
    },


    {
        id: "strength",
        category: "strength",
        number: "Bereich 3",
        icon: "🏋️",
        title: "Maximalkraft",
        subtitle: "Montag",

        exercises: [

            {
                id: "weighted-squat",
                name: "Barbell Back Squat",
                focus: "Quadkraft + Hüftextension",
                sets: "4 Sätze",
                reps: "4–6",
                rest: "2–3 Min.",
                intensity: "Schwer",
                execution:
                    "Kontrolliert absenken und explosiv aus dem unteren Punkt aufstehen.",
                note:
                    "Etwa 1–2 Wiederholungen im Tank lassen. Keine Wiederholungen bis zum Muskelversagen.",
                stop:
                    "Bei Schmerzen oder deutlichem Verlust der Technik abbrechen."
            },

            {
                id: "bulgarian-split-squat",
                name: "Bulgarian Split Squat",
                focus: "Einbeinige Beinkraft + Hüftstabilität",
                sets: "3 Sätze",
                reps: "6–8 pro Seite",
                rest: "2 Min.",
                intensity: "Schwer",
                execution:
                    "Hinteren Fuß erhöht ablegen und kontrolliert in die einbeinige Kniebeuge gehen.",
                note:
                    "Vorderes Bein übernimmt die Hauptarbeit.",
                stop:
                    "Bei Schmerzen in Knie oder Hüfte abbrechen."
            },

            {
                id: "single-leg-rdl",
                name: "Single Leg RDL",
                focus: "Hamstrings + Gluteus + Balance",
                sets: "3 Sätze",
                reps: "6–8 pro Seite",
                rest: "90 Sek.",
                intensity: "Schwer",
                execution:
                    "Auf einem Bein stehen und die Hüfte nach hinten schieben, während der Oberkörper nach vorne kommt.",
                note:
                    "Becken möglichst gerade halten.",
                stop:
                    "Bei Schmerzen oder Verlust der Balance abbrechen."
            },

            {
                id: "calf-raises",
                name: "Standing Calf Raise",
                focus: "Wadenkraft + Absprung",
                sets: "4 Sätze",
                reps: "8–12",
                rest: "60–90 Sek.",
                intensity: "Schwer",
                execution:
                    "Aus voller Dehnung kraftvoll auf die Zehenspitzen drücken und kontrolliert absenken.",
                note:
                    "Oben kurz halten.",
                stop:
                    "Bei Schmerzen in Achillessehne oder Fuß abbrechen."
            },

            {
                id: "soleus-raises",
                name: "Seated Soleus Raise",
                focus: "Soleus + reaktive Kraft",
                sets: "3 Sätze",
                reps: "10–15",
                rest: "60–90 Sek.",
                intensity: "Moderat bis schwer",
                execution:
                    "Im Sitzen die Fersen gegen Widerstand nach oben drücken.",
                note:
                    "Langsame Absenkphase verwenden.",
                stop:
                    "Bei Schmerzen in Fuß oder Achillessehne abbrechen."
            }

        ]
    },


    {
        id: "power",
        category: "power",
        number: "Bereich 4",
        icon: "🚀",
        title: "Vertikale Sprungkraft",
        subtitle: "Mittwoch",

        exercises: [

            {
                id: "countermovement-jump",
                name: "Countermovement Jump",
                focus: "Maximale Sprunghöhe",
                sets: "3 Sätze",
                reps: "3",
                rest: "2–3 Min.",
                intensity: "Maximal explosiv",
                execution:
                    "Kurze Gegenbewegung und anschließend maximal explosiv nach oben springen.",
                note:
                    "Jede Wiederholung mit maximaler Qualität.",
                stop:
                    "Sobald die Sprunghöhe deutlich abnimmt, Satz beenden."
            },

            {
                id: "box-jump",
                name: "Box Jump",
                focus: "Explosivität + sichere Landung",
                sets: "4 Sätze",
                reps: "3",
                rest: "2 Min.",
                intensity: "Maximal explosiv",
                execution:
                    "Explosiv auf eine sichere Box springen und kontrolliert landen.",
                note:
                    "Box nicht unnötig hoch wählen.",
                stop:
                    "Bei unsicherer Landung oder sinkender Sprunghöhe abbrechen."
            },

            {
                id: "explosive-step-up",
                name: "Explosive Step-Up",
                focus: "Einbeinige Explosivität",
                sets: "3 Sätze",
                reps: "5 pro Seite",
                rest: "90–120 Sek.",
                intensity: "Explosiv",
                execution:
                    "Aus einem Step-Up heraus explosiv nach oben drücken.",
                note:
                    "Die Bewegung soll schnell und sauber sein.",
                stop:
                    "Bei fehlender Explosivität oder Schmerzen abbrechen."
            },

            {
                id: "explosive-skips",
                name: "Explosive Skips",
                focus: "Reaktivkraft + Sprintmechanik",
                sets: "3 Sätze",
                reps: "20 m",
                rest: "90 Sek.",
                intensity: "Explosiv",
                execution:
                    "Mit kraftvollen, federnden Schritten nach vorne bewegen.",
                note:
                    "Aktiv über Fuß und Hüfte arbeiten.",
                stop:
                    "Wenn die Bewegung schwer oder unkontrolliert wird."
            },

            {
                id: "pogos",
                name: "Pogos",
                focus: "Ankle Stiffness + Reaktivkraft",
                sets: "3 Sätze",
                reps: "15–20",
                rest: "60–90 Sek.",
                intensity: "Explosiv",
                execution:
                    "Mit kurzen, federnden Sprüngen möglichst wenig Bodenkontaktzeit erzeugen.",
                note:
                    "Körper aufrecht und Kontaktzeit kurz halten.",
                stop:
                    "Bei Schmerzen oder deutlich schlechter werdender Reaktivität."
            },

            {
                id: "single-leg-pogos",
                name: "Single Leg Pogos",
                focus: "Einbeinige Reaktivkraft",
                sets: "2 Sätze",
                reps: "8–12 pro Seite",
                rest: "60–90 Sek.",
                intensity: "Explosiv",
                execution:
                    "Auf einem Bein kleine reaktive Sprünge ausführen.",
                note:
                    "Nur verwenden, wenn beidbeinige Pogos problemlos funktionieren.",
                stop:
                    "Bei Schmerzen oder instabiler Landung sofort abbrechen."
            },

            {
                id: "broad-jump",
                name: "Broad Jump",
                focus: "Horizontale Explosivität",
                sets: "3 Sätze",
                reps: "3",
                rest: "2 Min.",
                intensity: "Maximal explosiv",
                execution:
                    "Aus einer kontrollierten Startposition maximal weit nach vorne springen.",
                note:
                    "Saubere Landung vor maximaler Distanz.",
                stop:
                    "Bei unsicherer Landung oder Schmerzen abbrechen."
            }

        ]
    },


    {
        id: "tricking",
        category: "tricking",
        number: "Bereich 5",
        icon: "🤸",
        title: "Return to Tricking",
        subtitle: "Freitag",

        exercises: [

            {
                id: "chamber-hold",
                name: "Chamber Hold",
                focus: "Kick-Kontrolle + Hüftstabilität",
                sets: "3 Sätze",
                reps: "15–30 Sek. pro Seite",
                rest: "60 Sek.",
                intensity: "Kontrolliert",
                execution:
                    "Kick-Position einnehmen und das Bein kontrolliert halten.",
                note:
                    "Saubere Position vor maximaler Höhe.",
                stop:
                    "Bei tiefem oder stechendem Hüftschmerz abbrechen."
            },

            {
                id: "partial-extension",
                name: "Partial Kick Extension",
                focus: "Kontrollierte Kick-Bewegung",
                sets: "3 Sätze",
                reps: "5–8 pro Seite",
                rest: "60–90 Sek.",
                intensity: "Leicht bis moderat",
                execution:
                    "Aus der Chamber-Position das Bein nur in einem kontrollierten Teilbereich strecken.",
                note:
                    "Noch nicht auf maximale Kickhöhe gehen.",
                stop:
                    "Bei Schmerzen oder Kontrollverlust abbrechen."
            },

            {
                id: "low-side-kick",
                name: "Low Side Kick",
                focus: "Technik + Hüftkontrolle",
                sets: "3–4 Sätze",
                reps: "5 pro Seite",
                rest: "60–90 Sek.",
                intensity: "Moderat",
                execution:
                    "Kontrollierten Side Kick auf niedriger Höhe ausführen.",
                note:
                    "Technik und Kontrolle sind wichtiger als Höhe.",
                stop:
                    "Bei Schmerzen sofort abbrechen."
            },

            {
                id: "takeoff-drill",
                name: "Takeoff Drill",
                focus: "Absprungmechanik",
                sets: "3 Sätze",
                reps: "5",
                rest: "90 Sek.",
                intensity: "Moderat",
                execution:
                    "Einzelne Absprungbewegungen mit Fokus auf Timing und Körperposition ausführen.",
                note:
                    "Noch keine maximale Trickintensität.",
                stop:
                    "Bei unsicherem Absprung oder Schmerzen abbrechen."
            },

            {
                id: "combination",
                name: "Controlled Combination",
                focus: "Technik + Übergänge",
                sets: "3–5 Durchgänge",
                reps: "20–30 Sek.",
                rest: "90 Sek.",
                intensity: "Moderat",
                execution:
                    "Bekannte Bewegungen kontrolliert miteinander verbinden.",
                note:
                    "Keine neuen maximalen Tricks erzwingen.",
                stop:
                    "Wenn Technik oder Kontrolle deutlich schlechter werden."
            },

            {
                id: "next-day-check",
                name: "Next-Day Check",
                focus: "Belastungsverträglichkeit",
                sets: "1 Check",
                reps: "Am Folgetag",
                rest: "—",
                intensity: "Beobachtung",
                execution:
                    "Am nächsten Tag prüfen, wie Hüfte und Beine auf die Belastung reagieren.",
                note:
                    "Neue oder deutlich verstärkte Beschwerden sind ein Signal, die Belastung anzupassen.",
                stop:
                    "Bei deutlicher Verschlechterung Training reduzieren und professionell abklären lassen."
            }

        ]
    }

];


/*
|--------------------------------------------------------------------------
| STORAGE FUNKTIONEN
|--------------------------------------------------------------------------
*/

function readStorage(key, fallback) {

    try {

        const value = localStorage.getItem(key);

        if (value === null) {
            return fallback;
        }

        return JSON.parse(value);

    } catch (error) {

        console.error(
            `Fehler beim Lesen von ${key}:`,
            error
        );

        return fallback;
    }
}


function writeStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.error(
            `Fehler beim Speichern von ${key}:`,
            error
        );
    }
}


function getProgress() {

    return readStorage(
        PROGRESS_KEY,
        {}
    );
}


function getOpenSections() {

    return readStorage(
        OPEN_SECTIONS_KEY,
        []
    );
}


/*
|--------------------------------------------------------------------------
| HEUTIGER TAG
|--------------------------------------------------------------------------
*/

function getTodaySchedule() {

    const today = new Date().getDay();

    return weeklySchedule.find(
        trainingDay => trainingDay.day === today
    );
}


/*
|--------------------------------------------------------------------------
| SCHEDULE STATUS
|--------------------------------------------------------------------------
*/

function getScheduleStatus(trainingDay) {

    const today = new Date().getDay();

    if (trainingDay.day === today) {
        return "today";
    }

    return "";
}


/*
|--------------------------------------------------------------------------
| SCHEDULE CARD
|--------------------------------------------------------------------------
*/

function createScheduleCard(trainingDay) {

    const status =
        getScheduleStatus(trainingDay);

    const isRestDay =
        trainingDay.category === "rest";

    return `

        <button
            class="schedule-card ${status} ${isRestDay ? "rest-day" : ""}"
            type="button"
            data-day="${trainingDay.day}"
        >

            <div class="schedule-day">
                ${trainingDay.shortName}
            </div>

            <div
                class="schedule-icon"
                aria-hidden="true"
            >
                ${trainingDay.icon}
            </div>

            <div class="schedule-information">

                <strong>
                    ${trainingDay.title}
                </strong>

                <span>
                    ${trainingDay.focus}
                </span>

            </div>

            ${
                status === "today"
                    ? `
                        <span class="schedule-today">
                            HEUTE
                        </span>
                    `
                    : ""
            }

        </button>

    `;
}


/*
|--------------------------------------------------------------------------
| WOCHENPLAN RENDERN
|--------------------------------------------------------------------------
*/

function renderWeeklySchedule() {

    const container =
        document.getElementById(
            "weeklySchedule"
        );

    const todayLabel =
        document.getElementById(
            "todayLabel"
        );

    if (!container) {
        return;
    }

    const today =
        getTodaySchedule();

    container.innerHTML =
        weeklySchedule
            .map(createScheduleCard)
            .join("");


    if (todayLabel && today) {

        if (today.category === "rest") {

            todayLabel.textContent =
                "Heute: Frei";

        } else {

            todayLabel.textContent =
                `Heute: ${today.title}`;
        }
    }


    document
        .querySelectorAll(".schedule-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const day =
                        Number(
                            card.dataset.day
                        );

                    const selectedDay =
                        weeklySchedule.find(
                            trainingDay =>
                                trainingDay.day === day
                        );

                    if (!selectedDay) {
                        return;
                    }

                    activeDay = day;

                    renderTodayWorkout(
                        selectedDay
                    );

                    if (
                        selectedDay.category !==
                        "rest"
                    ) {

                        const firstSection =
                            selectedDay.sections[0];

                        if (firstSection) {

                            activeFilter =
                                firstSection;

                            document
                                .querySelectorAll(
                                    ".filter-button"
                                )
                                .forEach(button => {

                                    button.classList.toggle(
                                        "active",
                                        button.dataset.filter ===
                                            activeFilter
                                    );

                                });

                            renderApp();
                        }
                    }

                    document
                        .getElementById(
                            "todayWorkout"
                        )
                        ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                }
            );

        });
}


/*
|--------------------------------------------------------------------------
| HEUTIGES TRAINING
|--------------------------------------------------------------------------
*/

function renderTodayWorkout(trainingDay) {

    const container =
        document.getElementById(
            "todayWorkout"
        );

    if (!container) {
        return;
    }


    if (
        !trainingDay ||
        trainingDay.category === "rest"
    ) {

        container.innerHTML = `

            <div class="today-workout-card rest-workout">

                <div class="today-workout-header">

                    <div>

                        <p class="eyebrow">
                            ${trainingDay?.name || "Heute"}
                        </p>

                        <h2>
                            💤 Ruhetag
                        </h2>

                    </div>

                    <span class="workout-status">
                        REGENERATION
                    </span>

                </div>

                <p>
                    Heute steht kein Training auf dem Plan.
                    Nutze den Tag für Erholung und Regeneration.
                </p>

            </div>

        `;

        return;
    }


    const exerciseMap = {};

    trainingData.forEach(section => {

        section.exercises.forEach(
            exercise => {

                exerciseMap[
                    exercise.id
                ] = {
                    ...exercise,
                    sectionId:
                        section.id,
                    sectionTitle:
                        section.title,
                    sectionIcon:
                        section.icon
                };

            }
        );

    });


    const exercises =
        trainingDay.exercises
            .map(
                id => exerciseMap[id]
            )
            .filter(Boolean);


    container.innerHTML = `

        <div class="today-workout-card">

            <div class="today-workout-header">

                <div>

                    <p class="eyebrow">
                        ${trainingDay.name}
                    </p>

                    <h2>
                        ${trainingDay.icon}
                        ${trainingDay.title}
                    </h2>

                    <p class="today-workout-focus">
                        ${trainingDay.focus}
                    </p>

                </div>

                <span class="workout-status">
                    HEUTE
                </span>

            </div>


            <div class="today-exercise-list">

                ${exercises
                    .map(
                        (
                            exercise,
                            index
                        ) => `

                            <div class="today-exercise">

                                <div class="today-exercise-number">
                                    ${index + 1}
                                </div>

                                <div class="today-exercise-information">

                                    <strong>
                                        ${exercise.name}
                                    </strong>

                                    <span>
                                        ${exercise.sets}
                                        ·
                                        ${exercise.reps}
                                        ·
                                        ${exercise.rest}
                                    </span>

                                </div>

                            </div>

                        `
                    )
                    .join("")}

            </div>


            <p class="today-workout-note">

                💡 <strong>Regel:</strong>
                Bei Kraftübungen etwa 1–2 Wiederholungen
                im Tank lassen. Bei Sprüngen und explosiven
                Bewegungen aufhören, sobald die Qualität
                deutlich nachlässt.

            </p>

        </div>

    `;
}


/*
|--------------------------------------------------------------------------
| SICHTBARE SEKTIONEN
|--------------------------------------------------------------------------
*/

function getVisibleSections() {

    if (activeFilter === "all") {

        return trainingData;
    }

    return trainingData.filter(
        section =>
            section.category ===
            activeFilter
    );
}


/*
|--------------------------------------------------------------------------
| FORTSCHRITT
|--------------------------------------------------------------------------
*/

function calculateProgress() {

    const progress =
        getProgress();

    let total = 0;
    let completed = 0;

    trainingData.forEach(section => {

        section.exercises.forEach(
            exercise => {

                total++;

                if (
                    progress[
                        exercise.id
                    ] === true
                ) {

                    completed++;
                }

            }
        );

    });


    const percentage =
        total === 0
            ? 0
            : Math.round(
                  (completed / total) *
                      100
              );

    return {
        total,
        completed,
        percentage
    };
}


/*
|--------------------------------------------------------------------------
| ÜBUNGSKARTE
|--------------------------------------------------------------------------
*/

function createExerciseCard(
    exercise,
    progress
) {

    const completed =
        progress[
            exercise.id
        ] === true;


    return `

        <article
            class="exercise-card ${
                completed
                    ? "completed"
                    : ""
            }"
        >

            <div class="exercise-header">

                <label class="exercise-checkbox">

                    <input
                        type="checkbox"
                        data-exercise-id="${exercise.id}"
                        ${
                            completed
                                ? "checked"
                                : ""
                        }
                    >

                    <span class="custom-checkbox"></span>

                </label>


                <button
                    class="exercise-toggle"
                    type="button"
                    aria-expanded="false"
                >

                    <div class="exercise-title-area">

                        <h3>
                            ${exercise.name}
                        </h3>

                        <p>
                            ${exercise.focus}
                        </p>

                    </div>

                    <span
                        class="exercise-arrow"
                        aria-hidden="true"
                    >
                        ↓
                    </span>

                </button>

            </div>


            <div
                class="exercise-content"
                hidden
            >

                <div class="exercise-values">

                    <div class="value-block">

                        <span class="value-label">
                            Sätze
                        </span>

                        <strong>
                            ${exercise.sets}
                        </strong>

                    </div>


                    <div class="value-block">

                        <span class="value-label">
                            Wiederholungen
                        </span>

                        <strong>
                            ${exercise.reps}
                        </strong>

                    </div>


                    <div class="value-block">

                        <span class="value-label">
                            Pause
                        </span>

                        <strong>
                            ${exercise.rest}
                        </strong>

                    </div>


                    <div class="value-block">

                        <span class="value-label">
                            Intensität
                        </span>

                        <strong>
                            ${exercise.intensity}
                        </strong>

                    </div>

                </div>


                <div class="instruction-block">

                    <h4>
                        Ausführung
                    </h4>

                    <p>
                        ${exercise.execution}
                    </p>

                </div>


                <div class="note-block">

                    <h4>
                        💡 Hinweis
                    </h4>

                    <p>
                        ${exercise.note}
                    </p>

                </div>


                <div class="stop-block">

                    <h4>
                        ⚠️ Stopp-Signal
                    </h4>

                    <p>
                        ${exercise.stop}
                    </p>

                </div>

            </div>

        </article>

    `;
}


/*
|--------------------------------------------------------------------------
| TRAININGSSEKTION
|--------------------------------------------------------------------------
*/

function createTrainingSection(
    section,
    progress,
    openSections
) {

    const isOpen =
        openSections.includes(
            section.id
        );


    const completedCount =
        section.exercises.filter(
            exercise =>
                progress[
                    exercise.id
                ] === true
        ).length;


    return `

        <section
            class="training-section ${
                isOpen ? "open" : ""
            }"
            data-section-id="${section.id}"
        >

            <button
                class="training-section-header"
                type="button"
                aria-expanded="${
                    isOpen ? "true" : "false"
                }"
            >

                <div class="section-icon">
                    ${section.icon}
                </div>


                <div class="section-heading-content">

                    <span class="section-number">
                        ${section.number}
                    </span>

                    <h2>
                        ${section.title}
                    </h2>

                    <p>
                        ${section.subtitle}
                    </p>

                </div>


                <div class="section-progress">

                    <span>
                        ${completedCount}/${
                            section.exercises.length
                        }
                    </span>

                    <span
                        class="section-arrow"
                        aria-hidden="true"
                    >
                        ↓
                    </span>

                </div>

            </button>


            <div
                class="training-section-content"
                ${
                    isOpen
                        ? ""
                        : "hidden"
                }
            >

                <div class="exercise-list">

                    ${section.exercises
                        .map(
                            exercise =>
                                createExerciseCard(
                                    exercise,
                                    progress
                                )
                        )
                        .join("")}

                </div>

            </div>

        </section>

    `;
}


/*
|--------------------------------------------------------------------------
| APP RENDERN
|--------------------------------------------------------------------------
*/

function renderApp() {

    const app =
        document.getElementById(
            "trainingApp"
        );

    if (!app) {
        return;
    }


    const progress =
        getProgress();

    const openSections =
        getOpenSections();

    const visibleSections =
        getVisibleSections();


    app.innerHTML =
        visibleSections
            .map(
                section =>
                    createTrainingSection(
                        section,
                        progress,
                        openSections
                    )
            )
            .join("");


    updateProgressDisplay();

    initializeDynamicEvents();

    renderWeeklySchedule();


    if (activeDay !== null) {

        const selectedDay =
            weeklySchedule.find(
                trainingDay =>
                    trainingDay.day ===
                    activeDay
            );

        if (selectedDay) {

            renderTodayWorkout(
                selectedDay
            );
        }

    } else {

        renderTodayWorkout(
            getTodaySchedule()
        );

    }
}


/*
|--------------------------------------------------------------------------
| FORTSCHRITT ANZEIGEN
|--------------------------------------------------------------------------
*/

function updateProgressDisplay() {

    const progress =
        calculateProgress();


    const percentageElement =
        document.getElementById(
            "progressPercentage"
        );

    const textElement =
        document.getElementById(
            "progressText"
        );

    const fillElement =
        document.getElementById(
            "progressFill"
        );

    const progressBar =
        document.querySelector(
            ".progress-bar"
        );


    if (percentageElement) {

        percentageElement.textContent =
            `${progress.percentage}%`;

    }


    if (textElement) {

        textElement.textContent =
            `${progress.completed} von ${progress.total} Übungen abgeschlossen`;

    }


    if (fillElement) {

        fillElement.style.width =
            `${progress.percentage}%`;

    }


    if (progressBar) {

        progressBar.setAttribute(
            "aria-valuenow",
            progress.percentage
        );

    }
}


/*
|--------------------------------------------------------------------------
| DYNAMISCHE EVENTS
|--------------------------------------------------------------------------
*/

function initializeDynamicEvents() {


    /*
    |----------------------------------------------------------------------
    | SEKTIONEN
    |----------------------------------------------------------------------
    */

    document
        .querySelectorAll(
            ".training-section-header"
        )
        .forEach(header => {

            header.addEventListener(
                "click",
                () => {

                    const section =
                        header.closest(
                            ".training-section"
                        );

                    if (!section) {
                        return;
                    }


                    const sectionId =
                        section.dataset.sectionId;

                    const content =
                        section.querySelector(
                            ".training-section-content"
                        );

                    const isOpen =
                        section.classList.toggle(
                            "open"
                        );


                    header.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );


                    if (content) {

                        content.hidden =
                            !isOpen;

                    }


                    let openSections =
                        getOpenSections();


                    if (isOpen) {

                        if (
                            !openSections.includes(
                                sectionId
                            )
                        ) {

                            openSections.push(
                                sectionId
                            );

                        }

                    } else {

                        openSections =
                            openSections.filter(
                                id =>
                                    id !==
                                    sectionId
                            );

                    }


                    writeStorage(
                        OPEN_SECTIONS_KEY,
                        openSections
                    );

                }
            );

        });


    /*
    |----------------------------------------------------------------------
    | ÜBUNGSDETAILS
    |----------------------------------------------------------------------
    */

    document
        .querySelectorAll(
            ".exercise-toggle"
        )
        .forEach(toggle => {

            toggle.addEventListener(
                "click",
                () => {

                    const card =
                        toggle.closest(
                            ".exercise-card"
                        );

                    if (!card) {
                        return;
                    }


                    const content =
                        card.querySelector(
                            ".exercise-content"
                        );

                    if (!content) {
                        return;
                    }


                    const isOpen =
                        !content.hidden;

                    content.hidden =
                        isOpen;

                    toggle.setAttribute(
                        "aria-expanded",
                        String(!isOpen)
                    );


                    card.classList.toggle(
                        "open",
                        !isOpen
                    );

                }
            );

        });


    /*
    |----------------------------------------------------------------------
    | CHECKBOXEN
    |----------------------------------------------------------------------
    */

    document
        .querySelectorAll(
            ".exercise-checkbox input"
        )
        .forEach(checkbox => {

            checkbox.addEventListener(
                "change",
                () => {

                    const exerciseId =
                        checkbox.dataset.exerciseId;

                    if (!exerciseId) {
                        return;
                    }


                    const progress =
                        getProgress();


                    progress[
                        exerciseId
                    ] =
                        checkbox.checked;


                    writeStorage(
                        PROGRESS_KEY,
                        progress
                    );


                    renderApp();

                }
            );

        });

}


/*
|--------------------------------------------------------------------------
| STATISCHE EVENTS
|--------------------------------------------------------------------------
*/

function initializeStaticEvents() {


    /*
    |----------------------------------------------------------------------
    | FILTER
    |----------------------------------------------------------------------
    */

    document
        .querySelectorAll(
            ".filter-button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    activeFilter =
                        button.dataset.filter;

                    activeDay = null;


                    document
                        .querySelectorAll(
                            ".filter-button"
                        )
                        .forEach(
                            filterButton => {

                                filterButton.classList.toggle(
                                    "active",
                                    filterButton.dataset.filter ===
                                        activeFilter
                                );

                            }
                        );


                    renderApp();


                    document
                        .getElementById(
                            "trainingApp"
                        )
                        ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                }
            );

        });


    /*
    |----------------------------------------------------------------------
    | ALLE ÖFFNEN
    |----------------------------------------------------------------------
    */

    const openAllButton =
        document.getElementById(
            "openAllButton"
        );


    if (openAllButton) {

        openAllButton.addEventListener(
            "click",
            () => {

                const visibleSections =
                    getVisibleSections();

                const openSections =
                    visibleSections.map(
                        section =>
                            section.id
                    );


                writeStorage(
                    OPEN_SECTIONS_KEY,
                    openSections
                );


                renderApp();

            }
        );

    }


    /*
    |----------------------------------------------------------------------
    | ALLE SCHLIESSEN
    |----------------------------------------------------------------------
    */

    const closeAllButton =
        document.getElementById(
            "closeAllButton"
        );


    if (closeAllButton) {

        closeAllButton.addEventListener(
            "click",
            () => {

                writeStorage(
                    OPEN_SECTIONS_KEY,
                    []
                );

                renderApp();

            }
        );

    }


    /*
    |----------------------------------------------------------------------
    | RESET
    |----------------------------------------------------------------------
    */

    const resetButton =
        document.getElementById(
            "resetButton"
        );


    if (resetButton) {

        resetButton.addEventListener(
            "click",
            () => {

                const confirmed =
                    window.confirm(
                        "Möchtest du deinen gesamten Fortschritt wirklich zurücksetzen?"
                    );


                if (!confirmed) {
                    return;
                }


                localStorage.removeItem(
                    PROGRESS_KEY
                );

                localStorage.removeItem(
                    OPEN_SECTIONS_KEY
                );


                renderApp();

            }
        );

    }

}


/*
|--------------------------------------------------------------------------
| START
|--------------------------------------------------------------------------
*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeStaticEvents();

        renderApp();

    }
);
