// Lightweight smoke-test notes for the dependency-free build.
// Run manually in a browser console against game.html.
const requiredIds=['stage','input','hit','start','practice','modeTabs','slow','blast','shield','wave','score','combo','wpm','health','accuracy','energy','bossbar'];
const missing=requiredIds.filter(id=>!document.getElementById(id));
console.log(missing.length?'Missing UI ids: '+missing.join(', '):'UI smoke check: PASS');
console.log('Game mode buttons:',document.querySelectorAll('#modeTabs button').length);
console.log('local best:',localStorage.getItem('neon-siege-best')||'0');
