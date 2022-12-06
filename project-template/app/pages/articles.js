import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { supabase } from './api/supabase'

export default function Articles({
  articles
}) {
  return (
    <Layout>
      <Head>
        <title>WebTech - articles</title>
        <meta name="description" content="WebTech articles page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title'>
        Web technologies articles
      </h1>
      <p className="italic my-5">This page fetches data at build time, excellent for SEO.</p>
      <ul>
        {articles.map( article => (
          <li key={article.slug} className="my-5">
            <h2 className="font-bold mb-1"><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
            <p>{article.message}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  let articles = []
  let { data, error, status } = await supabase
    .from('articles')
    .select(`id, slug, message, title`)
  if (!error) articles = data // handle errors
  return {
    props: {
      articles: articles
    }
  };
}
