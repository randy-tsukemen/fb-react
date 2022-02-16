import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'

export default function Home({ session }) {
  if (!session) return <Login />
  return (
    <div className="">
      <Head>
        <title>Facebook yt</title>
      </Head>
      {/* Header */}
      <Header />
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user's session
  const session = await getSession(context)
  return {
    props: {
      session,
    },
  }
}
