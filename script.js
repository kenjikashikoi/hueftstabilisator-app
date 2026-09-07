"use strict";

/* =========================================================
   SPEICHERUNG
========================================================= */

const PROGRESS_KEY = "trickingPerformanceProgressV1";
const OPEN_SECTIONS_KEY = "trickingOpenSectionsV1";

let activeFilter = "all";

/* =========================================================
   TRAININGSDATEN
========================================================= */

const trainingData = [
    {
        id: "hip",
        category: "hip",
        number: "Bereich 1",
        icon: "🦴",
        title: "Hüftstabilität und Belastbarkeit",
        subtitle: "2 bis 3 Einheiten pro Woche",
        description:
            "Kontrollierte Kraft für Becken, Gesäß, Adduktoren und Hüftrotation. Diese Übungen bilden die Grundlage für stärkere Kicks und einbeinige Take-offs.",
        exercises: [
            {
                id: "single-leg-bridge",
                name: "Single-Leg Bridge",
                focus: "Gesäß und Beckenkontrolle",
                sets: "3",
                reps: "6 bis 10 pro Seite",
                rest: "60 bis 90 Sekunden",
                intensity: "Moderat",
                execution:
                    "Hebe das Becken aus der Rückenlage an. Löse einen Fuß leicht vom Boden, ohne das Becken zu verdrehen. Senke das Becken kontrolliert und drücke es über die Ferse wieder hoch.",
                note:
                    "Wenn das Becken seitlich absinkt, verwende zunächst eine Bridge March.",
                stop:
                    "Bei stechendem Schmerz vorne, seitlich oder tief in der Hüfte zur normalen Glute Bridge zurückkehren."
            },
            {
                id: "banded-walk",
                name: "Banded Walks",
                focus: "Gluteus medius und Beckenstabilität",
                sets: "2 bis 3",
                reps: "10 bis 15 Schritte pro Richtung",
                rest: "45 bis 60 Sekunden",
                intensity: "Leicht bis moderat",
                execution:
                    "Lege ein leichtes Miniband oberhalb der Knie an. Gehe leicht in die Knie und führe kleine kontrollierte Schritte seitwärts aus.",
                note:
                    "Als Aktivierung vor Kraft- oder Sprungeinheiten verwenden. Es handelt sich nicht um die Hauptkraftübung.",
                stop:
                    "Schrittlänge oder Bandstärke reduzieren, wenn der bekannte Hüftschmerz beginnt."
            },
            {
                id: "hip-airplane",
                name: "Unterstütztes Hip Airplane",
                focus: "Rotation und Standbeinkontrolle",
                sets: "2 bis 3",
                reps: "4 bis 6 pro Seite",
                rest: "60 Sekunden",
                intensity: "Moderat",
                execution:
                    "Halte dich an einer stabilen Fläche fest. Stehe auf einem Bein, neige den Oberkörper leicht vor und öffne sowie schließe das Becken langsam.",
                note:
                    "Beginne mit einem kleinen Bewegungsradius. Kontrolle ist wichtiger als maximale Öffnung.",
                stop:
                    "Nicht durch einen stechenden Punkt rotieren."
            },
            {
                id: "side-plank",
                name: "Side Plank",
                focus: "Core und seitliche Hüfte",
                sets: "3",
                reps: "20 bis 35 Sekunden pro Seite",
                rest: "45 bis 60 Sekunden",
                intensity: "Moderat",
                execution:
                    "Stütze dich seitlich auf dem Unterarm ab und hebe das Becken. Halte Schulter, Hüfte und Knie beziehungsweise Füße in einer stabilen Linie.",
                note:
                    "Beginne bei Bedarf mit gebeugten Knien.",
                stop:
                    "Bei tiefem Hüft- oder Leistenschmerz kontrolliert absetzen."
            },
            {
                id: "copenhagen",
                name: "Copenhagen Plank, kurzer Hebel",
                focus: "Adduktoren und Core",
                sets: "2 bis 3",
                reps: "10 bis 20 Sekunden pro Seite",
                rest: "60 bis 90 Sekunden",
                intensity: "Moderat",
                execution:
                    "Lege das obere Knie auf eine stabile gepolsterte Fläche. Stütze dich auf dem Unterarm ab und hebe das Becken.",
                note:
                    "Das untere Bein darf zunächst leicht unterstützen.",
                stop:
                    "Bei stechendem Leisten- oder Hüftschmerz sofort absetzen."
            },
            {
                id: "dead-bug",
                name: "Dead Bug mit Fersentipp",
                focus: "Core und Beckenkontrolle",
                sets: "3",
                reps: "8 bis 10 pro Seite",
                rest: "45 bis 60 Sekunden",
                intensity: "Moderat",
                execution:
                    "Halte Hüfte und Knie ungefähr bei 90 Grad. Senke abwechselnd eine Ferse langsam zum Boden, ohne dass Rücken oder Becken ausweichen.",
                note:
                    "Verkürze den Bewegungsweg, wenn Druck in der Hüfte entsteht.",
                stop:
                    "Keinen stechenden Hüftschmerz akzeptieren."
            }
        ]
    },
    {
        id: "mobility",
        category: "mobility",
        number: "Bereich 2",
        icon: "🧘",
        title: "Aktive Range und Beweglichkeit",
        subtitle: "3 bis 5 kurze Einheiten pro Woche",
        description:
            "Der Schwerpunkt liegt auf aktiver, kontrollierbarer Beweglichkeit. Passive Endpositionen werden nicht aggressiv erzwungen.",
        exercises: [
            {
                id: "hip-cars",
                name: "Standing Hip CARs",
                focus: "Aktive Hüftbeweglichkeit",
                sets: "2",
                reps: "3 langsame Kreise je Richtung",
                rest: "30 Sekunden",
                intensity: "Leicht",
                execution:
                    "Halte dich an einer Wand fest. Hebe das Knie, führe es kontrolliert seitlich und anschließend nach hinten. Becken und Oberkörper bleiben möglichst ruhig.",
                note:
                    "Ein kleiner sauberer Kreis ist besser als ein großer Kreis mit Ausweichbewegung.",
                stop:
                    "Die Bewegung vor dem bekannten stechenden Punkt umkehren."
            },
            {
                id: "seated-internal-rotation",
                name: "Sitzende Hüftinnenrotation",
                focus: "Aktive Innenrotation",
                sets: "3",
                reps: "6 bis 10 pro Seite",
                rest: "30 bis 45 Sekunden",
                intensity: "Leicht",
                execution:
                    "Setze dich auf eine Stuhlkante. Bewege einen Fuß langsam nach außen, während das Knie möglichst an seiner Position bleibt.",
                note:
                    "Nutze zunächst nur einen schmerzarmen Bewegungsbereich.",
                stop:
                    "Beim stechenden Schmerz sofort kontrolliert zurückkehren."
            },
            {
                id: "pancake-lifts",
                name: "Active Pancake Lifts",
                focus: "Aktive Kompression und Kick-Range",
                sets: "3",
                reps: "6 bis 10",
                rest: "45 bis 60 Sekunden",
                intensity: "Leicht bis moderat",
                execution:
                    "Sitze mit angenehm geöffneten Beinen. Drücke die Hände vor dir in den Boden und versuche, eine Ferse oder beide Fersen kurz kontrolliert anzuheben.",
                note:
                    "Die Beine dürfen weniger weit geöffnet sein. Nicht in einen maximalen Spagat zwingen.",
                stop:
                    "Bei tiefem Hüftschmerz die Beinöffnung und Hebehöhe reduzieren."
            },
            {
                id: "cossack-squat",
                name: "Unterstützter Cossack Squat",
                focus: "Adduktorenkraft und seitliche Range",
                sets: "2 bis 3",
                reps: "5 bis 8 pro Seite",
                rest: "60 Sekunden",
                intensity: "Leicht",
                execution:
                    "Stelle die Füße breit auf. Verlagere das Gewicht langsam auf eine Seite und halte dich bei Bedarf fest. Arbeite nur in einem kontrollierbaren Bereich.",
                note:
                    "Noch kein hohes Zusatzgewicht und keine maximale Tiefe verwenden.",
                stop:
                    "Vor einem stechenden Hüft- oder Leistenschmerz umkehren."
            },
            {
                id: "hamstring-floss",
                name: "Aktiver Hamstring Sweep",
                focus: "Dynamische Beinrückseite",
                sets: "2",
                reps: "8 pro Seite",
                rest: "Nach Bedarf",
                intensity: "Leicht",
                execution:
                    "Stelle eine Ferse leicht nach vorne. Schiebe das Becken zurück und führe die Hände kontrolliert in Richtung Fuß. Kehre anschließend in den Stand zurück.",
                note:
                    "Nicht federn und nicht maximal in die Dehnung ziehen.",
                stop:
                    "Bei ausstrahlendem, stechendem oder nervenartigem Schmerz abbrechen."
            },
            {
                id: "side-leg-raise",
                name: "Aktives seitliches Beinheben im Stand",
                focus: "Abduktion und Kick-Range",
                sets: "3",
                reps: "6 bis 10 pro Seite",
                rest: "45 Sekunden",
                intensity: "Leicht bis moderat",
                execution:
                    "Halte dich fest und hebe das gestreckte Bein langsam seitlich an. Halte Becken und Oberkörper möglichst stabil.",
                note:
                    "Höhe ist weniger wichtig als aktive Kontrolle.",
                stop:
                    "Nicht wiederholt versuchen, den stechenden Punkt zu überwinden."
            }
        ]
    },
    {
        id: "strength",
        category: "strength",
        number: "Bereich 3",
        icon: "🏋️",
        title: "Maximalkraft",
        subtitle: "2 Einheiten pro Woche",
        description:
            "Stärkere Beine und eine stärkere Hüftstreckung erhöhen dein Potenzial für Sprungkraft. Die Sätze sollen technisch sauber bleiben und nicht bis zum Muskelversagen gehen.",
        exercises: [
            {
                id: "weighted-squat",
                name: "Squats mit Gewicht",
                focus: "Beidbeinige Maximalkraft",
                sets: "4",
                reps: "4 bis 6",
                rest: "2 bis 3 Minuten",
                intensity: "Schwer, 2 Wiederholungen im Tank",
                execution:
                    "Beuge Knie und Hüfte kontrolliert. Halte die Füße stabil und drücke dich kraftvoll nach oben. Verwende nur eine schmerzfrei kontrollierbare Tiefe.",
                note:
                    "Steigere das Gewicht erst, wenn alle Wiederholungen stabil und technisch sauber sind.",
                stop:
                    "Bei stechendem Hüftschmerz Tiefe oder Gewicht reduzieren."
            },
            {
                id: "bulgarian-split-squat",
                name: "Bulgarian Split Squat",
                focus: "Einbeinige Kraft",
                sets: "3",
                reps: "6 bis 8 pro Seite",
                rest: "90 bis 120 Sekunden",
                intensity: "Moderat bis schwer",
                execution:
                    "Stelle den hinteren Fuß erhöht ab. Senke dich kontrolliert und drücke dich kraftvoll über das vordere Bein nach oben.",
                note:
                    "Beginne mit einer niedrigen Erhöhung und moderater Tiefe.",
                stop:
                    "Bei Hüftschmerz die Tiefe verkleinern oder einen normalen Split Squat verwenden."
            },
            {
                id: "single-leg-rdl",
                name: "Single-Leg Romanian Deadlift",
                focus: "Gesäß, Hamstrings und Fußstabilität",
                sets: "3",
                reps: "6 bis 8 pro Seite",
                rest: "90 Sekunden",
                intensity: "Moderat",
                execution:
                    "Stehe auf einem Bein, schiebe das Becken nach hinten und neige den Oberkörper kontrolliert nach vorne. Das freie Bein bewegt sich nach hinten.",
                note:
                    "Das Becken bleibt möglichst gerade. Halte dich bei Bedarf leicht fest.",
                stop:
                    "Bewegungsweg reduzieren, wenn das Becken ausweicht oder Hüftschmerz entsteht."
            },
            {
                id: "calf-raises",
                name: "Standing Calf Raises",
                focus: "Wadenkraft und Sprunggelenk",
                sets: "4",
                reps: "8 bis 12",
                rest: "60 bis 90 Sekunden",
                intensity: "Moderat bis schwer",
                execution:
                    "Senke die Ferse kontrolliert ab. Drücke dich anschließend vollständig und kraftvoll auf den Fußballen.",
                note:
                    "Nutze eine kontrollierte volle Bewegungsamplitude, ohne am oberen Punkt zu wippen.",
                stop:
                    "Bei Achillessehnen- oder Fußschmerz Belastung reduzieren."
            },
            {
                id: "soleus-raises",
                name: "Bent-Knee Calf Raises",
                focus: "Soleus und Take-off-Belastbarkeit",
                sets: "3",
                reps: "10 bis 15",
                rest: "60 Sekunden",
                intensity: "Moderat",
                execution:
                    "Halte die Knie leicht gebeugt und führe kontrollierte Wadenheben aus. Die Knieposition bleibt während des Satzes stabil.",
                note:
                    "Die Übung kann an einer Wand oder sitzend mit Gewicht durchgeführt werden.",
                stop:
                    "Bei Schmerzen in Achillessehne oder Sprunggelenk abbrechen."
            }
        ]
    },
    {
        id: "power",
        category: "power",
        number: "Bereich 4",
        icon: "🚀",
        title: "Vertikale Sprungkraft",
        subtitle: "2 Einheiten pro Woche mit mindestens 48 Stunden Abstand",
        description:
            "Jede Wiederholung soll explosiv sein. Keine Sprünge bis zur Erschöpfung. Lange Pausen sind beabsichtigt, damit die Sprungqualität hoch bleibt.",
        exercises: [
            {
                id: "countermovement-jump",
                name: "Countermovement Jumps",
                focus: "Maximale beidbeinige Sprunghöhe",
                sets: "4",
                reps: "3",
                rest: "90 bis 120 Sekunden",
                intensity: "Maximal explosiv",
                execution:
                    "Gehe schnell, aber kontrolliert in eine kurze Ausholbewegung und springe anschließend maximal hoch. Lande weich und stabil.",
                note:
                    "Jede Wiederholung einzeln vorbereiten. Kein schnelles Durchspringen.",
                stop:
                    "Beenden, wenn die Sprunghöhe oder Landekontrolle sichtbar abnimmt."
            },
            {
                id: "box-jump",
                name: "Box Jumps",
                focus: "Beidbeinige Explosivität",
                sets: "4",
                reps: "3",
                rest: "90 bis 120 Sekunden",
                intensity: "Explosiv",
                execution:
                    "Springe explosiv auf eine stabile Box. Lande leise und kontrolliert. Steige anschließend herunter.",
                note:
                    "Die Boxhöhe darf nicht dazu führen, dass du die Knie extrem zur Brust ziehen musst.",
                stop:
                    "Nicht von der Box herunterspringen. Bei unsicherer Landung Boxhöhe reduzieren."
            },
            {
                id: "explosive-step-up",
                name: "Explosive Step-ups",
                focus: "Einbeinige vertikale Explosivität",
                sets: "3",
                reps: "4 bis 5 pro Seite",
                rest: "90 Sekunden",
                intensity: "Explosiv",
                execution:
                    "Stelle einen Fuß vollständig auf eine stabile Erhöhung. Drücke dich explosiv über das obere Bein nach oben und führe das freie Knie nach vorne.",
                note:
                    "Vermeide starkes Abdrücken mit dem unteren Bein. Langsam und kontrolliert absteigen.",
                stop:
                    "Bei Hüftschmerz eine niedrigere Stufe wählen oder die Übung pausieren."
            },
            {
                id: "explosive-skips",
                name: "Explosive Skips",
                focus: "Einbeiniger Rhythmus und Hüftstreckung",
                sets: "3",
                reps: "8 bis 10 Kontakte pro Seite",
                rest: "60 bis 90 Sekunden",
                intensity: "Explosiv",
                execution:
                    "Drücke dich bei jedem Skip kraftvoll über ein Bein nach oben. Führe das gegenüberliegende Knie explosiv nach vorne.",
                note:
                    "Ziel ist Höhe und Rhythmus, nicht maximale Geschwindigkeit nach vorne.",
                stop:
                    "Bei unsicherer Landung oder Hüftschmerz Intensität reduzieren."
            },
            {
                id: "pogos",
                name: "Pogo Jumps",
                focus: "Reaktivkraft und Fußgelenk",
                sets: "3",
                reps: "12 bis 20 Kontakte",
                rest: "60 bis 90 Sekunden",
                intensity: "Schnell und federnd",
                execution:
                    "Springe mit relativ gestreckten Knien kurz und schnell über die Fußballen. Halte die Bodenkontaktzeit kurz.",
                note:
                    "Beginne mit niedrigen Sprüngen und stabilen Fußachsen.",
                stop:
                    "Bei Beschwerden an Achillessehne, Fuß oder Knie abbrechen."
            },
            {
                id: "single-leg-pogos",
                name: "Unterstützte Single-Leg Pogos",
                focus: "Einbeinige Reaktivkraft",
                sets: "2 bis 3",
                reps: "8 bis 12 pro Seite",
                rest: "60 bis 90 Sekunden",
                intensity: "Leicht bis moderat",
                execution:
                    "Halte dich bei Bedarf leicht fest und führe kleine federnde Sprünge auf einem Bein aus.",
                note:
                    "Erst einsetzen, wenn zweibeinige Pogos und der Alltag gut vertragen werden.",
                stop:
                    "Bei Hüft-, Knie-, Fuß- oder Achillessehnenschmerz pausieren."
            },
            {
                id: "broad-jump",
                name: "Broad Jumps mit stabiler Landung",
                focus: "Horizontale Explosivität",
                sets: "3",
                reps: "3",
                rest: "90 bis 120 Sekunden",
                intensity: "Explosiv",
                execution:
                    "Springe beidbeinig kraftvoll nach vorne und lande kontrolliert auf beiden Füßen. Halte die Landung kurz stabil.",
                note:
                    "Diese Übung ergänzt die vertikalen Sprünge und trainiert die Kraftübertragung.",
                stop:
                    "Bei unsicherer Landung Distanz reduzieren."
            }
        ]
    },
    {
        id: "tricking",
        category: "tricking",
        number: "Bereich 5",
        icon: "🤸",
        title: "Return to Tricking",
        subtitle: "1 bis 2 kontrollierte Einheiten pro Woche",
        description:
            "Chamber, Kniestreckung, Kickhöhe und Geschwindigkeit werden getrennt aufgebaut. Explosive Kombinationen folgen zuletzt.",
        exercises: [
            {
                id: "chamber-hold",
                name: "Unterstützter Side-Chamber Hold",
                focus: "Side-Kick-Position",
                sets: "3",
                reps: "5 bis 10 Sekunden pro Seite",
                rest: "60 Sekunden",
                intensity: "Leicht bis moderat",
                execution:
                    "Halte dich fest und hebe das Knie in eine niedrige Side-Chamber-Position. Halte Standbein, Becken und Oberkörper kontrolliert.",
                note:
                    "Beginne deutlich unter deiner maximalen Kickhöhe.",
                stop:
                    "Abbrechen, wenn bereits die Chamber den stechenden Schmerz auslöst."
            },
            {
                id: "partial-extension",
                name: "Side-Chamber mit Teilstreckung",
                focus: "Kontrollierte Kickstreckung",
                sets: "3",
                reps: "4 bis 6 pro Seite",
                rest: "60 bis 90 Sekunden",
                intensity: "Leicht",
                execution:
                    "Gehe in eine niedrige Chamber. Strecke das Knie nur teilweise und kehre langsam in die Chamber zurück.",
                note:
                    "Keine schnelle Schnappbewegung verwenden.",
                stop:
                    "Die Streckung vor dem bekannten stechenden Punkt beenden."
            },
            {
                id: "low-side-kick",
                name: "Langsamer Low Side Kick",
                focus: "Kickkoordination",
                sets: "2 bis 3",
                reps: "3 bis 5 pro Seite",
                rest: "90 Sekunden",
                intensity: "Leicht",
                execution:
                    "Führe einen niedrigen Side Kick mit Festhalten aus. Chamber, Streckung und Rückführung erfolgen langsam und kontrolliert.",
                note:
                    "Erst einsetzen, wenn die Teilstreckung in mehreren Einheiten gut vertragen wurde.",
                stop:
                    "Bei Beschwerden zurück zur Teilstreckung wechseln."
            },
            {
                id: "takeoff-drill",
                name: "Einbeiniger Take-off Drill",
                focus: "Tricking-spezifischer Absprung",
                sets: "3",
                reps: "3 bis 5 pro Seite",
                rest: "90 bis 120 Sekunden",
                intensity: "Moderat",
                execution:
                    "Übe einen kontrollierten einbeinigen Absprung mit aktivem Armschwung und stabiler Landung. Verwende zunächst keine Rotation.",
                note:
                    "Die Absprunghöhe bleibt zunächst moderat.",
                stop:
                    "Bei Hüftschmerz, Kontrollverlust oder instabiler Landung abbrechen."
            },
            {
                id: "combination",
                name: "Einfache technische Kombination",
                focus: "Übertragung ins Tricking",
                sets: "2 bis 3",
                reps: "2 bis 3 Kombinationen",
                rest: "2 bis 3 Minuten",
                intensity: "Moderat",
                execution:
                    "Verbinde bereits sichere Elemente. Verwende keine neue Technik, keine maximale Kickhöhe und keine schwierige Landung.",
                note:
                    "Technikqualität hat Vorrang vor Anzahl der Versuche.",
                stop:
                    "Beenden, wenn Schonhaltungen, Schmerzen oder deutlicher Technikverlust auftreten."
            },
            {
                id: "next-day-check",
                name: "Folgetag-Check",
                focus: "Belastungssteuerung",
                sets: "1 Bewertung",
                reps: "Abends und am nächsten Morgen",
                rest: "Nicht erforderlich",
                intensity: "Kontrolle",
                execution:
                    "Bewerte Beschwerden vor dem Training, am Abend und am nächsten Morgen. Prüfe zusätzlich Alltag, Sitzen und normale Hüftbewegungen.",
                note:
                    "Bei einer deutlichen Verschlechterung in der nächsten Einheit eine Stufe zurückgehen.",
                stop:
                    "Bei anhaltender Verschlechterung Sprung- und Kicktraining pausieren und fachlich abklären lassen."
            }
        ]
    }
];

