
(function(){
  if(!window.TUTO||window.TUTO.length<3){document.body.insertAdjacentHTML('afterbegin','<p style="color:#fff;padding:16px">Fichiers du tutoriel incomplets (tuto_l1.js, tuto_l2.js, tuto_l3.js). Recharge la page.</p>');return;}
  var IMG=[];for(var q=0;q<13;q++)IMG.push('tuto'+q+'.jpg');
  var W=932,H=1992;
  // image : 0 retrait intl, 1 retrait local, 2 dépôt MTN code, 3 dépôt MTN haut, 4 dépôt OM code, 5 dépôt OM haut, 6 dépôt intl, 7 accueil, 8 compte, 9 tiroir, 10 installer, 11 menu Chrome, 12 site
  var M=window.TUTO;
  var mi=0,si=0,started=false,voice=null;
  var $=function(id){return document.getElementById(id);};
  var tts=('speechSynthesis' in window)&&typeof SpeechSynthesisUtterance!=='undefined';
  function pickVoice(){
    if(!tts)return;
    var vs=speechSynthesis.getVoices()||[];voice=null;
    for(var i=0;i<vs.length;i++){if((vs[i].lang||'').toLowerCase().indexOf('fr')===0){voice=vs[i];if((vs[i].lang||'').toLowerCase()==='fr-fr')break;}}
  }
  if(tts){pickVoice();try{speechSynthesis.onvoiceschanged=pickVoice;}catch(e){}}
  function speak(){
    if(!tts)return;
    try{
      speechSynthesis.cancel();
      var st=M[mi].steps[si];
      var u=new SpeechSynthesisUtterance(st.say||st.c);
      u.lang='fr-FR';u.rate=.92;if(voice)u.voice=voice;
      speechSynthesis.speak(u);
    }catch(e){}
  }
  function render(){
    var m=M[mi],st=m.steps[si];
    $('label').textContent=m.name+' · étape '+(si+1)+' sur '+m.steps.length;
    $('title').textContent=st.t;
    $('img').src=IMG[st.i];
    var z=$('zone'),pad=6;
    z.style.left=((st.z[0]-pad)/W*100)+'%';z.style.top=((st.z[1]-pad)/H*100)+'%';
    z.style.width=((st.z[2]-st.z[0]+2*pad)/W*100)+'%';z.style.height=((st.z[3]-st.z[1]+2*pad)/H*100)+'%';
    $('cap').textContent=st.c;
    var d='';for(var i=0;i<m.steps.length;i++)d+='<i class="'+(i<=si?'d':'')+'"></i>';
    $('dots').innerHTML=d;
    var last=si===m.steps.length-1;
    $('next').textContent=last?(mi<M.length-1?'Leçon suivante →':'Recommencer ↺'):'Suivant →';
    $('prev').style.visibility=(si===0&&mi===0)?'hidden':'visible';
    var tabs=document.querySelectorAll('.tab');
    for(var k=0;k<tabs.length;k++)tabs[k].setAttribute('aria-selected',k===mi?'true':'false');
    if(!tts)$('hint').textContent='Ton navigateur ne lit pas les voix : suis le texte en bas de l\'écran.';
    if(started)speak();
  }
  function focusZone(){
    var z=$('zone').getBoundingClientRect(),bar=document.querySelector('.bar').getBoundingClientRect();
    var avail=bar.top-70; // place sous les onglets, au-dessus de la barre
    var target=z.top+z.height/2+window.scrollY-avail/2-20;
    window.scrollTo({top:Math.max(0,target),behavior:'smooth'});
  }
  function go(a,b){mi=a;si=b;render();setTimeout(focusZone,60);}
  $('next').onclick=function(){started=true;if(si<M[mi].steps.length-1)go(mi,si+1);else if(mi<M.length-1)go(mi+1,0);else go(0,0);};
  $('prev').onclick=function(){started=true;if(si>0)go(mi,si-1);else if(mi>0)go(mi-1,M[mi-1].steps.length-1);};
  $('replay').onclick=function(){started=true;speak();};
  var tb='';
  M.forEach(function(m,i){tb+='<button class="tab" role="tab" data-i="'+i+'">'+m.name+'<small>'+m.sub+'</small></button>';});
  $('tabs').innerHTML=tb;
  var bt=document.querySelectorAll('.tab');
  for(var j=0;j<bt.length;j++)bt[j].onclick=function(){started=true;go(+this.getAttribute('data-i'),0);};
  render();
})();
