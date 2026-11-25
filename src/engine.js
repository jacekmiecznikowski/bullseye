export const rules={radar:{label:"Radar",seconds:25,points:[10,15,30,60,100]},nisza:{label:"Nisza",seconds:20,points:[10,30,55,85,100]}};
export function normalize(s){return s.toLocaleLowerCase("pl").normalize("NFD").replace(/\p{M}/gu,"").replace(/ł/g,"l").replace(/[^\p{L}\p{N}]+/gu," ").trim()}
export function answer(q,s){return q.answers.find(a=>a.names.some(n=>normalize(n)===normalize(s)))}
export function score(a,mode){return a?rules[mode].points[a.tier]:0}
export function day(d=new Date()){return new Intl.DateTimeFormat("sv-SE",{timeZone:"Europe/Warsaw",year:"numeric",month:"2-digit",day:"2-digit"}).format(d)}
export function shift(d,n){let x=new Date(d+"T12:00:00Z");x.setUTCDate(x.getUTCDate()+n);return x.toISOString().slice(0,10)}
export function deck(questions,key){let h=2166136261;for(const c of key)h=Math.imul(h^c.charCodeAt(0),16777619);let a=[...questions];for(let i=a.length-1;i>0;i--){h^=h<<13;h^=h>>>17;h^=h<<5;let j=(h>>>0)%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a.slice(0,7)}
export function streak(history,today){const dates=new Set(history.filter(h=>h.kind==="daily").map(h=>h.date));let n=0,d=dates.has(today)?today:shift(today,-1);while(dates.has(d)){n++;d=shift(d,-1)}return n}