/* =========================================================
   SPEICHERFUNKTIONEN
========================================================= */

function readStorage(key) {
    try {
        const value = localStorage.getItem(key);

        if (!value) {
            return {};
        }

        const parsedValue = JSON.parse(value);

        if (
            typeof parsedValue !== "object" ||
            parsedValue === null ||
            Array.isArray(parsedValue)
        ) {
            return {};
        }

        return parsedValue;
    } catch (error) {
        console.error("Speicherdaten konnten nicht gelesen werden.", error);
        return {};
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Speicherdaten konnten nicht geschrieben werden.", error);
    }
}

function getProgress() {
    return readStorage(PROGRESS_KEY);
}

function getOpenSections() {
    return readStorage(OPEN_SECTIONS_KEY);
}

/* =========================================================
   BERECHNUNGEN
========================================================= */

function getVisibleSections() {
    if (activeFilter === "all") {
        return trainingData;
    }

    return trainingData.filter(
        section => section.category === activeFilter
    );
}

function calculateProgress() {
    const progress = getProgress();

    const exercises = trainingData.flatMap(
        section => section.exercises
    );

    const completed = exercises.filter(
        exercise => Boolean(progress[exercise.id])
    ).length;

    const total = exercises.length;

    return {
        completed,
        total,
        percentage:
            total === 0
                ? 0
                : Math.round((completed / total) * 100)
    };
}

