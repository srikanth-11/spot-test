const clientId = '4d291bcaed1146129a83651d3a2cf801';
redirectURI='https://vibrant-wescoff-46ee41.netlify.app/'
async function it(){
   const it= fetch(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`)

   data=await it.json()
   console.log(data)
}
it()