import Link from "next/link";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>NAV</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="about">
        <a>About</a>
      </Link>
      <Link href="contact">
        <a>Contact</a>
      </Link>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