/* =========================================================
   HTML ERZEUGEN
========================================================= */

function createExerciseCard(exercise, progress) {
    const isCompleted = Boolean(progress[exercise.id]);

    return `
        <article class="exercise-card ${isCompleted ? "completed" : ""}">
            <div class="exercise-header">
                <label
                    class="exercise-checkbox-label"
                    title="Übung als erledigt markieren"
                >
                    <input
                        class="exercise-checkbox"
                        type="checkbox"
                        data-exercise-id="${exercise.id}"
                        ${isCompleted ? "checked" : ""}
                    >

                    <span
                        class="custom-checkbox"
                        aria-hidden="true"
                    ></span>
                </label>

                <button
                    class="exercise-toggle"
                    type="button"
                    aria-expanded="false"
                >
                    <span class="exercise-title-container">
                        <span class="exercise-name">
                            ${exercise.name}
                        </span>

                        <span class="exercise-focus">
                            ${exercise.focus}
                        </span>
                    </span>

                    <span class="arrow" aria-hidden="true">
                        ▶
                    </span>
                </button>
            </div>

            <div class="exercise-content" hidden>
                <div class="exercise-values">
                    <div>
                        <span class="value-label">Sätze</span>
                        <span>${exercise.sets}</span>
                    </div>

                    <div>
                        <span class="value-label">
                            Wiederholungen
                        </span>
                        <span>${exercise.reps}</span>
                    </div>

                    <div>
                        <span class="value-label">Pause</span>
                        <span>${exercise.rest}</span>
                    </div>

                    <div>
                        <span class="value-label">Intensität</span>
                        <span>${exercise.intensity}</span>
                    </div>
                </div>

                <div class="instruction-block">
                    <h4>Ausführung</h4>
                    <p>${exercise.execution}</p>
                </div>

                <div class="instruction-block note-block">
                    <h4>Hinweis</h4>
                    <p>${exercise.note}</p>
                </div>

                <div class="instruction-block stop-block">
                    <h4>Stoppsignal</h4>
                    <p>${exercise.stop}</p>
                </div>
            </div>
        </article>
    `;
}

