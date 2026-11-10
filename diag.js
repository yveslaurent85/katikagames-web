var b=document.getElementById('b');b.textContent='2. Script externe diag.js : OK';b.className='ok';
var s=document.createElement('script');s.src='tutoriel.js';
s.onload=function(){var c=document.getElementById('c');c.textContent='3. tutoriel.js : charge et execute';c.className='ok';};
s.onerror=function(){document.getElementById('c').textContent='3. tutoriel.js : ERREUR de chargement';};
document.body.appendChild(s);
