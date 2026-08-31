"use strict";

/* =========================================================
   FORTGESCHRITTENER HÜFT-TRAININGSPLAN

   Schwerpunkte:
   - Einbeinige Hüftstabilität
   - Aktive Rotationskontrolle
   - Adduktorenkraft
   - Kontrollierte Side-Kick-Streckung
   - Stufenweiser Return to Tricking

   Die erledigten Übungen und geöffneten Phasen werden
   automatisch im Browser gespeichert.
========================================================= */


/* =========================================================
   KONFIGURATION
========================================================= */

const PROGRESS_STORAGE_KEY = "advancedHipTrainingProgressV3";
const OPEN_PHASES_STORAGE_KEY = "advancedHipOpenPhasesV3";


/* =========================================================
   TRAININGSDATEN
========================================================= */

const phaseData = [
    {
        phase: "Phase 1",
        title: "Fortgeschrittene Kraftbasis",
        duration: "Mindestens 2 Wochen",
        status: "Einstieg nach den bisherigen Grundübungen",

        goal:
            "Die bisherige Grundaktivierung auf kontrollierte einbeinige Kraft, Beckenstabilität und seitliche Hüftkontrolle übertragen.",

        description:
            "Diese Phase baut auf Glute Bridge, Clamshell, seitlichem Beinheben und Balanceübungen auf. Die Belastung wird anspruchsvoller, bleibt aber außerhalb der Positionen, die deinen tiefen stechenden Hüftschmerz auslösen.",

        entryCriteria: [
            "Die normale Glute Bridge ist kontrolliert möglich.",
            "Clamshells und seitliches Beinheben verursachen keinen stechenden Schmerz.",
            "Gehen und Treppensteigen sind weiterhin unauffällig.",
            "Am Morgen nach dem Training besteht keine deutliche Verschlechterung."
        ],

        rules: [
            "Vor dem Training 5 bis 10 Minuten locker gehen oder leicht Rad fahren.",
            "Alle Wiederholungen langsam und ohne Schwung ausführen.",
            "Keinen stechenden oder tiefen Gelenkschmerz akzeptieren.",
            "Den Bewegungsradius verkleinern, sobald der bekannte Schmerz beginnt.",
            "Zwischen Krafteinheiten mindestens einen Erholungstag einplanen.",
            "Nicht gleichzeitig Widerstand, Wiederholungen und Bewegungsradius erhöhen."
        ],

        avoid: [
            "Figure-4-Position aktiv nach unten drücken.",
            "Aggressives Dehnen in der 90/90-Position.",
            "Maximalen Spagat ausprobieren.",
            "Explosive Side Kicks.",
            "Sehr tiefe Bulgarian Split Squats.",
            "Training durch den bekannten stechenden Hüftschmerz."
        ],

        exercises: [
            {
                name: "Single-Leg Bridge",
                area: "Gesäß und Beckenstabilität",
                frequency: "3-mal pro Woche",
                sets: "3 Sätze pro Seite",
                reps: "6 bis 10 Wiederholungen",
                intensity: "Moderat",
                rest: "60 bis 90 Sekunden",

                execution:
                    "Lege dich auf den Rücken und stelle beide Füße auf. Hebe das Becken an. Hebe anschließend einen Fuß leicht vom Boden ab, ohne das Becken zu verdrehen. Senke das Becken kontrolliert ab und drücke es über die Ferse des Standbeins wieder nach oben.",

                notes:
                    "Wenn das Becken seitlich absinkt, beginne mit einer kleinen Bridge March. Die Belastung soll hauptsächlich im Gesäß und nicht tief vorne in der Hüfte spürbar sein.",

                stopCriteria:
                    "Abbrechen oder zur normalen Glute Bridge zurückkehren, wenn vorne oder außen tief in der Hüfte ein stechender Schmerz entsteht."
            },

            {
                name: "Split Squat mit Unterstützung",
                area: "Gesäß, Oberschenkel und Becken",
                frequency: "2 bis 3-mal pro Woche",
                sets: "3 Sätze pro Seite",
                reps: "6 bis 10 Wiederholungen",
                intensity: "Leicht bis moderat",
                rest: "60 bis 90 Sekunden",

                execution:
                    "Stelle einen Fuß nach vorne und den anderen nach hinten. Halte dich bei Bedarf an einer Wand oder einer stabilen Stuhllehne fest. Senke den Körper langsam ab. Drücke dich anschließend kontrolliert über den vorderen Fuß wieder nach oben.",

                notes:
                    "Beginne mit einem kleinen Bewegungsradius. Erhöhe zunächst langsam die Tiefe und erst später den Widerstand.",

                stopCriteria:
                    "Nicht weiter absenken, wenn vorne oder seitlich in der Hüfte ein stechender Schmerz beginnt."
            },

            {
                name: "Lateral Band Walk",
                area: "Seitliche Hüfte und Gluteus medius",
                frequency: "3-mal pro Woche",
                sets: "3 Sätze",
                reps: "8 bis 12 Schritte pro Richtung",
                intensity: "Moderat",
                rest: "45 bis 60 Sekunden",

                execution:
                    "Lege ein leichtes Miniband oberhalb der Knie an. Beuge die Knie leicht und halte die Füße ungefähr parallel. Mache kleine kontrollierte Schritte zur Seite. Becken und Oberkörper bleiben möglichst ruhig.",

                notes:
                    "Das Band oberhalb der Knie ist zunächst meist besser kontrollierbar als ein Band an den Knöcheln.",

                stopCriteria:
                    "Bandstärke oder Schrittlänge reduzieren, wenn der bekannte tiefe Hüftschmerz auftritt."
            },

            {
                name: "Step-down von niedriger Stufe",
                area: "Einbeinige Hüft- und Beinkontrolle",
                frequency: "2 bis 3-mal pro Woche",
                sets: "3 Sätze pro Seite",
                reps: "6 bis 8 Wiederholungen",
                intensity: "Leicht bis moderat",
                rest: "60 Sekunden",

                execution:
                    "Stelle dich mit einem Bein auf eine niedrige Stufe. Senke die freie Ferse langsam in Richtung Boden. Das Knie des Standbeins folgt ungefähr der Richtung des zweiten Zehs. Drücke dich anschließend wieder kontrolliert nach oben.",

                notes:
                    "Verwende anfangs eine sehr niedrige Stufe und halte dich bei Bedarf fest. Qualität und Beckenkontrolle sind wichtiger als Tiefe.",

                stopCriteria:
                    "Abbrechen, wenn das Becken stark ausweicht oder der bekannte Hüftschmerz entsteht."
            },

            {
                name: "Side Plank mit gebeugten Knien",
                area: "Core und seitliche Hüftstabilität",
                frequency: "3-mal pro Woche",
                sets: "3 Sätze pro Seite",
                reps: "20 bis 35 Sekunden halten",
                intensity: "Moderat",
                rest: "45 bis 60 Sekunden",

                execution:
                    "Lege dich auf die Seite und stütze dich auf dem Unterarm ab. Die Knie bleiben gebeugt. Hebe das Becken an, bis Schulter, Hüfte und Knie eine stabile Linie bilden.",

                notes:
                    "Steigere zuerst die Haltezeit. Die Variante mit gestreckten Beinen folgt erst, wenn diese Ausführung sicher beherrscht wird.",

                stopCriteria:
                    "Abbrechen, wenn der Schmerz tief in die Hüfte oder in die Leistenregion zieht."
            },

            {
                name: "Dead Bug mit Fersentipp",
                area: "Core und Beckenkontrolle",
                frequency: "3-mal pro Woche",
                sets: "3 Sätze",
                reps: "8 bis 10 Wiederholungen pro Seite",
                intensity: "Moderat",
                rest: "45 bis 60 Sekunden",

                execution:
                    "Lege dich auf den Rücken. Hüfte und Knie befinden sich ungefähr in einem 90-Grad-Winkel. Senke abwechselnd eine Ferse langsam zum Boden und bringe das Bein kontrolliert zurück. Rücken und Becken bleiben ruhig.",

                notes:
                    "Verkürze den Bewegungsweg, wenn das Halten der Beine unangenehmen Druck in der Hüfte erzeugt.",

                stopCriteria:
                    "Abbrechen, wenn das Halten oder Absenken den bekannten stechenden Schmerz hervorruft."
            }
        ],

        progression: [
            "Alle Übungen können technisch sauber ausgeführt werden.",
            "Während der Übungen entsteht kein stechender Gelenkschmerz.",
            "Am nächsten Morgen besteht keine deutliche Verschlechterung.",
            "Die Belastung wurde mindestens zwei Einheiten hintereinander gut vertragen."
        ],

        weeklyNotes: [
            "Figure-4, 90/90 und Spagat nicht täglich als Schmerztest verwenden.",
            "Ein schmerzfreier Alltag bedeutet nicht automatisch, dass maximale Kickpositionen belastbar sind.",
            "Wenn nur eine einzelne Übung reizt, muss nicht automatisch der gesamte Plan pausiert werden.",
            "Die problematische Übung kann zunächst leichter ausgeführt oder ersetzt werden."
        ]
    },

    {
        phase: "Phase 2",
        title: "Rotation und aktive Kontrolle",
        duration: "Mindestens 2 bis 3 Wochen",
        status: "Nach gut verträglicher Phase 1",

        goal:
            "Aktive Innen- und Außenrotation aufbauen, ohne die schmerzhafte Endposition passiv zu erzwingen.",

        description:
            "Da Figure-4, 90/90 und Spagat bei dir Beschwerden auslösen, wird die Hüftrotation kontrolliert und zunächst in einem verkleinerten Bewegungsbereich trainiert. Ziel ist aktive Kontrolle und nicht maximale passive Beweglichkeit.",

        entryCriteria: [
            "Phase 1 wurde mindestens zwei Wochen durchgeführt.",
            "Single-Leg Bridges sind ohne deutliche Beckendrehung möglich.",
            "Split Squats und Step-downs werden gut vertragen.",
            "Die Hüfte ist nach dem Training und am Folgetag nicht deutlich gereizter."
        ],

        rules: [
            "Rotation nur im aktuell kontrollierbaren Bereich durchführen.",
            "Endpositionen nicht mit den Händen oder dem Körpergewicht erzwingen.",
            "Langsame Bewegungen und kurze isometrische Haltephasen verwenden.",
            "Zwischen anspruchsvollen Rotationseinheiten einen Erholungstag einplanen.",
            "Bei stechendem Schmerz den Bewegungsradius sofort reduzieren."
        ],

        avoid: [
            "Das Knie in der Figure-4-Position nach unten drücken.",
            "Vollständiges Hineinhängen in die 90/90-Position.",
            "Schnelles Umschlagen der Knie von einer Seite zur anderen.",
            "Partnerdehnung.",
            "Maximalen Middle Split.",
            "Hohe Side Kicks mit vollständiger Kniestreckung."
        ],

        exercises: [
            {
                name: "Unterstütztes Hip Airplane",
                area: "Hüftrotation, Standbein und Becken",
                frequency: "2 bis 3-mal pro Woche",
                sets: "2 bis 3 Sätze pro Seite",
                reps: "4 bis 6 langsame Wiederholungen",
                intensity: "Moderat",
                rest: "60 bis 90 Sekunden",

                execution:
                    "Halte dich mit beiden Händen an einer stabilen Fläche fest. Verlagere das Gewicht auf ein Bein und neige den Oberkörper leicht nach vorne. Öffne und schließe das Becken langsam in einem kleinen Bewegungsbereich. Das Standbein bleibt stabil.",

                notes:
                    "Beginne mit einer sehr kleinen Rotationsbewegung. Das Ziel ist kontrollierte Bewegung und nicht maximale Hüftöffnung.",

                stopCriteria:
                    "Abbrechen, wenn beim Öffnen ein stechender Schmerz vorne oder seitlich in der Hüfte entsteht."
            },

            {
                name: "Erhöhte 90/90-Isometrik",
                area: "Aktive Innen- und Außenrotation",
                frequency: "2 bis 3-mal pro Woche",
                sets: "3 Durchgänge pro Seite",
                reps: "8 bis 15 Sekunden halten",
                intensity: "Leicht",
                rest: "30 bis 45 Sekunden",

                execution:
                    "Setze dich in eine vereinfachte 90/90-Position. Unterstütze die Knie bei Bedarf mit Kissen oder Yoga-Blöcken. Drücke das vordere und hintere Bein jeweils sehr leicht gegen die Unterlage, ohne eine sichtbare Bewegung auszuführen.",

                notes:
                    "Die Unterlagen verhindern, dass die Hüfte passiv in die schmerzhafte Endposition fällt. Entferne sie nur schrittweise.",

                stopCriteria:
                    "Die Übung nicht durchführen, wenn bereits die entspannte Ausgangsposition stechend schmerzt."
            },

            {
                name: "Sitzende Hüftinnenrotation",
                area: "Aktive Hüftinnenrotation",
                frequency: "2 bis 3-mal pro Woche",
                sets: "3 Sätze pro Seite",
                reps: "6 bis 10 Wiederholungen",
                intensity: "Leicht",
                rest: "45 Sekunden",

                execution:
                    "Setze dich auf die Vorderkante eines stabilen Stuhls. Knie und Füße bleiben ungefähr hüftbreit. Bewege einen Fuß langsam nach außen, während das Knie möglichst an derselben Position bleibt. Kehre anschließend kontrolliert zurück.",

                notes:
                    "Die Bewegung des Fußes nach außen erzeugt eine Innenrotation in der Hüfte. Verwende nur einen kleinen und schmerzarmen Bereich.",

                stopCriteria:
                    "Beim bekannten stechenden Schmerz sofort kontrolliert in die Ausgangsposition zurückkehren."
            },

            {
                name: "Sitzende Außenrotations-Isometrik",
                area: "Aktive Hüftaußenrotation",
                frequency: "2 bis 3-mal pro Woche",
                sets: "3 Sätze pro Seite",
                reps: "10 bis 15 Sekunden halten",
                intensity: "Leicht",
                rest: "30 bis 45 Sekunden",

                execution:
                    "Setze dich aufrecht auf einen stabilen Stuhl. Drücke die Außenseite des Fußes leicht gegen einen festen Widerstand. Das Bein bewegt sich dabei nicht sichtbar. Knie und Becken bleiben ruhig.",

                notes:
                    "Das Bein muss hierfür nicht in die schmerzhafte Figure-4-Position gebracht werden.",

                stopCriteria:
                    "Abbrechen, wenn die Muskelanspannung den tiefen Hüftschmerz provoziert."
            },

            {
                name: "Copenhagen Plank mit kurzem Hebel",
                area: "Adduktoren, Core und Becken",
                frequency: "2-mal pro Woche",
                sets: "2 bis 3 Sätze pro Seite",
                reps: "10 bis 20 Sekunden halten",
                intensity: "Moderat",
                rest: "60 bis 90 Sekunden",

                execution:
                    "Lege das obere Knie auf eine stabile gepolsterte Sitzfläche. Stütze den Oberkörper auf dem Unterarm ab und hebe das Becken kontrolliert an. Das untere Bein darf den Boden zunächst leicht unterstützen.",

                notes:
                    "Beginne mit dem Knie als Auflagepunkt. Die deutlich schwierigere Variante mit dem Fuß als Auflage ist zunächst nicht erforderlich.",

                stopCriteria:
                    "Bei stechendem Leisten- oder Hüftschmerz sofort kontrolliert absetzen."
            },

            {
                name: "Standing Hip CAR",
                area: "Aktive Hüftbeweglichkeit",
                frequency: "3 bis 5-mal pro Woche",
                sets: "1 bis 2 Sätze pro Seite",
                reps: "3 bis 5 langsame Kreise je Richtung",
                intensity: "Leicht",
                rest: "Nach Bedarf",

                execution:
                    "Halte dich an einer Wand fest. Hebe das Knie langsam an, führe es kontrolliert leicht zur Seite und anschließend nach hinten. Kehre den Bewegungsweg langsam um. Becken und Oberkörper bewegen sich möglichst wenig.",

                notes:
                    "Der Kreis muss nicht groß sein. Führe die Bewegung nur in dem aktuell kontrollierbaren Bereich aus.",

                stopCriteria:
                    "Die Bewegung vor dem stechenden Punkt umkehren und nicht durch den Schmerz weiterkreisen."
            },

            {
                name: "Aktives seitliches Beinheben im Stand",
                area: "Abduktoren und Side-Kick-Grundposition",
                frequency: "2 bis 3-mal pro Woche",
                sets: "3 Sätze pro Seite",
                reps: "6 bis 10 Wiederholungen",
                intensity: "Leicht bis moderat",
                rest: "45 bis 60 Sekunden",

                execution:
                    "Halte dich an einer Wand oder einer stabilen Stuhllehne fest. Hebe das gestreckte Bein langsam zur Seite. Fuß und Knie bleiben in einer angenehmen Ausrichtung. Senke das Bein anschließend langsam wieder ab.",

                notes:
                    "Kein Schwung und kein starkes seitliches Wegkippen des Oberkörpers. Die Bewegungshöhe ist weniger wichtig als die Kontrolle.",

                stopCriteria:
                    "Nicht versuchen, den schmerzhaften Punkt wiederholt zu überwinden."
            }
        ],

        progression: [
            "Hip Airplanes sind in einem kleinen Bereich kontrolliert möglich.",
            "Die erhöhte 90/90-Isometrik verursacht keine Folgetag-Reizung.",
            "Aktives seitliches Beinheben ist ohne stechenden Schmerz möglich.",
            "Die Rotationsübungen wurden mindestens zwei Wochen gut vertragen."
        ],

        weeklyNotes: [
            "Passive Beweglichkeit und aktive Kontrolle sind nicht dasselbe.",
            "Fortschritt wird an Kontrolle und Verträglichkeit gemessen.",
            "Die Figure-4-Position muss nicht täglich als Test verwendet werden.",
            "Bei zunehmendem tiefem Gelenkschmerz sollte die Phase pausiert werden."
        ]
    },

    {
        phase: "Phase 3",
        title: "Side-Kick-Vorbereitung",
        duration: "Mindestens 2 bis 3 Wochen",
        status: "Nach gut verträglicher Rotationsphase",

        goal:
            "Die Chamber-Position und die anschließende Kniestreckung langsam, niedrig und unterstützt wieder aufbauen.",

        description:
            "Da das Anheben der Hüfte bei deinem Side Kick relativ gut funktioniert, während die Streckung des Beins Beschwerden auslöst, werden Chamber und Kniestreckung zunächst getrennt trainiert.",

        entryCriteria: [
            "Aktives seitliches Beinheben ist schmerzarm möglich.",
            "Unterstützte Hip Airplanes können kontrolliert ausgeführt werden.",
            "Die Rotationsübungen verschlechtern die Symptome am Folgetag nicht.",
            "Der Copenhagen Plank mit kurzem Hebel wird gut vertragen."
        ],

        rules: [
            "Kickübungen zunächst immer mit Festhalten durchführen.",
            "Die Kickhöhe deutlich unterhalb der Schmerzgrenze wählen.",
            "Zuerst die Chamber kontrollieren und erst danach das Knie strecken.",
            "Keine schnelle oder explosive Schnappbewegung verwenden.",
            "Pro Woche nur eine Belastungsvariable erhöhen.",
            "Mindestens 48 Stunden zwischen Kickeinheiten einplanen."
        ],

        avoid: [
            "Maximale Kickhöhe.",
            "Explosive Kniestreckung.",
            "Kicks in Verbindung mit Sprüngen.",
            "Tricking-Kombinationen unter Ermüdung.",
            "Mehrere neue Kickvarianten gleichzeitig.",
            "Training bei einer deutlichen Folgetag-Reizung."
        ],

        exercises: [
            {
                name: "Unterstützter Side-Chamber Hold",
                area: "Side-Kick-Position und Hüftstabilität",
                frequency: "2-mal pro Woche",
                sets: "3 Sätze pro Seite",
                reps: "5 bis 10 Sekunden halten",
                intensity: "Leicht bis moderat",
                rest: "60 Sekunden",

                execution:
                    "Halte dich mit beiden Händen an einer stabilen Fläche fest. Hebe das Knie langsam in eine niedrige Side-Chamber-Position. Standbein, Becken und Oberkörper bleiben kontrolliert. Setze das Bein anschließend langsam ab.",

                notes:
                    "Beginne deutlich unter deiner normalen Kickhöhe. Die Chamber-Position darf nicht in eine maximale Rotation erzwungen werden.",

                stopCriteria:
                    "Abbrechen, wenn bereits die niedrige Chamber-Position den bekannten stechenden Schmerz verursacht."
            },

            {
                name: "Side-Chamber mit Teilstreckung",
                area: "Kickstreckung und Hüftkontrolle",
                frequency: "2-mal pro Woche",
                sets: "2 bis 3 Sätze pro Seite",
                reps: "4 bis 6 langsame Wiederholungen",
                intensity: "Leicht",
                rest: "60 bis 90 Sekunden",

                execution:
                    "Gehe mit Festhalten in eine niedrige Chamber-Position. Strecke das Knie zunächst nur zu ungefähr einem Viertel oder zur Hälfte. Kehre langsam in die Chamber zurück und setze das Bein kontrolliert ab.",

                notes:
                    "Da genau die Streckung aktuell Beschwerden auslöst, ist der Bewegungsweg bewusst reduziert. Verwende keine schnelle Schnappbewegung.",

                stopCriteria:
                    "Die Streckung sofort beenden, wenn der bekannte Schmerz beginnt."
            },

            {
                name: "Isometrische Teilstreckung",
                area: "Kniestreckung in Side-Kick-Position",
                frequency: "2-mal pro Woche",
                sets: "3 Sätze pro Seite",
                reps: "5 bis 8 Sekunden halten",
                intensity: "Leicht",
                rest: "60 Sekunden",

                execution:
                    "Nimm eine niedrige unterstützte Chamber-Position ein. Strecke das Knie nur bis zu einem schmerzarmen Punkt und halte diese Position kurz. Kehre anschließend langsam in die Chamber zurück.",

                notes:
                    "Wähle anfangs einen kleinen Streckwinkel. Das Ziel ist eine kontrollierte Belastung ohne schnelle Bewegung.",

                stopCriteria:
                    "Keinen stechenden Schmerz während der Haltephase akzeptieren."
            },

            {
                name: "Langsamer Low Side Kick",
                area: "Sportartspezifische Koordination",
                frequency: "1 bis 2-mal pro Woche",
                sets: "2 Sätze pro Seite",
                reps: "3 bis 5 Wiederholungen",
                intensity: "Sehr leicht",
                rest: "90 Sekunden",

                execution:
                    "Führe einen niedrigen Side Kick mit Festhalten und sehr langsamer Geschwindigkeit aus. Chamber, Teilstreckung und Rückführung erfolgen kontrolliert. Setze das Bein nach jeder Wiederholung vollständig ab.",

                notes:
                    "Diese Übung erst verwenden, wenn die Teilstreckung in mehreren Einheiten gut vertragen wurde.",

                stopCriteria:
                    "Bei Beschwerden zurück zur Teilstreckung wechseln und die Kickhöhe reduzieren."
            },

            {
                name: "Einbeiniger Romanian Deadlift",
                area: "Standbein, Gesäß und hintere Kette",
                frequency: "2-mal pro Woche",
                sets: "3 Sätze pro Seite",
                reps: "6 bis 8 Wiederholungen",
                intensity: "Moderat",
                rest: "60 bis 90 Sekunden",

                execution:
                    "Halte dich bei Bedarf leicht an einer Wand fest. Verlagere das Gewicht auf ein Bein. Schiebe das Becken nach hinten und neige den Oberkörper kontrolliert nach vorne. Das freie Bein bewegt sich nach hinten. Kehre anschließend über das Gesäß des Standbeins zurück.",

                notes:
                    "Das Becken bleibt möglichst gerade. Diese Übung verbessert die Kontrolle des Standbeins während eines Kicks.",

                stopCriteria:
                    "Den Bewegungsweg verkürzen, wenn das Becken ausweicht oder Hüftschmerz entsteht."
            },

            {
                name: "Side Plank mit kleiner Abduktion",
                area: "Seitliche Hüfte und Core",
                frequency: "2-mal pro Woche",
                sets: "2 bis 3 Sätze pro Seite",
                reps: "6 bis 8 Wiederholungen",
                intensity: "Moderat",
                rest: "60 bis 90 Sekunden",

                execution:
                    "Gehe in einen Side Plank mit gebeugtem unteren Knie. Halte das Becken stabil und hebe das obere Bein nur wenige Zentimeter an. Senke das Bein anschließend langsam wieder ab.",

                notes:
                    "Das obere Bein muss nicht besonders hoch angehoben werden. Verhindere, dass sich das Becken nach hinten dreht.",

                stopCriteria:
                    "Bei tiefem seitlichem Hüftschmerz zur normalen Side-Plank-Variante zurückkehren."
            }
        ],

        progression: [
            "Die niedrige Chamber-Position kann mindestens 10 Sekunden gehalten werden.",
            "Die Teilstreckung ist langsam ohne stechenden Schmerz möglich.",
            "Niedrige Side Kicks verursachen keine deutliche Folgetag-Reizung.",
            "Die Kickhöhe wurde nicht auf Kosten der Kontrolle erhöht."
        ],

        weeklyNotes: [
            "Kicks werden zuerst langsam, anschließend etwas höher und zuletzt schneller.",
            "Nicht gleichzeitig Kickhöhe und Geschwindigkeit erhöhen.",
            "Wenn nur die Streckung schmerzt, kann die Chamber weiter trainiert werden.",
            "Ein schmerzarmer Low Kick ist noch keine Freigabe für explosive Tricking-Kombinationen."
        ]
    },

    {
        phase: "Phase 4",
        title: "Kontrollierter Return to Tricking",
        duration: "Offen und individuell",
        status: "Idealerweise nach Untersuchung oder therapeutischer Freigabe",

        goal:
            "Kickhöhe, Geschwindigkeit und sportartspezifische Belastung schrittweise wieder aufbauen.",

        description:
            "Diese Phase ist kein festes Wochenprogramm, sondern eine Belastungsleiter. Jede Stufe wird in mindestens zwei getrennten Einheiten getestet, bevor nur eine einzelne Variable erhöht wird.",

        entryCriteria: [
            "Niedrige Side Kicks sind kontrolliert und schmerzarm möglich.",
            "Am Folgetag besteht keine deutliche Verschlechterung.",
            "Einbeinige Kraftübungen sind stabil möglich.",
            "Die Kickstreckung kann langsam kontrolliert werden.",
            "Idealerweise wurde die Hüfte professionell untersucht."
        ],

        rules: [
            "Nur eine Belastungsvariable pro Trainingswoche steigern.",
            "Reihenfolge: Wiederholungen, danach Höhe, danach Geschwindigkeit.",
            "Sprünge und Kombinationen erst am Ende hinzufügen.",
            "Techniktraining vor deutlicher Ermüdung beenden.",
            "Mindestens 48 Stunden zwischen belastenden Kickeinheiten einhalten.",
            "Jede Einheit am Abend und am nächsten Morgen bewerten."
        ],

        avoid: [
            "Direkter Einstieg mit voller Kickhöhe.",
            "Explosive Side Kicks ohne vorherige langsame Stufen.",
            "Maximaler Spagat als Aufwärmübung.",
            "Viele Wiederholungen bis zur Erschöpfung.",
            "Mehrere neue Tricking-Bewegungen in derselben Einheit.",
            "Schmerzmittel verwenden, um trotz Schmerzen trainieren zu können."
        ],

        exercises: [
            {
                name: "Kick-Leiter Stufe 1",
                area: "Niedrige Technik",
                frequency: "1 bis 2-mal pro Woche",
                sets: "2 Sätze pro Seite",
                reps: "5 langsame Low Side Kicks",
                intensity: "Leicht",
                rest: "90 Sekunden",

                execution:
                    "Führe fünf niedrige und langsame Side Kicks mit vollständiger Kontrolle aus. Zwischen den Wiederholungen wird das Bein vollständig abgesetzt.",

                notes:
                    "Diese Stufe mindestens zwei Einheiten ohne deutliche Folgetag-Reizung durchführen.",

                stopCriteria:
                    "Bei stechendem Schmerz zur Teilstreckung aus Phase 3 zurückkehren."
            },

            {
                name: "Kick-Leiter Stufe 2",
                area: "Mittlere Kickhöhe",
                frequency: "1 bis 2-mal pro Woche",
                sets: "2 Sätze pro Seite",
                reps: "4 bis 5 Wiederholungen",
                intensity: "Leicht bis moderat",
                rest: "90 Sekunden",

                execution:
                    "Erhöhe die Kickhöhe geringfügig. Geschwindigkeit und Wiederholungszahl bleiben weiterhin niedrig. Jede Wiederholung beginnt und endet kontrolliert.",

                notes:
                    "Nur die Höhe wird erhöht. Verwende weiterhin keinen zusätzlichen Schwung.",

                stopCriteria:
                    "Zur vorherigen Höhe zurückkehren, wenn die Streckung wieder stechend schmerzt."
            },

            {
                name: "Kick-Leiter Stufe 3",
                area: "Moderate Geschwindigkeit",
                frequency: "1 bis 2-mal pro Woche",
                sets: "2 Sätze pro Seite",
                reps: "3 bis 5 Wiederholungen",
                intensity: "Moderat",
                rest: "90 bis 120 Sekunden",

                execution:
                    "Führe Side Kicks in der bisher gut verträglichen Höhe etwas flüssiger aus. Die Bewegung bleibt kontrolliert und wird noch nicht maximal explosiv.",

                notes:
                    "Die Geschwindigkeit erst erhöhen, wenn dieselbe Kickhöhe langsam und wiederholt vertragen wurde.",

                stopCriteria:
                    "Bei Kontrollverlust, Ausweichbewegung oder Schmerz die Geschwindigkeit wieder reduzieren."
            },

            {
                name: "Kick-Leiter Stufe 4",
                area: "Einfache Tricking-Kombination",
                frequency: "Zu Beginn maximal 1-mal pro Woche",
                sets: "2 kurze Durchgänge",
                reps: "2 bis 3 technische Kombinationen",
                intensity: "Moderat",
                rest: "2 bis 3 Minuten",

                execution:
                    "Verbinde den Side Kick mit einer einfachen und bereits vertrauten Bewegung. Verwende keine maximale Höhe, keine schwierige Landung und keine neue Technik.",

                notes:
                    "Komplexe Tricking-Kombinationen folgen erst, wenn einzelne Kicks zuverlässig vertragen werden.",

                stopCriteria:
                    "Die Kombination beenden, wenn sich die Technik durch Schonhaltung oder Schmerzen sichtbar verändert."
            },

            {
                name: "Folgetag-Check",
                area: "Belastungssteuerung",
                frequency: "Nach jeder Kick- oder Tricking-Einheit",
                sets: "Eine Bewertung",
                reps: "Am Abend und am nächsten Morgen",
                intensity: "Kontrolle",
                rest: "Nicht erforderlich",

                execution:
                    "Bewerte deinen Schmerz vor dem Training, am Abend und am nächsten Morgen auf einer Skala von 0 bis 10. Beobachte zusätzlich, ob Sitzen, Figure-4 oder normale Alltagsbewegungen schlechter geworden sind.",

                notes:
                    "Wenn der Schmerz am nächsten Morgen deutlich stärker ist oder länger anhält, gehe bei der nächsten Einheit eine Stufe zurück.",

                stopCriteria:
                    "Bei anhaltender Verschlechterung das Kicktraining pausieren und die Hüfte fachlich untersuchen lassen."
            }
        ],

        progression: [
            "Eine Stufe wurde in mindestens zwei getrennten Einheiten gut vertragen.",
            "Die Symptome sind am nächsten Morgen nicht deutlich stärker.",
            "Es entsteht keine Schon- oder Ausweichbewegung.",
            "Nur eine einzelne Belastungsvariable wird erhöht.",
            "Zwischen anspruchsvollen Einheiten liegt ausreichend Erholung."
        ],

        weeklyNotes: [
            "Return to Tricking ist eine Belastungsleiter und kein einzelner Testtag.",
            "Explosivität wird später als kontrollierte Kraft und Technik eingeführt.",
            "Spagat und maximale passive Beweglichkeit sind kein notwendiges Kriterium für die nächste Kickstufe.",
            "Bei stechenden oder zunehmenden Beschwerden ist eine professionelle Untersuchung wichtiger als die nächste Progression."
        ]
    }
];