function createTrainingSection(section, progress, openSections) {
    const isOpen = Boolean(openSections[section.id]);

    const completed = section.exercises.filter(
        exercise => Boolean(progress[exercise.id])
    ).length;

    return `
        <article class="training-section">
            <button
                class="training-section-header"
                type="button"
                data-section-id="${section.id}"
                aria-expanded="${isOpen}"
            >
                <span class="section-heading-left">
                    <span class="section-icon" aria-hidden="true">
                        ${section.icon}
                    </span>

                    <span>
                        <span class="section-number">
                            ${section.number}
                        </span>

                        <span class="section-title">
                            ${section.title}
                        </span>

                        <span class="section-subtitle">
                            ${section.subtitle}
                        </span>
                    </span>
                </span>

                <span class="section-heading-right">
                    <span class="section-progress">
                        ${completed}/${section.exercises.length}
                    </span>

                    <span
                        class="section-arrow ${isOpen ? "open" : ""}"
                        aria-hidden="true"
                    >
                        ▶
                    </span>
                </span>
            </button>

            <div
                class="training-section-content"
                ${isOpen ? "" : "hidden"}
            >
                <p class="section-description">
                    ${section.description}
                </p>

                <div class="exercise-list">
                    ${section.exercises
                        .map(
                            exercise =>
                                createExerciseCard(exercise, progress)
                        )
                        .join("")}
                </div>
            </div>
        </article>
    `;
}

