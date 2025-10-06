console.log("hello")
async function main()
{
  let x =await fetch("http://127.0.0.1:5500/songs/");
  let y=await x.text()
  console.log(y);
  let z=new Audio("/songs/all%20the%20stars.flac")
  z.play();
  z.pause()
}
main()