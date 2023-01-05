import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const handlePost =()=>{
    router.push("/posts")
  }
  const productsp  = [
    {
      id: 1,
      tittle: "Welcome to Onix Digital 1",
      subtitle: "Build <em>your website</em> the best in <span>SEO</span>?",
      desc: "This is a professional looking HTML Bootstrap 5 website template brought to you by TemplateMo website.",
      buttonOneLink: "#contact",
      buttonOneText: "Message Us Now",
      buttonOneIcon: "fa fa-phone",
      buttonTwoLink: "#call",
      buttonTwoText: "010-020-0340",
      buttonTwoIcon: "fa fa-phone"
    },
    {
      id: 2,
      tittle: "Welcome Digital Service Lab",
      subtitle: "Build <em>your website</em> the best in <span>SEO</span>?",
      desc: "This is a professional looking HTML Bootstrap 5 website template brought to you by TemplateMo website.",
      buttonOneLink: "#contact",
      buttonOneText: "Message Us Now",
      buttonOneIcon: "fa fa-phone",
      buttonTwoLink: "#call",
      buttonTwoText: "010-020-0340",
      buttonTwoIcon: "fa fa-phone"
    },
    {
      id: 3,
      tittle: "Welcome to Onix Digital 3",
      subtitle: "Build <em>your website</em> the best in <span>SEO</span>?",
      desc: "This is a professional looking HTML Bootstrap 5 website template brought to you by TemplateMo website.",
      buttonOneLink: "#contact",
      buttonOneText: "Message Us Now",
      buttonOneIcon: "fa fa-phone",
      buttonTwoLink: "#call",
      buttonTwoText: "010-020-0340",
      buttonTwoIcon: "fa fa-phone"
    }
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <Link href={"/"}><h1>home page</h1></Link>
       <Link href={"/blog"}><h1>blog page</h1></Link>
       <Link href={"/docs"}><h1>docs page</h1></Link>
       <input type={"text"}/>
      <button onClick={handlePost}>got to post</button>

      </main>
    </>
  )
}
