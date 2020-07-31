import {useEffect, useState} from 'react'

import Head from 'next/head'

import AppLayout from 'components/AppLayout'
import Button from 'components/Button'
import GitHub from 'components/Icons/GitHub'
import Avatar from 'components/Avatar'

import {onAuthStateChange, loginWithGitHub} from 'firebase/client'

import {colors} from 'styles/theme'

export default function Home() {
  const [user, setUser] = useState(undefined)

  console.log(user)

  const handleLoginGithub = async () => {
    loginWithGitHub().then(result => {
      const {credential, user} = result
      const {accessToken} = credential

      console.log(user, accessToken)
    })
  }

  useEffect(() => {
    onAuthStateChange(setUser)
  }, [])

  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <div>
          <img src='/devter-logo.png' />
          <h1>Devter</h1>
          <h2>Talk about development<br /> with developers 👨‍💻👩‍💻</h2>
          {
            user && <>
              <Avatar src={user.photoURL} />
              <span>Miguel Ángel Durán</span>
            </>
          }
          {
            user === null && 
            <Button onClick={handleLoginGithub}>
              <GitHub fill='#fff' height={32} width={32} />
              Login with GitHub
            </Button>
          }

        </div>
      </AppLayout>

      <style jsx>{`
        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 0;
        }

        h2 {
          color: ${colors.primary};
          font-size: 18px;
          margin-top: 8px;
          text-align: center;
        }

        img {
          width: 120px;
        }

        div {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
      `}</style>
    </>
  )
}
