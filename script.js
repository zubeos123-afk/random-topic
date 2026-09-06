
const topics = ['Hook', 'Pacing', 'Sound Effect', 'B-roll', 'Color', 'Text Animation', 'Transition', 'Zoom', 'Masking', 'Keyframe', 'Subtitle', 'Motion Blur', 'Speed Ramp', 'Beat Cut', 'J-Cut / L-Cut', 'Storytelling', 'Retention', 'Color Grading', 'Audio Mixing', 'Footage Selection', 'AI Video', 'AI Prompt', 'Viral Edit', 'Influencer Edit', 'Before/After', 'Editing Mistakes', 'Minimalist Edit', 'Cinematic Edit', 'Editing Workflow', 'CapCut Shortcut'];
let countdown;
function randomTopic(){
 document.getElementById('topic').innerText=topics[Math.floor(Math.random()*topics.length)];
}
function startTimer(){
 clearInterval(countdown);
 let time=60;
 update(time);
 countdown=setInterval(()=>{
   time--;
   update(time);
   if(time<=0){
      clearInterval(countdown);
      alert('⏰ HẾT GIỜ!');
   }
 },1000);
}
function update(t){
 const m=String(Math.floor(t/60)).padStart(2,'0');
 const s=String(t%60).padStart(2,'0');
 document.getElementById('timer').innerText=`${m}:${s}`;
}
