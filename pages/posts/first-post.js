import Link from 'next/link'

export default function FirstPost() {
    return (
      <div className="container">
        <h1>First Post</h1>
        <p>
        go home <Link href="/"><a>Home</a></Link>
      </p>
      </div>
    )
  }