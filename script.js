const week = [
    {
        day: "Montag",
        nutrition: {
            meals: [
                "Frühstück: 3 Rühreier + 1 Scheibe Vollkornbrot",
                "Arbeit: Proteinreiche Mahlzeit",
                "Snack: Proteinriegel",
                "Abend: Skyr + Apfel"
            ],
            ingredients: [
                "Eier",
                "Vollkornbrot",
                "Skyr",
                "Apfel"
            ],
            cooking: [
                "Eier in beschichteter Pfanne ohne viel Öl stocken lassen",
                "Brot toasten",
                "Skyr mit Apfel mischen"
            ]
        }
    },
    {
        day: "Dienstag",
        nutrition: {
            meals: [
                "Frühstück: Skyr, Haferflocken, Banane",
                "Snack: Proteinriegel",
                "Hauptmahlzeit: Thunfisch-Zwiebel-Pasta",
                "Post-Workout: Banane oder Skyr"
            ],
            ingredients: [
                "Skyr",
                "Haferflocken",
                "Banane",
                "Vollkornnudeln",
                "Thunfisch",
                "Zwiebeln",
                "Magerquark"
            ],
            cooking: [
                "Nudeln kochen",
                "Zwiebeln anbraten",
                "Thunfisch unterheben",
                "Milch + Quark einrühren"
            ]
        }
    },
    {
        day: "Mittwoch",
        nutrition: {
            meals: [
                "Frühstück: 3 Rühreier + Brot",
                "Arbeit: Proteinreiche Mahlzeit",
                "Snack: Proteinriegel",
                "17 Uhr: kleine Portion Pasta",
                "Abend: Skyr (optional)"
            ],
            ingredients: [
                "Eier",
                "Brot",
                "Pasta-Reste",
                "Skyr"
            ],
            cooking: [
                "Rührei zubereiten",
                "Pasta aufwärmen",
                "Skyr kalt servieren"
            ]
        }
    },
    {
        day: "Donnerstag",
        nutrition: {
            meals: [
                "Frühstück: Skyr, Haferflocken, Banane",
                "Hauptmahlzeit: Chili-Hack-Reis",
                "Post-Workout: Banane oder Skyr"
            ],
            ingredients: [
                "Skyr",
                "Haferflocken",
                "Banane",
                "Reis",
                "Hackfleisch",
                "Kidneybohnen",
                "Tomaten"
            ],
            cooking: [
                "Reis kochen",
                "Hackfleisch anbraten",
                "Bohnen & Tomaten köcheln",
                "Mit Reis kombinieren"
            ]
        }
    },
    {
        day: "Freitag",
        nutrition: {
            meals: [
                "Frühstück: Skyr, Haferflocken, Banane",
                "Hauptmahlzeit: Chili-Hack-Reis",
                "Abend: Banane oder Skyr"
            ],
            ingredients: [
                "Skyr",
                "Haferflocken",
                "Banane",
                "Reis",
                "Hackfleisch",
                "Bohnen"
            ],
            cooking: [
                "Vorgekochtes Gericht aufwärmen",
                "Skyr oder Banane frisch essen"
            ]
        }
    }
];

const container = document.getElementById("week");

week.forEach(d => {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";

    dayDiv.innerHTML = `
        <h2>${d.day}</h2>
        <div class="content">
            <div class="section">
                <div class="toggle">🍽 Ernährung <span class="arrow">▶</span></div>
                <div class="inner">
                    <strong>Mahlzeiten:</strong>
                    <ul>${d.nutrition.meals.map(m => `<li>${m}</li>`).join("")}</ul>

                    <div class="toggle">🛒 Zutaten <span class="arrow">▶</span></div>
                    <div class="inner">
                        <ul>${d.nutrition.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
                    </div>

                    <div class="toggle">👨‍🍳 Kochen <span class="arrow">▶</span></div>
                    <div class="inner">
                        <ol>${d.nutrition.cooking.map(c => `<li>${c}</li>`).join("")}</ol>
                    </div>
                </div>
            </div>
        </div>
    `;

    dayDiv.querySelector("h2").onclick = () => {
        const content = dayDiv.querySelector(".content");
        content.style.display = content.style.display === "block" ? "none" : "block";
    };

    dayDiv.querySelectorAll(".toggle").forEach(toggle => {
        toggle.onclick = () => {
            toggle.classList.toggle("open");
            const inner = toggle.nextElementSibling;
            inner.style.display = inner.style.display === "block" ? "none" : "block";
        };
    });

    container.appendChild(dayDiv);
});
