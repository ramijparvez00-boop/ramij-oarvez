const photoFiles = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg"
];

const gallery = document.getElementById("gallery");
const galleryNote = document.getElementById("galleryNote");

if (photoFiles.length) {
  galleryNote.style.display = "none";
  photoFiles.forEach(file => {
    const img = document.createElement("img");
    img.src = `assets/${file}`;
    img.alt = "A memory of Nadra and Rameez";
    img.loading = "lazy";
    img.addEventListener("click", () => {
      const viewer = document.createElement("div");
      viewer.className = "photo-viewer";
      viewer.innerHTML = `<img src="${img.src}" alt="A memory of Nadra and Rameez"><button aria-label="Close photo">×</button>`;
      viewer.addEventListener("click", (e) => { if (e.target === viewer || e.target.tagName === "BUTTON") viewer.remove(); });
      document.body.appendChild(viewer);
    });
    gallery.appendChild(img);
  });
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
let musicStarted = false;

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try { await music.play(); musicStarted = true; musicBtn.textContent = "❚❚"; }
    catch(e) { alert("Add your own MP3 as assets/song.mp3, then tap the music button again."); }
  } else {
    music.pause();
    musicBtn.textContent = "♪";
  }
});

document.body.addEventListener("click", async () => {
  if (!musicStarted && music.querySelector("source").src) {
    try { await music.play(); musicStarted = true; musicBtn.textContent = "❚❚"; } catch(e) {}
  }
}, {once:true});

document.getElementById("cakeBtn").addEventListener("click", () => {
  document.getElementById("flame").textContent = "✨";
  document.getElementById("wish").textContent = "Make a beautiful wish, Nadra… ❤️";
  confetti();
});

function confetti(){
  const symbols = ["💖","✨","🎉","💕","🌸"];
  for(let i=0;i<55;i++){
    const el=document.createElement("div");
    el.className="heart";
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=Math.random()*100+"vw";
    el.style.fontSize=(12+Math.random()*20)+"px";
    el.style.animationDuration=(3+Math.random()*4)+"s";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),8000);
  }
}

setInterval(()=>{
  const el=document.createElement("div");
  el.className="heart";
  el.textContent=["♥","♡","✦"][Math.floor(Math.random()*3)];
  el.style.left=Math.random()*100+"vw";
  el.style.color="#ff8fbe";
  el.style.fontSize=(12+Math.random()*15)+"px";
  el.style.animationDuration=(5+Math.random()*4)+"s";
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),9000);
},900);
