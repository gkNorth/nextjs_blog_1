import Head from "next/head";
import Link from "next/link";
import Image from "next/Image"

export default ({ children, title = "HP by Nextjs" }) => {
  const navList = [
    { id: 1, title: 'Home', href: '/' },
    { id: 2, title: 'Blog', href: '/blog-page' },
    { id: 3, title: 'Contact', href: '/contact-page' }
  ]
  return (
    <div className="flex justify-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-100">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              {navList.map( navItem => {
                return (
                  <Link href={navItem.href} key={navItem.id}>
                    <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                      {navItem.title}
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-100">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}