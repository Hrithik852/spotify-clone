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
    z.play();
  }
});

})})
 document.querySelector(".player").addEventListener('click',()=>{
    z.play()
  }) 
}
function createCard(name,id){
    // 1. Create the main container div
const cardDiv = document.createElement('div');
cardDiv.className = 'card';
cardDiv.setAttribute("data-id",`${id}`)
// 2. Create the image element
const img = document.createElement('img');
img.height = 171;
img.width = 171;
img.src = 's1.avif';
img.alt = 'Album Art'; // It's good practice to add a descriptive alt text

// 3. Create the heading
const h3 = document.createElement('h3');
h3.textContent = `${name}`;

// 4. Create the paragraph
const p = document.createElement('p');
p.textContent = 'Artist Name';

// 5. Append all elements to the card div
cardDiv.appendChild(img);
cardDiv.appendChild(h3);
cardDiv.appendChild(p);

document.querySelector(".songs-container").appendChild(cardDiv)
}
main()
