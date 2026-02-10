/***********************
  BASIS
************************/

const days = ["Mo","Di","Mi","Do","Fr","Sa","So"];
const state = JSON.parse(localStorage.getItem("dayState") || "{}");

function saveState(){
  localStorage.setItem("dayState", JSON.stringify(state));
}

/***********************
  TAGESDATEN
************************/

const weekPlan = {

Mo:{
  title:"Hüfte + Einbein-Kraft",
  meals:[
    {title:"Frühstück", text:"Skyr oder Magerquark, Haferflocken, Beeren"},
    {title:"Snack", text:"Proteinshake + Apfel"},
    {title:"Mittagessen", text:"Hähnchen / Tofu, Reis oder Kartoffeln, Gemüse"},
    {title:"Pre/Post Workout", text:"Banane + Whey"},
    {title:"Abendessen", text:"Lachs oder Rinderhack, Gemüse, Olivenöl"}
  ],
  training:[
    {
      name:"Isometrische Hüft-Außenrotation",
      muscles:"Piriformis, Gluteus minimus, tiefe Außenrotatoren",
      how:"Stehend, Becken neutral. Band zieht Knie nach innen, aktiv nach außen drücken. Keine Bewegung. 30–45 Sekunden halten."
    },
    {
      name:"Side-lying Hip Abduction",
      muscles:"Gluteus minimus",
      how:"Seitenlage. Oberes Bein leicht nach vorne, Fuß leicht nach unten. 12–15 Wiederholungen, langsam."
    },
    {
      name:"Single-Leg Squat",
      muscles:"Gluteus, Quadrizeps, Hüftstabilisatoren",
      how:"Einbeinstand. 3 Sekunden kontrolliert absenken, Becken waagrecht halten."
    },
    {
      name:"Lateral Step-Down",
      muscles:"Gluteus minimus, Quadrizeps",
      how:"Standbein auf Stufe. Freies Bein langsam absenken, kontrolliert hochdrücken."
    }
  ],
  extra:"Fokus: Kontrolle > Intensität · Ziel: 7–9k Schritte"
},

Di:{
  title:"Restday / Mobility",
  meals:[
    {title:"Allgemein", text:"Proteinreich essen, etwas weniger Kohlenhydrate"}
  ],
  training:[],
  extra:"Optional 20–30 Min Spaziergang + aktive 90/90 Mobilität"
},

Mi:{
  title:"Sprungkraft",
  meals:[
    {title:"Frühstück", text:"Proteinreich + moderate Carbs"},
    {title:"Pre Workout", text:"Banane oder Reiswaffeln"},
    {title:"Abendessen", text:"Eiweißreich, leicht verdaulich"}
  ],
  training:[
    {
      name:"Pogo Jumps",
      muscles:"Waden, Fußgewölbe, Achillessehne",
      how:"Kleine schnelle Sprünge aus den Fußgelenken. Knie fast gestreckt. 15–25 Sekunden."
    },
    {
      name:"Step-Up Jumps",
      muscles:"Gluteus maximus, Quadrizeps",
      how:"Ein Bein auf niedriger Box. Explosiv hochspringen, weich landen."
    },
    {
      name:"Countermovement Jumps",
      muscles:"Gesamte Sprungkette",
      how:"Kurzes Einfedern, dann maximal vertikal abspringen. 4–6 Wiederholungen."
    }
  ],
  extra:"Saubere Landungen · keine Rotation erzwingen"
},

Do:{
  title:"Restday",
  meals:[
    {title:"Allgemein", text:"Kalorien leicht reduziert, Protein hoch halten"}
  ],
  training:[],
  extra:"Regeneration, Schlaf priorisieren"
},

Fr:{
  title:"Hüfte + Einbein-Kraft",
  meals:[
    {title:"Frühstück", text:"Skyr / Eier + Haferflocken"},
    {title:"Mittagessen", text:"Protein + komplexe Carbs"},
    {title:"Abendessen", text:"Gesunde Fette + Eiweiß"}
  ],
  training:[
    {
      name:"Isometrische Hüft-Außenrotation",
      muscles:"Tiefe Hüftrotatoren",
      how:"Wie Montag, 3–4 Sätze á 30–45 Sekunden."
    },
    {
      name:"Single-Leg RDL",
      muscles:"Gluteus, Hamstrings",
      how:"Einbeinstand, Hüfte nach hinten schieben, Rücken neutral."
    }
  ],
  extra:"Qualität vor Volumen"
},

Sa:{
  title:"Sprungkraft (leicht)",
  meals:[
    {title:"Allgemein", text:"Ähnlich Mittwoch"}
  ],
  training:[
    {
      name:"Skater Hops",
      muscles:"Laterale Hüftstabilisatoren",
      how:"Kleine Seit-Sprünge, Landung stabil, Becken ruhig."
    }
  ],
  extra:"Nur wenn Hüfte ruhig ist"
},

So:{
  title:"Kompletter Rest",
  meals:[
    {title:"Allgemein", text:"Ausgeglichen essen, keine Diät-Extreme"}
  ],
  training:[],
  extra:"Erholung, Spaziergang, Reset"
}

};

/***********************
  UI FUNKTIONEN
************************/

function drawWeek(){
  const weekDiv = document.getElementById("week");
  weekDiv.innerHTML = "";
  days.forEach(d=>{
    const el = document.createElement("div");
    el.className = "day" + (state[d] ? " active" : "");
    el.innerText = d;
    el.onclick = () => showDay(d);
    weekDiv.appendChild(el);
  });
}

function showDay(d){
  state[d] = true;
  saveState();
  drawWeek();

  const data = weekPlan[d];
  let html = `<h2>${d} – ${data.title}</h2>`;

  html += "<h3>🍽️ Ernährung</h3>";
  data.meals.forEach(m=>{
    html += `<p><b>${m.title}:</b> ${m.text}</p>`;
  });

  html += "<h3>🏋️ Training</h3>";
  if(data.training.length === 0){
    html += "<p>Heute kein strukturiertes Training.</p>";
  } else {
    data.training.forEach(t=>{
      html += `
      <div class="card">
        <b>${t.name}</b><br>
        <small>${t.muscles}</small><br><br>
        ${t.how}
      </div>`;
    });
  }

  html += `<h3>🧠 Tagesfokus</h3><p>${data.extra}</p>`;

  document.getElementById("content").innerHTML = html;
}

/***********************
  INIT
************************/

drawWeek();
