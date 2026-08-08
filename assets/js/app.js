
const D=window.KASIF_DATA,{careers,questions,categories,trainingSources}=D;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

const storage={
  get(key,fallback=""){
    try{
      const value=window.localStorage.getItem(key);
      return value===null?fallback:value;
    }catch(error){
      return fallback;
    }
  },
  set(key,value){
    try{ window.localStorage.setItem(key,value); }catch(error){}
  },
  remove(key){
    try{ window.localStorage.removeItem(key); }catch(error){}
  }
};
function readJSON(key,fallback){
  try{return JSON.parse(storage.get(key,JSON.stringify(fallback)))}catch(error){return fallback}
}
const state={
  q:0,
  answers:readJSON("kasifAnswers",[]),
  favorite:storage.get("kasifFavorite",""),
  completed:readJSON("kasifCompleted",{}),
  compare:readJSON("kasifCompare",[]),
  category:""
};
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2200)}
function icon(cat){return categories[cat]||"🧭"}
function slug(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ı/g,"i").replace(/ğ/g,"g").replace(/ş/g,"s").replace(/ç/g,"c").replace(/ö/g,"o").replace(/ü/g,"u").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function card(c){const cmp=state.compare.includes(c.id);return `<article class="career-card"><div class="career-top"><div class="career-icon">${icon(c.category)}</div><span class="badge">${esc(c.trend)}</span></div><div><span class="badge">${esc(c.category)}</span></div><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p><div class="skill-row">${c.skills.slice(0,4).map(x=>`<span class="badge">${esc(x)}</span>`).join("")}</div><div class="career-actions"><button class="btn primary" onclick="openCareer('${c.id}')">İncele</button><button class="icon-btn ${cmp?"active":""}" title="Karşılaştır" onclick="toggleCompare('${c.id}')">⇄</button><button class="icon-btn ${state.favorite===c.id?"active":""}" title="Yol haritasına ekle" onclick="setFavorite('${c.id}')">★</button></div></article>`}
function renderFeatured(){$("#featuredCareers").innerHTML=careers.slice(0,6).map(card).join("");$("#careerCount").textContent=careers.length+"+"}
function populate(){const cats=Object.keys(categories);$("#careerCategory").innerHTML=`<option value="">Tüm kategoriler</option>`+cats.map(c=>`<option>${esc(c)}</option>`).join("");$("#categoryChips").innerHTML=`<button class="chip active" data-cat="">Tümü</button>`+cats.map(c=>`<button class="chip" data-cat="${esc(c)}">${categories[c]} ${esc(c)}</button>`).join("");$$(".chip").forEach(b=>b.onclick=()=>{state.category=b.dataset.cat;$("#careerCategory").value=state.category;$$(".chip").forEach(x=>x.classList.toggle("active",x===b));renderCareers()})}
function renderCareers(){const q=($("#careerSearch").value||"").toLowerCase(),cat=$("#careerCategory").value||state.category;const list=careers.filter(c=>(!cat||c.category===cat)&&[c.title,c.summary,c.category,...c.skills].join(" ").toLowerCase().includes(q));$("#resultCount").textContent=`${list.length} meslek gösteriliyor`;$("#careerGrid").innerHTML=list.length?list.map(card).join(""):`<div class="panel">Sonuç bulunamadı.</div>`;$("#compareCount").textContent=state.compare.length}
window.openCareer=id=>location.hash=`career-detail/${id}`;
window.setFavorite=id=>{state.favorite=id;storage.set("kasifFavorite",id);toast("Yol haritasına eklendi.");renderFeatured();renderCareers();renderRoadmap()}
window.toggleCompare=id=>{const i=state.compare.indexOf(id);if(i>=0)state.compare.splice(i,1);else if(state.compare.length<3)state.compare.push(id);else return toast("En fazla 3 meslek karşılaştırabilirsin.");storage.set("kasifCompare",JSON.stringify(state.compare));renderCareers();renderFeatured();renderCompare()}
function renderCompare(){const list=state.compare.map(id=>careers.find(c=>c.id===id)).filter(Boolean);$("#compareCount").textContent=list.length;if(!list.length){$("#compareContent").innerHTML=`<p>Karşılaştırmak için meslek kartlarındaki ⇄ butonunu kullan.</p>`;return}$("#compareContent").innerHTML=`<table class="compare-table"><tr><th>Özellik</th>${list.map(c=>`<th>${esc(c.title)}</th>`).join("")}</tr><tr><td>Alan</td>${list.map(c=>`<td>${esc(c.category)}</td>`).join("")}</tr><tr><td>Beceriler</td>${list.map(c=>`<td>${c.skills.map(esc).join(", ")}</td>`).join("")}</tr><tr><td>İlk eğitim</td>${list.map(c=>`<td>${esc(c.digem[0])}</td>`).join("")}</tr><tr><td>Başlangıç</td>${list.map(c=>`<td>${esc(c.roadmap[0].tasks[0])}</td>`).join("")}</tr></table>`}
function renderDetail(id){const c=careers.find(x=>x.id===id);if(!c)return location.hash="careers";$("#careerDetail").innerHTML=`<button class="btn secondary" onclick="location.hash='careers'">← Mesleklere dön</button><div class="detail-shell" style="margin-top:18px"><div class="detail-main"><div class="panel"><span class="kicker">${icon(c.category)} ${esc(c.category)}</span><h1>${esc(c.title)}</h1><p class="lead">${esc(c.summary)}</p><div class="skill-row">${c.skills.map(s=>`<span class="badge">${esc(s)}</span>`).join("")}</div></div><div class="panel"><h2>90 günlük profesyonel yol haritası</h2><div class="phase-grid">${c.roadmap.map((p,i)=>`<section class="phase-card"><div class="phase-head"><div><span class="badge">${esc(p.phase)}</span><h3>${esc(p.title)}</h3></div><span class="phase-no">${i+1}</span></div><p>${esc(p.goal)}</p><ul>${p.tasks.map(t=>`<li>${esc(t)}</li>`).join("")}</ul><div class="deliverable"><strong>Somut çıktı:</strong> ${esc(p.output)}</div><button class="training-link" onclick="goTraining('${encodeURIComponent(p.training)}')"><span>🎓</span><span>${esc(p.training)}</span><b>→</b></button></section>`).join("")}</div></div><div class="panel"><h2>Portföy proje fikirleri</h2>${c.projects.map(p=>`<div class="deliverable">💡 ${esc(p)}</div>`).join("")}</div></div><aside class="detail-side"><div class="panel sticky"><h3>Bu alana başlamak için</h3><p>Önce küçük bir deneme yap, ardından düzenli bir öğrenme planı uygula.</p><button class="btn primary" style="width:100%" onclick="setFavorite('${c.id}');location.hash='roadmap'">Yol Haritamı Oluştur</button><h3 style="margin-top:22px">İlgili DİGEM eğitimleri</h3>${c.digem.map(t=>`<button class="training-link" onclick="goTraining('${encodeURIComponent(t)}')"><span>🎓</span><span>${esc(t)}</span><b>→</b></button>`).join("")}<button class="btn secondary" style="width:100%;margin-top:12px" onclick="location.hash='mentor'">AI Mentör'e Sor</button></div></aside></div>`}
function renderQuestion(){const q=questions[state.q];$("#questionIndex").textContent=`Soru ${state.q+1} / ${questions.length}`;$("#progressBar").style.width=`${(state.q+1)/questions.length*100}%`;$("#questionText").textContent=q.text;const labels=["Hiç katılmıyorum","Katılmıyorum","Kararsızım","Katılıyorum","Tamamen katılıyorum"];$("#scaleButtons").innerHTML=labels.map((x,i)=>`<button class="${state.answers[state.q]===i+1?"selected":""}" data-v="${i+1}"><strong>${i+1}</strong><small>${x}</small></button>`).join("");$$("[data-v]").forEach(b=>b.onclick=()=>{state.answers[state.q]=+b.dataset.v;storage.set("kasifAnswers",JSON.stringify(state.answers));renderQuestion()});$("#prevQuestion").disabled=state.q===0;$("#nextQuestion").textContent=state.q===questions.length-1?"Sonuçları Gör":"Sonraki →"}
function calc(){const total={technical:0,data:0,creative:0,social:0,security:0,sustainability:0,leadership:0,handsOn:0},max={...total};questions.forEach((q,i)=>Object.entries(q.dims).forEach(([d,w])=>{total[d]+=(state.answers[i]||3)*w;max[d]+=5*w}));const norm={};Object.keys(total).forEach(d=>norm[d]=max[d]?total[d]/max[d]:0);const scored=careers.map(c=>{let a=0,b=0;Object.entries(c.weights).forEach(([d,w])=>{a+=norm[d]*w;b+=w});return{id:c.id,score:Math.round(a/b*100)}}).sort((x,y)=>y.score-x.score).slice(0,6);storage.set("kasifResults",JSON.stringify(scored));storage.set("kasifProfile",JSON.stringify(norm));renderResults();location.hash="results"}
function renderResults(){const s=readJSON("kasifResults",[]);$("#resultsGrid").innerHTML=s.length?s.map((r,i)=>{const c=careers.find(x=>x.id===r.id);return `<article class="panel"><div class="career-top"><span class="badge">#${i+1} öneri</span><div class="score-ring" style="--score:${r.score}"><b>%${r.score}</b></div></div><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p><p><strong>Neden?</strong> Yanıtların ${topDims(c).join(", ")} alanlarıyla güçlü eşleşiyor.</p><div class="career-actions"><button class="btn primary" onclick="openCareer('${c.id}')">Detay</button><button class="btn secondary" onclick="setFavorite('${c.id}');location.hash='roadmap'">Yol Haritası</button></div></article>`}).join(""):`<div class="panel">Henüz sonuç yok. <a href="#quiz">Testi başlat.</a></div>`}
function topDims(c){const map={technical:"teknik problem çözme",data:"veri ve analitik",creative:"yaratıcılık",social:"insan odaklı çalışma",security:"güvenlik",sustainability:"sürdürülebilirlik",leadership:"liderlik",handsOn:"uygulamalı öğrenme"};return Object.entries(c.weights).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([d])=>map[d])}
function renderDashboard(){const profile=readJSON("kasifProfile",null),res=readJSON("kasifResults",[]);if(!profile){$("#dashboardContent").innerHTML=`<div class="panel"><h2>Panelini oluşturmak için keşif testini tamamla.</h2><a class="btn primary" href="#quiz">Teste Başla</a></div>`;return}const names={technical:"Teknik",data:"Veri",creative:"Yaratıcılık",social:"İnsan Odaklılık",security:"Güvenlik",sustainability:"Sürdürülebilirlik",leadership:"Liderlik",handsOn:"Uygulama"};$("#dashboardContent").innerHTML=`<div class="dashboard-grid"><div class="panel"><h2>İlgi alanı profilin</h2><div class="bar-list">${Object.entries(profile).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<div class="bar-item"><span>${names[k]}</span><div class="bar-track"><div style="width:${Math.round(v*100)}%"></div></div><b>%${Math.round(v*100)}</b></div>`).join("")}</div></div><div class="panel"><h2>En güçlü eşleşmeler</h2>${res.slice(0,3).map(r=>{const c=careers.find(x=>x.id===r.id);return `<div class="deliverable"><strong>${esc(c.title)}</strong><br><span>%${r.score} keşif puanı</span></div>`}).join("")}<a class="btn primary" href="#roadmap">Yol Haritama Git</a></div></div>`}
function renderRoadmap(){const c=careers.find(x=>x.id===state.favorite);if(!c){$("#roadmapContent").innerHTML=`<div class="panel"><h2>Henüz meslek seçmedin.</h2><p>Meslek kütüphanesinden bir alanı yol haritana ekle.</p><a class="btn primary" href="#careers">Meslekleri İncele</a></div>`;return}const keys=c.roadmap.flatMap((p,pi)=>p.tasks.map((_,ti)=>`${c.id}-${pi}-${ti}`));const done=keys.filter(k=>state.completed[k]).length,pct=Math.round(done/keys.length*100);$("#roadmapContent").innerHTML=`<div class="detail-shell"><div class="detail-main"><div class="panel"><span class="kicker">${icon(c.category)} ${esc(c.title)}</span><h2>Kişisel 90 günlük rotan</h2><p>${esc(c.summary)}</p></div>${c.roadmap.map((p,pi)=>`<section class="panel"><div class="phase-head"><div><span class="badge">${esc(p.phase)}</span><h3>${esc(p.title)}</h3></div><span class="phase-no">${pi+1}</span></div><p>${esc(p.goal)}</p>${p.tasks.map((t,ti)=>{const k=`${c.id}-${pi}-${ti}`;return `<label class="road-check"><input type="checkbox" data-road="${k}" ${state.completed[k]?"checked":""}><span>${esc(t)}</span></label>`}).join("")}<div class="deliverable"><strong>Aşama çıktısı:</strong> ${esc(p.output)}</div><button class="training-link" onclick="goTraining('${encodeURIComponent(p.training)}')"><span>🎓</span><span>${esc(p.training)} eğitimini görüntüle</span><b>→</b></button></section>`).join("")}</div><aside class="detail-side"><div class="panel sticky"><h3>Toplam ilerleme</h3><h1>%${pct}</h1><div class="mini-progress"><div style="width:${pct}%"></div></div><p>Görevler bu cihazda saklanır.</p><button class="btn secondary" style="width:100%" onclick="state.favorite='';storage.remove('kasifFavorite');renderRoadmap()">Mesleği Değiştir</button></div></aside></div>`;$$("[data-road]").forEach(x=>x.onchange=()=>{state.completed[x.dataset.road]=x.checked;storage.set("kasifCompleted",JSON.stringify(state.completed));renderRoadmap()})}
function renderTrainings(){$("#trainingGrid").innerHTML=trainingSources.map(t=>`<article class="training-card" id="training-${slug(t.title)}"><span class="badge">${esc(t.tag)}</span><h3>${esc(t.title)}</h3><p class="provider">${esc(t.provider)}</p><p>${esc(t.desc)}</p><a class="external" href="${t.url}" target="_blank" rel="noopener">Resmî sayfayı aç ↗</a></article>`).join("")}
window.goTraining=name=>{location.hash="trainings";setTimeout(()=>{let el=[...$$(".training-card")].find(x=>x.textContent.toLowerCase().includes(decodeURIComponent(name).split(" ")[0].toLowerCase()));if(!el)el=$("#trainingGrid .training-card");$$(".training-card").forEach(x=>x.classList.remove("highlight"));if(el){el.classList.add("highlight");el.scrollIntoView({behavior:"smooth",block:"center"})}},180)}
function mentorReply(q){const t=q.toLowerCase(),found=careers.filter(c=>t.includes(c.title.toLowerCase().replace("geliştiricisi","geliştirici").replace("uzmanı","uzman"))||t.includes(c.id.split("-")[0]));if(t.includes("karşılaştır")&&found.length>=2){const[a,b]=found;return `${a.title}; ${a.skills.slice(0,3).join(", ")} becerilerine odaklanır. ${b.title}; ${b.skills.slice(0,3).join(", ")} alanlarını daha çok kullanır. Her iki alanda da küçük bir proje deneyerek karar vermen daha sağlıklı olur.`}if(t.includes("30 günlük")||t.includes("plan")){const c=found[0]||careers.find(x=>x.id===state.favorite)||careers[0];return `${c.title} için ilk 30 gün: ${c.roadmap[0].tasks.join("; ")}. Ardından ${c.digem[0]} eğitimini inceleyebilirsin.`}if(t.includes("proje")){const c=found[0]||careers.find(x=>x.id===state.favorite)||careers[0];return `${c.title} için proje fikirleri: ${c.projects.join("; ")}. İlk hedefin küçük ama çalışan bir MVP olmalı.`}if(t.includes("maaş")||t.includes("iş garant"))return "Maaş veya iş garantisi veremem. Bu bilgiler zamana, ülkeye ve deneyime göre değişir; güncel ve güvenilir kaynaklardan doğrulanmalıdır.";if(found[0]){const c=found[0];return `${c.title}: ${c.summary} Başlangıçta ${c.roadmap[0].tasks.slice(0,2).join(" ve ")} adımlarını uygulayabilirsin.`}return "Soruna bir meslek adı veya hedef eklersen daha somut bir plan önerebilirim. Örnek: “Veri analisti olmak için nereden başlamalıyım?”"}
function setupMentor(){const arr=["Veri analisti ve mobil geliştiriciyi karşılaştır.","Bana 30 günlük başlangıç planı hazırla.","Portföy için proje öner.","Hangi meslek bana uygun olabilir?"];$("#quickPrompts").innerHTML=arr.map(x=>`<button class="btn secondary">${x}</button>`).join("");$$("#quickPrompts button").forEach(b=>b.onclick=()=>{$("#chatInput").value=b.textContent;(typeof $("#chatForm").requestSubmit==="function"
  ? $("#chatForm").requestSubmit()
  : $("#chatForm").dispatchEvent(new Event("submit",{cancelable:true,bubbles:true})))});$("#chatForm").onsubmit=e=>{e.preventDefault();const i=$("#chatInput"),q=i.value.trim();if(!q)return;$("#messages").innerHTML+=`<div class="msg user">${esc(q)}</div>`;i.value="";setTimeout(()=>{$("#messages").innerHTML+=`<div class="msg bot">${esc(mentorReply(q))}</div>`;$("#messages").scrollTop=$("#messages").scrollHeight},280)}}
function route(){const raw=location.hash.slice(1)||"home",[page,param]=raw.split("/");$$(".page").forEach(x=>x.classList.remove("active"));const el=document.getElementById(page)||$("#home");el.classList.add("active");$$(".nav-links a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${page}`));$("#navLinks").classList.remove("open");try{window.scrollTo(0,0)}catch(error){};if(page==="career-detail")renderDetail(param);if(page==="results")renderResults();if(page==="dashboard")renderDashboard();if(page==="roadmap")renderRoadmap()}
function initTheme(){const saved=storage.get("kasifTheme","light");document.documentElement.dataset.theme=saved;$("#themeIcon").textContent=saved==="dark"?"☀️":"🌙"}
document.addEventListener("DOMContentLoaded",()=>{
  const safe=(fn)=>{try{fn()}catch(error){console.error(error)}};

  safe(renderFeatured);
  safe(populate);
  safe(renderCareers);
  safe(renderQuestion);
  safe(renderResults);
  safe(renderDashboard);
  safe(renderRoadmap);
  safe(renderTrainings);
  safe(setupMentor);
  safe(renderCompare);
  safe(route);
  safe(initTheme);

  if($("#careerSearch")) $("#careerSearch").addEventListener("input",renderCareers);
  if($("#careerCategory")) $("#careerCategory").addEventListener("change",e=>{state.category=e.target.value;renderCareers()});
  if($("#clearFilters")) $("#clearFilters").addEventListener("click",()=>{
    $("#careerSearch").value="";
    $("#careerCategory").value="";
    state.category="";
    $$(".chip").forEach((x,i)=>x.classList.toggle("active",i===0));
    renderCareers();
  });
  if($("#nextQuestion")) $("#nextQuestion").addEventListener("click",()=>{
    if(!state.answers[state.q]) return toast("Lütfen bir seçenek işaretle.");
    if(state.q<questions.length-1){state.q++;renderQuestion()}else calc();
  });
  if($("#prevQuestion")) $("#prevQuestion").addEventListener("click",()=>{
    if(state.q>0){state.q--;renderQuestion()}
  });
  if($("#mobileToggle")) $("#mobileToggle").addEventListener("click",()=>$("#navLinks")?.classList.toggle("open"));
  if($("#themeToggle")) $("#themeToggle").addEventListener("click",()=>{
    const n=document.documentElement.dataset.theme==="dark"?"light":"dark";
    document.documentElement.dataset.theme=n;
    storage.set("kasifTheme",n);
    if($("#themeIcon")) $("#themeIcon").textContent=n==="dark"?"☀️":"🌙";
  });
  if($("#openCompare")) $("#openCompare").addEventListener("click",()=>$("#compareDrawer")?.classList.add("open"));
  if($("#closeCompare")) $("#closeCompare").addEventListener("click",()=>$("#compareDrawer")?.classList.remove("open"));
  window.addEventListener("hashchange",route);
});
