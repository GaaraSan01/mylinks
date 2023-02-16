import { useState, useEffect } from 'react'
import { GetApi } from '../api/_api'
import { StyleGlobal } from '../styles/global'
import { Admin } from '../components/admin'
import { ComponentsLinks } from '../components/links'
import { Content, Home } from './style'
import { Loading } from '../components/loading'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaReact} from 'react-icons/fa'
function App() {
  const [api, setApi] = useState()

  useEffect(() => {
    GetApi()
    .then(response => {
      setApi(response.data)
    })
    .catch(error => console.log(error))
    
  }, [])

  return (
    <>
      <Home>
        <StyleGlobal />
        <Content>
          {api &&  <Admin img={api.avatar_url} name={api.name} bio={api.bio}/>}
          {!api && <Loading />}
          <ComponentsLinks link={'https://www.instagram.com/vinih.io'} name={'Instagram'}icon={<FaInstagram />}/>
          <ComponentsLinks link={'https://web.facebook.com/profile.php?id=100065599075086'} name={'Facebook'} icon={<FaFacebook/>}/>
          <ComponentsLinks link={'https://www.linkedin.com/in/vin%C3%ADcius-henrique-machado-598435247'} name={'Linkedin'} icon={<FaLinkedin/>}/>
          <ComponentsLinks link={'https://github.com/GaaraSan01'} name={'Github'} icon={<FaGithub/>}/>
          <ComponentsLinks link={'#'} name={'Portifólio'} icon={<FaReact/>}/>
        </Content>
      </Home>
    </>
  )
}

export default App
