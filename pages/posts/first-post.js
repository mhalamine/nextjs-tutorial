import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
    return (
      <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div className="container">
        <h1>First Post</h1>
        <p>
        go home <Link href="/"><a>Home</a></Link>
      </p>
      </div>
      </Layout>
    )
  }