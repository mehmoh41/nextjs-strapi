import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <meta name='application-name' content='Componentity App' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Componentity App' />
          <meta name='description' content='Best Componentity PWA App in the world' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
          <link rel='shortcut icon' href='/favicon.ico' />
        </Head>
        <body className='dark:bg-gray-900 dark:text-gray-50'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument