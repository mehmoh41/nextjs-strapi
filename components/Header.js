import Head from 'next/head'

export default function Header({heading , title}) {
    return (
        <>
            <Head>
                <title>{title}{heading}</title>
            </Head>
        </>
    );
}