/* =========================================================
   HILFSFUNKTIONEN FÜR LOCALSTORAGE
========================================================= */

function getStoredObject(storageKey) {
    try {
        const storedValue = localStorage.getItem(storageKey);

        if (!storedValue) {
            return {};
        }

        const parsedValue = JSON.parse(storedValue);

        if (
            typeof parsedValue !== "object" ||
            parsedValue === null ||
            Array.isArray(parsedValue)
        ) {
            return {};
        }

        return parsedValue;
    } catch (error) {
        console.error(
            `Die gespeicherten Daten "${storageKey}" konnten nicht gelesen werden:`,
            error
        );

        return {};
    }
}


function saveStoredObject(storageKey, value) {
    try {
        localStorage.setItem(
            storageKey,
            JSON.stringify(value)
        );
    } catch (error) {
        console.error(
            `Die Daten "${storageKey}" konnten nicht gespeichert werden:`,
            error
        );
    }
}


function getProgress() {
    return getStoredObject(PROGRESS_STORAGE_KEY);
}


function saveProgress(progress) {
    saveStoredObject(
        PROGRESS_STORAGE_KEY,
        progress
    );
}


function getOpenPhases() {
    return getStoredObject(OPEN_PHASES_STORAGE_KEY);
}


function saveOpenPhases(openPhases) {
    saveStoredObject(
        OPEN_PHASES_STORAGE_KEY,
        openPhases
    );
}


