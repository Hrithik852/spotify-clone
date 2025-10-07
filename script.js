console.log("hello")
async function main()
{
  let x =await fetch("https://api.github.com/repos/Hrithik852/spotify-clone/contents/songs?ref=master");
  let y=await x.text()
  console.log(y);
  let parse=JSON.parse(y)
  console.log(parse);
  
  let len=parse.length;
  console.log(len);
  console.log(parse[0].path);
  let z=new Audio(`${parse[0].path}`);
  for(let i=0;i<len;i++)
  {
  parse[i].id=i;

  }
parse.forEach(element => {
  createCard(element.name,element.id)
});


document.querySelectorAll(".card").forEach((elm)=>{elm.addEventListener("click",(e)=>{
z.pause();
let div=e.currentTarget;
  console.log(div);
parse.forEach(element => {
  if(element.id==div.getAttribute('data-id')){
    z=new Audio(`${element.download_url}`);
    if(play_pause.classList.contains("play"))
    z.play();

  }
});

})})
let play_pause = document.querySelector(".play-pause");
play_pause.addEventListener("click",()=>{
play_pause.classList.toggle("play");
if(play_pause.classList.contains("play")){
  z.play()}
else{ z.pause();}
})

}
function createCard(name,id){
const cardDiv = document.createElement('div');
cardDiv.className = 'card';
cardDiv.setAttribute("data-id",`${id}`)
const img = document.createElement('img');
img.height = 171;
img.width = 171;
img.src = 's1.avif';

const h3 = document.createElement('h3');
h3.textContent = `${name}`;

const p = document.createElement('p');
p.textContent = 'Artist Name';

cardDiv.appendChild(img);
cardDiv.appendChild(h3);
cardDiv.appendChild(p);
document.querySelector(".songs-container").appendChild(cardDiv)
}
main()