/* =========================================================
   APP RENDERN
========================================================= */

function renderApp() {
    const container = document.getElementById("trainingApp");

    if (!container) {
        return;
    }

    const progress = getProgress();
    const openSections = getOpenSections();
    const visibleSections = getVisibleSections();

    container.innerHTML = visibleSections
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
}

function updateProgressDisplay() {
    const result = calculateProgress();

    const percentageElement =
        document.getElementById("overallPercentage");

    const progressText =
        document.getElementById("progressText");

    const progressFill =
        document.getElementById("overallProgressFill");

    const progressBar =
        document.getElementById("overallProgressBar");

    if (percentageElement) {
        percentageElement.textContent =
            `${result.percentage} %`;
    }

    if (progressText) {
        progressText.textContent =
            `${result.completed} von ${result.total} Übungen erledigt`;
    }

    if (progressFill) {
        progressFill.style.width =
            `${result.percentage}%`;
    }

    if (progressBar) {
        progressBar.setAttribute(
            "aria-valuenow",
            String(result.percentage)
        );
    }
}

/* =========================================================
   EREIGNISSE
========================================================= */

function initializeDynamicEvents() {
    document
        .querySelectorAll(".training-section-header")
        .forEach(button => {
            button.addEventListener("click", () => {
                const sectionId = button.dataset.sectionId;
                const openSections = getOpenSections();

                openSections[sectionId] =
                    !Boolean(openSections[sectionId]);

                writeStorage(
                    OPEN_SECTIONS_KEY,
                    openSections
                );

                renderApp();
            });
        });

    document
        .querySelectorAll(".exercise-toggle")
        .forEach(button => {
            button.addEventListener("click", () => {
                const content =
                    button.closest(".exercise-card")
                        ?.querySelector(".exercise-content");

                if (!content) {
                    return;
                }

                const isOpen =
                    button.getAttribute("aria-expanded") === "true";

                button.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

                button.classList.toggle("open", !isOpen);
                content.hidden = isOpen;
            });
        });

    document
        .querySelectorAll(".exercise-checkbox")
        .forEach(checkbox => {
            checkbox.addEventListener("change", () => {
                const progress = getProgress();
                const exerciseId = checkbox.dataset.exerciseId;

                progress[exerciseId] = checkbox.checked;

                writeStorage(PROGRESS_KEY, progress);
                renderApp();
            });
        });
}

