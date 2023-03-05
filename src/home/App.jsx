import { useState, useEffect } from 'react'
import { GetApi } from '../api/_api'
import { StyleGlobal } from '../styles/global'
import { Admin } from '../components/admin'
import { ComponentsLinks } from '../components/links'
import { Content, Home } from './style'
import { Loading } from '../components/loading'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaReact} from 'react-icons/fa'
function App() {
  //Mostrando dados em tela
  const [api, setApi] = useState()

  //Tratando a resposta dos dados
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  //Buscando dados da API do Github
  const getApiGithub = () => {
    GetApi()
    .then(({data}) => {
      setApi(data)
    })
    .catch(error => {
      console.log(error)
      setIsError(true)
    })
    .finally(
      setLoading(false)
    )
  }

  useEffect(() => {
    getApiGithub()
  }, [])

  return (
    <>
      <Home>
        <StyleGlobal />
        <Content>
          {loading && <Loading />}
          {isError && (
            <p>Erro ao carregar as informações.</p>
          )}
          {!loading && api && <Admin img={api.avatar_url} name={api.name} bio={api.bio}/>}
          <ComponentsLinks link={'https://www.instagram.com/vinih.io'} name={'Instagram'}icon={<FaInstagram />}/>
          <ComponentsLinks link={'https://web.facebook.com/profile.php?id=100065599075086'} name={'Facebook'} icon={<FaFacebook/>}/>
          <ComponentsLinks link={'https://www.linkedin.com/in/vin%C3%ADcius-henrique-machado-598435247'} name={'Linkedin'} icon={<FaLinkedin/>}/>
          <ComponentsLinks link={'https://github.com/GaaraSan01'} name={'Github'} icon={<FaGithub/>}/>
          <ComponentsLinks link={'https://myportifolio-ten.vercel.app/'} name={'Portifólio'} icon={<FaReact/>}/>
        </Content>
      </Home>
    </>
  )
}

export default App
