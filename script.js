popup = window.open(
    "https://accounts.spotify.com/authorize?client_id=4d291bcaed1146129a83651d3a2cf801&redirect_uri=https://vibrant-wescoff-46ee41.netlify.app/&response_type=code",
    'Login with Spotify',
    'width=800,height=600'
  )

  window.spotifyCallback = (payload) => {
    popup.close()
  
    fetch('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${payload}`
      }
    }).then(response => {
      return response.json()
    }).then(data => {
        console.log(data)
      // do something with data
    })
  }
  token = window.location.hash.substr(1).split('&')[0].split("=")[1]
  console.log(token)
  popup.close()

//if (token) {
 // window.opener.spotifyCallback(token)
  
//}
