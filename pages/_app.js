import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        {/* <Component /> represents each route's content */}
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