/* =========================================================
   FORTSCHRITT
========================================================= */

function createExerciseId(phaseIndex, exerciseIndex) {
    return `hip_phase_${phaseIndex}_exercise_${exerciseIndex}`;
}


function calculatePhaseProgress(
    phase,
    phaseIndex,
    progress
) {
    const totalExercises = phase.exercises.length;

    const completedExercises = phase.exercises.filter(
        (_, exerciseIndex) => {
            const exerciseId = createExerciseId(
                phaseIndex,
                exerciseIndex
            );

            return Boolean(progress[exerciseId]);
        }
    ).length;

    const percentage =
        totalExercises === 0
            ? 0
            : Math.round(
                (completedExercises / totalExercises) * 100
            );

    return {
        total: totalExercises,
        completed: completedExercises,
        percentage
    };
}


function calculateTotalProgress(progress) {
    let totalExercises = 0;
    let completedExercises = 0;

    phaseData.forEach((phase, phaseIndex) => {
        const phaseProgress = calculatePhaseProgress(
            phase,
            phaseIndex,
            progress
        );

        totalExercises += phaseProgress.total;
        completedExercises += phaseProgress.completed;
    });

    const percentage =
        totalExercises === 0
            ? 0
            : Math.round(
                (completedExercises / totalExercises) * 100
            );

    return {
        total: totalExercises,
        completed: completedExercises,
        percentage
    };
}


function toggleExercise(exerciseId) {
    const progress = getProgress();

    progress[exerciseId] = !progress[exerciseId];

    saveProgress(progress);
    renderApp();
}


function resetProgress() {
    const shouldReset = window.confirm(
        "Möchtest du den gesamten Trainingsfortschritt wirklich zurücksetzen?"
    );

    if (!shouldReset) {
        return;
    }

    localStorage.removeItem(PROGRESS_STORAGE_KEY);
    localStorage.removeItem(OPEN_PHASES_STORAGE_KEY);

    renderApp();
}


/* =========================================================
   HTML-ERZEUGUNG
========================================================= */

function createList(items) {
    return `
        <ul>
            ${items
                .map(item => `<li>${item}</li>`)
                .join("")}
        </ul>
    `;
}


function createCollapsibleSection(
    title,
    icon,
    content,
    openByDefault = false
) {
    return `
        <section class="section">
            <button
                class="section-toggle ${openByDefault ? "open" : ""}"
                type="button"
                aria-expanded="${openByDefault}"
            >
                <span class="section-toggle-title">
                    <span aria-hidden="true">${icon}</span>
                    <span>${title}</span>
                </span>

                <span class="arrow" aria-hidden="true">▶</span>
            </button>

            <div
                class="section-content"
                ${openByDefault ? "" : "hidden"}
            >
                ${content}
            </div>
        </section>
    `;
}


function createExerciseCard(
    exercise,
    phaseIndex,
    exerciseIndex,
    progress
) {
    const exerciseId = createExerciseId(
        phaseIndex,
        exerciseIndex
    );

    const isCompleted = Boolean(
        progress[exerciseId]
    );

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
                        data-exercise-id="${exerciseId}"
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

                        <span class="exercise-area">
                            ${exercise.area}
                        </span>
                    </span>

                    <span class="arrow" aria-hidden="true">▶</span>
                </button>
            </div>

            <div
                class="exercise-content"
                hidden
            >
                <div class="exercise-grid">
                    <div class="exercise-detail">
                        <span class="detail-label">Häufigkeit</span>
                        <span>${exercise.frequency}</span>
                    </div>

                    <div class="exercise-detail">
                        <span class="detail-label">Sätze</span>
                        <span>${exercise.sets}</span>
                    </div>

                    <div class="exercise-detail">
                        <span class="detail-label">
                            Dauer / Wiederholungen
                        </span>

                        <span>${exercise.reps}</span>
                    </div>

                    <div class="exercise-detail">
                        <span class="detail-label">Intensität</span>
                        <span>${exercise.intensity}</span>
                    </div>

                    <div class="exercise-detail">
                        <span class="detail-label">Pause</span>
                        <span>${exercise.rest}</span>
                    </div>
                </div>

                <div class="instruction-block">
                    <h4>Ausführung</h4>
                    <p>${exercise.execution}</p>
                </div>

                <div class="instruction-block note-block">
                    <h4>Bemerkung</h4>
                    <p>${exercise.notes}</p>
                </div>

                <div class="instruction-block stop-block">
                    <h4>Stoppsignal</h4>
                    <p>${exercise.stopCriteria}</p>
                </div>
            </div>
        </article>
    `;
}


/* =========================================================
   APP RENDERN
========================================================= */

const appContainer = document.getElementById("week");


function renderApp() {
    if (!appContainer) {
        console.info(
            "Auf dieser Seite wurde kein Element mit der ID 'week' gefunden."
        );

        return;
    }

    const progress = getProgress();
    const openPhases = getOpenPhases();
    const totalProgress = calculateTotalProgress(progress);

    appContainer.innerHTML = "";

    renderOverview(totalProgress);
    renderPhases(progress, openPhases);

    initializeEventListeners();
}


function renderOverview(totalProgress) {
    const overviewElement = document.createElement("section");

    overviewElement.className = "overview-card";

    overviewElement.innerHTML = `
        <div class="overview-heading">
            <div>
                <p class="eyebrow">Gesamtfortschritt</p>
                <h2>Trainingsübersicht</h2>
            </div>

            <span class="overall-percentage">
                ${totalProgress.percentage}%
            </span>
        </div>

        <div class="progress-wrapper">
            <div class="progress-text">
                <span>
                    ${totalProgress.completed}
                    von
                    ${totalProgress.total}
                    Übungen abgeschlossen
                </span>

                <span>
                    ${totalProgress.percentage}%
                </span>
            </div>

            <div
                class="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="${totalProgress.percentage}"
            >
                <div
                    class="progress-fill"
                    style="width: ${totalProgress.percentage}%"
                ></div>
            </div>
        </div>

        <div class="global-warning">
            <span aria-hidden="true">⚠️</span>

            <p>
                Nutze die Übungen nicht als Schmerztest. Wenn der
                stechende Schmerz zunimmt, im Alltag auftritt oder am
                Folgetag deutlich stärker bleibt, reduziere die Belastung.
            </p>
        </div>

        <div class="overview-actions">
            <button
                id="openAllPhases"
                class="secondary-button"
                type="button"
            >
                Alle Phasen öffnen
            </button>

            <button
                id="closeAllPhases"
                class="secondary-button"
                type="button"
            >
                Alle Phasen schließen
            </button>

            <button
                id="resetProgress"
                class="danger-button"
                type="button"
            >
                Fortschritt zurücksetzen
            </button>
        </div>
    `;

    appContainer.appendChild(overviewElement);
}


function renderPhases(progress, openPhases) {
    phaseData.forEach((phase, phaseIndex) => {
        const phaseProgress = calculatePhaseProgress(
            phase,
            phaseIndex,
            progress
        );

        const isPhaseOpen = Boolean(
            openPhases[phaseIndex]
        );

        const phaseElement = document.createElement("article");

        phaseElement.className = "phase-card";

        phaseElement.innerHTML = `
            <button
                class="phase-header"
                type="button"
                data-phase-index="${phaseIndex}"
                aria-expanded="${isPhaseOpen}"
            >
                <span class="phase-heading-content">
                    <span class="phase-number">
                        ${phase.phase}
                    </span>

                    <span class="phase-title-group">
                        <span class="phase-title">
                            ${phase.title}
                        </span>

                        <span class="phase-duration">
                            ${phase.duration}
                        </span>
                    </span>
                </span>

                <span class="phase-header-right">
                    <span class="phase-status">
                        ${phaseProgress.completed}/${phaseProgress.total}
                    </span>

                    <span
                        class="phase-arrow ${isPhaseOpen ? "open" : ""}"
                        aria-hidden="true"
                    >
                        ▶
                    </span>
                </span>
            </button>

            <div
                class="phase-content"
                ${isPhaseOpen ? "" : "hidden"}
            >
                <div class="phase-summary">
                    <div class="summary-item">
                        <span class="summary-label">Status</span>
                        <span>${phase.status}</span>
                    </div>

                    <div class="summary-item">
                        <span class="summary-label">Dauer</span>
                        <span>${phase.duration}</span>
                    </div>

                    <div class="summary-item full-width">
                        <span class="summary-label">Ziel</span>
                        <span>${phase.goal}</span>
                    </div>

                    <div class="progress-wrapper">
                        <div class="progress-text">
                            <span>Fortschritt dieser Phase</span>
                            <span>${phaseProgress.percentage}%</span>
                        </div>

                        <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="${phaseProgress.percentage}"
                        >
                            <div
                                class="progress-fill"
                                style="width: ${phaseProgress.percentage}%"
                            ></div>
                        </div>
                    </div>
                </div>

                ${createCollapsibleSection(
                    "Beschreibung",
                    "📌",
                    `<p>${phase.description}</p>`,
                    true
                )}

                ${createCollapsibleSection(
                    "Voraussetzungen",
                    "🚦",
                    createList(phase.entryCriteria)
                )}

                ${createCollapsibleSection(
                    "Regeln für diese Phase",
                    "✅",
                    createList(phase.rules)
                )}

                ${createCollapsibleSection(
                    "Übungen",
                    "🏋️",
                    `
                        <div class="exercise-list">
                            ${phase.exercises
                                .map(
                                    (exercise, exerciseIndex) =>
                                        createExerciseCard(
                                            exercise,
                                            phaseIndex,
                                            exerciseIndex,
                                            progress
                                        )
                                )
                                .join("")}
                        </div>
                    `,
                    true
                )}

                ${createCollapsibleSection(
                    "Aktuell vermeiden",
                    "❌",
                    createList(phase.avoid)
                )}

                ${createCollapsibleSection(
                    "Kriterien für die nächste Phase",
                    "📈",
                    createList(phase.progression)
                )}

                ${createCollapsibleSection(
                    "Hinweise",
                    "📝",
                    createList(phase.weeklyNotes)
                )}
            </div>
        `;

        appContainer.appendChild(phaseElement);
    });
}


/* =========================================================
   EVENT-LISTENER
========================================================= */

function initializeEventListeners() {
    initializePhaseToggles();
    initializeSectionToggles();
    initializeExerciseToggles();
    initializeExerciseCheckboxes();
    initializeOverviewButtons();
}


function initializePhaseToggles() {
    const phaseHeaders =
        document.querySelectorAll(".phase-header");

    phaseHeaders.forEach(phaseHeader => {
        phaseHeader.addEventListener("click", () => {
            const phaseIndex = Number(
                phaseHeader.dataset.phaseIndex
            );

            const openPhases = getOpenPhases();

            openPhases[phaseIndex] =
                !Boolean(openPhases[phaseIndex]);

            saveOpenPhases(openPhases);
            renderApp();
        });
    });
}


function initializeSectionToggles() {
    const sectionToggles =
        document.querySelectorAll(".section-toggle");

    sectionToggles.forEach(sectionToggle => {
        sectionToggle.addEventListener("click", () => {
            const content =
                sectionToggle.nextElementSibling;

            if (!content) {
                return;
            }

            const isOpen =
                sectionToggle.getAttribute("aria-expanded") ===
                "true";

            sectionToggle.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

            sectionToggle.classList.toggle(
                "open",
            
