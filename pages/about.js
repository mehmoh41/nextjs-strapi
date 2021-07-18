
import Link from 'next/link'



import  Header  from '../components/Header'
import  Footer  from '../components/Footer'
export default function About() {
  return (
    <>
      <main>
        <Header />
        <Link href="/">
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
      <Footer />
    </>
  );
}

