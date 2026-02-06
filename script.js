const days=["Mo","Di","Mi","Do","Fr","Sa","So"];

const plans={
A:[
"Isometrische Außenrotation – 4×45s rechts",
"Side-lying Hip Abduction – 3×12–15 rechts",
"Single-Leg Squat – 3×6–8 rechts",
"Lateral Step-Down – 2–3×8 rechts",
"Single-Leg RDL – 3×6–8 rechts"
],
B:[
"Pogo Jumps – 20s",
"Step-Up Jumps – 6–8 / Seite",
"Skater Hops – 6–8 / Seite",
"Countermovement Jumps – 4–6"
],
R:[
"Isometrische Außenrotation – 2×45s",
"Einbeinstand – 2×30s",
"Aktive 90/90 – 2 Min",
"Optionale Massage – 3 Min"
]
};

let state=JSON.parse(localStorage.getItem("state")||"{}");

function save(){
localStorage.setItem("state",JSON.stringify(state));
updateProgress();
drawWeek();
}

function drawWeek(){
let html="";
days.forEach(d=>{
html+=`<div class="day ${state[d]?'active':''}" onclick="toggleDay('${d}')">${d}</div>`;
});
document.getElementById("week").innerHTML=html;
}

function toggleDay(d){
state[d]=!state[d];
save();
}

function showPlan(type){
let html=`<h2>${type=="A"?"Einheit A":type=="B"?"Einheit B":"Regeneration"}</h2>`;
plans[type].forEach((e,i)=>{
let key=type+i;
html+=`<div class="card ${state[key]?'done':''}">
<input type="checkbox" ${state[key]?'checked':''}
onchange="state['${key}']=this.checked;save();this.parentNode.classList.toggle('done')">
${e}</div>`;
});
html+=`<div id="timer" class="timer">45</div>
<button onclick="startTimer()">45s Timer</button>`;
document.getElementById("content").innerHTML=html;
}

let t,sec=45;

function startTimer(){
clearInterval(t);
sec=45;
document.getElementById("timer").innerText=sec;
t=setInterval(()=>{
sec--;
document.getElementById("timer").innerText=sec;
if(sec<=0){
clearInterval(t);
navigator.vibrate?.(200);
alert("Fertig");
}
},1000);
}

function updateProgress(){
let total=0,done=0;
Object.keys(plans).forEach(p=>plans[p].forEach((_,i)=>{
total++; if(state[p+i]) done++;
}));
let pct=Math.round(done/total*100);
document.getElementById("progress").style.width=pct+"%";
document.getElementById("progtext").innerText="Fortschritt: "+pct+"%";
}

function resetAll(){
if(confirm("Alles zurücksetzen?")){
state={};
save();
location.reload();
}
}

drawWeek();
updateProgress();
