import {leaderboard} from './ranking.js';
import {createLeaderboardUI} from './leaderboard-ui.js';
const $=id=>document.getElementById(id);
let returnFocus;
function close(){ $('rankingModal').hidden=true;returnFocus?.focus(); }
const ui=createLeaderboardUI({api:leaderboard,formatScore:score=>(score/100).toFixed(2)+'秒',
  open:()=>{returnFocus=document.activeElement;$('rankingModal').hidden=false;$('rankingBack').focus()},close});
$('homeRankingBtn').addEventListener('click',ui.open);
$('resultRankingBtn').addEventListener('click',ui.open);
window.addEventListener('asobeat:run-result',event=>ui.setResult(event.detail.score,{allowed:event.detail.eligible}));
document.addEventListener('keydown',event=>{
  if($('rankingModal').hidden)return;
  if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();close();}
  if(event.key==='Tab'){
    const buttons=[...$('rankingModal').querySelectorAll('button:not(:disabled)')];
    const first=buttons[0],last=buttons.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  }
},true);
