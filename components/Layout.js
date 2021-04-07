
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"
import Image from "next/image"

Router.onRouteChangeStart=url=>{
   
    NProgress.start();
}
Router.onRouteChangeComplete=()=>NProgress.done();

Router.onRouteChangeError=()=>NProgress.done();

const Layout=({children,title})=>(
    <div className="root">
        <Head>
            <title>Saberlyn Company Limited</title>
           
        </Head>
        <header>
        <Link href="/">
        <Image
        src="/saberlyn.jpg"
        alt="us working"
        width={200}
        height={40}
       
      />
            </Link> &nbsp;
       <Link href="/">Home</Link> &nbsp;
        <Link href="/about">About</Link> &nbsp;
        <Link href="/products">Products</Link> &nbsp;
        <Link href="/contacts">Contacts</Link> 
        </header>
        <h1>{title}</h1>
        {children}
        <footer>
        &copy; {new Date().getFullYear()}  Saberlyn Company Limited
        <p>Mechanical,Civil and Electrical Engineering Experts</p>
        </footer>

        <style jsx>
        {`
       .root{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
       }
       header{
           width:100%;
           display:flex;
           justify-content:center;
           padding:1em;
           font-size:1.2rem;
           background:lightblue;
       }
       header a{
           color:darkgrey;
           text-decoration:none;
       }
       header a:hover{
           font-weight:bold;
           color:lightgrey
       }
       footer{
           padding: 1em;
       }
        `}
        </style>
        <style global jsx>
            {`
            body{
                margin:0;
                font-size:110%;
                background:#f0f0f0
            }
            `}
        </style>
    </div>
)
export default Layout;