import React from 'react'
import { Container } from 'react-bootstrap';
import Logo from './assests/bg.png'
const AUTH_URL="https://accounts.spotify.com/authorize?client_id=7125cdc23b434d778a1be48a2e3ae701&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
export default function Login() {
    return (
        <div style={{backgroundImage:`url(${Logo})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute" , minHeight:"100vh",width:"100%"}}>
      <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh",width:"100%" }}>
  <a className="btn btn-success btn-lg " style={{backgroundColor:"#1DB954"}} href={AUTH_URL}>
      Login with Spotify
  </a>

      </Container>
      </div>
    )
}
 