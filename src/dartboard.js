// Board geometry is independent of DOM, rules and animation.
export function dartPosition(points,index){
  const a=-Math.PI/2+index*2*Math.PI/7;
  const radius=points===0?151:points===100?11:Math.max(23,130-points*1.15);
  return {x:180+radius*Math.cos(a),y:180+radius*Math.sin(a),angle:a*180/Math.PI+90};
}
const polar=(r,a)=>[180+r*Math.cos(a),180+r*Math.sin(a)];
function sector(inner,outer,a,b){
  const p=polar(outer,a),q=polar(outer,b),s=polar(inner,b),t=polar(inner,a);
  return "M"+p.join(" ")+" A"+outer+" "+outer+" 0 0 1 "+q.join(" ")+" L"+s.join(" ")+" A"+inner+" "+inner+" 0 0 0 "+t.join(" ")+" Z";
}
export function dartboard(rows=[],animate=false){
  const numbers=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];
  let sectors="",labels="";
  for(let i=0;i<20;i++){
    const a=-Math.PI/2+(i-.5)*Math.PI/10,b=a+Math.PI/10;
    for(const [inner,outer,ring] of [[24,74,false],[74,84,true],[84,119,false],[119,130,true]]){
      sectors+='<path d="'+sector(inner,outer,a,b)+'" fill="'+(ring?(i%2?"#50745b":"#a64b40"):(i%2?"#dfc9a2":"#252f2a"))+'" stroke="#b7a17b" stroke-width=".7"/>';
    }
    const [x,y]=polar(142,a+Math.PI/20);
    labels+='<text x="'+x+'" y="'+(y+4)+'" class="board-number">'+numbers[i]+'</text>';
  }
  const darts=rows.map((r,i)=>{
    const {x,y,angle}=dartPosition(r.points,i),color=r.points===100?"#ffe7a1":r.points?"#e1c9a4":"#d36b54";
    return '<g class="dart-mark '+(animate&&i===rows.length-1?"fresh":"")+'" data-dart="'+i+'" tabindex="0" role="button" aria-label="Rzut '+(i+1)+', '+r.points+' punktów" transform="translate('+x+' '+y+')"><title>Rzut '+(i+1)+' · '+r.points+' pkt</title><circle class="dart-focus" r="16" fill="transparent"/>'+ (r.points?'<g class="dart-flight" transform="rotate('+angle+')"><path d="M0 0 L-8 -23 L-5 -29 L-2 -16 Z" fill="#080d0a" opacity=".45" transform="translate(3 4)"/><path d="M0 0 L0 -12" stroke="#f7ead0" stroke-width="2"/><path d="M0 -12 L0 -28" stroke="#b5a37b" stroke-width="4"/><path d="M0 -24 L-9 -39 L0 -35 L9 -39 Z" fill="'+color+'" stroke="#171c16" stroke-width="1.2"/><circle r="3" fill="#0a0e0b" stroke="'+color+'"/></g>':'<path d="M-5 -5L5 5M5 -5L-5 5" stroke="'+color+'" stroke-width="3"/>')+'<circle cx="10" cy="9" r="8" fill="#151b16" stroke="'+color+'"/><text x="10" y="12" class="dart-index" fill="'+color+'">'+(i+1)+'</text></g>';
  }).join("");
  return '<svg class="dartboard" viewBox="0 0 360 360" aria-label="Tarcza rzutów. Bliżej środka oznacza wyższy wynik."><defs><radialGradient id="wood"><stop stop-color="#65503b"/><stop offset="1" stop-color="#30271e"/></radialGradient><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" stitchTiles="stitch"/></filter><clipPath id="board-clip"><circle cx="180" cy="180" r="152"/></clipPath></defs><circle cx="180" cy="185" r="164" fill="#0c100d" opacity=".8"/><circle cx="180" cy="180" r="163" fill="url(#wood)" stroke="#9b8053" stroke-width="2"/><circle cx="180" cy="180" r="153" fill="#191f1b" stroke="#b29a70" stroke-width="2"/>'+sectors+labels+'<circle cx="180" cy="180" r="24" fill="#50745b" stroke="#b7a17b"/><circle cx="180" cy="180" r="13" fill="#a64b40" stroke="#e5d0a2"/><circle cx="180" cy="180" r="152" filter="url(#grain)" opacity=".13" clip-path="url(#board-clip)" pointer-events="none"/>'+darts+'</svg>';
}
