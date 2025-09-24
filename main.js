function addSampleMerch() {
  const div = document.getElementById('merch-gallery');
  const item = document.createElement('div');
  item.innerHTML = "<p>🔥 Sample T-shirt</p>";
  div.appendChild(item);
}

function showGuildDetails() {
  const sel = document.getElementById('stateSelector');
  const info = document.getElementById('guild-info');
  if(sel.value==="RJ") info.innerHTML="Guild: TIGER CLAW RJ – Rajasthan Top Players";
  if(sel.value==="MH") info.innerHTML="Guild: TIGER CLAW MH – Maharashtra Squad";
  if(sel.value==="DL") info.innerHTML="Guild: TIGER CLAW DL – Delhi Domination";
}