function initializeStaticEvents() {
    document
        .querySelectorAll(".filter-button")
        .forEach(button => {
            button.addEventListener("click", () => {
                activeFilter = button.dataset.filter;

                document
                    .querySelectorAll(".filter-button")
                    .forEach(filterButton => {
                        filterButton.classList.remove("active");
                    });

                button.classList.add("active");
                renderApp();
            });
        });

    document
        .getElementById("openAllButton")
        ?.addEventListener("click", () => {
            const openSections = {};

            getVisibleSections().forEach(section => {
                openSections[section.id] = true;
            });

            writeStorage(
                OPEN_SECTIONS_KEY,
                openSections
            );

            renderApp();
        });

    document
        .getElementById("closeAllButton")
        ?.addEventListener("click", () => {
            writeStorage(
                OPEN_SECTIONS_KEY,
                {}
            );

            renderApp();
        });

    document
        .getElementById("resetButton")
        ?.addEventListener("click", () => {
            const shouldReset = window.confirm(
                "Möchtest du den gesamten Fortschritt wirklich zurücksetzen?"
            );

            if (!shouldReset) {
                return;
            }

            localStorage.removeItem(PROGRESS_KEY);
            localStorage.removeItem(OPEN_SECTIONS_KEY);

            renderApp();
        });
}

/* =========================================================
   START
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeStaticEvents();
    renderApp();
});
