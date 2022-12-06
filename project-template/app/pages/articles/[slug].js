import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout.js'
import { supabase } from '../api/supabase'

export default function Article({
  article
}) {
  return (
    <Layout>
      <Head>
        <title>WebTech - {article.title}</title>
        <meta name="description" content="WebTech articles page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title'>
        {article.title}
      </h1>
      <p className="italic my-5">This page fetches data at build time, excellent for SEO.</p>
      <p>
        {article.message}
      </p>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  let article = {}
  let { data, error, status } = await supabase
    .from('articles')
    .select(`id, slug, message, title`)
    .eq('slug', ctx.params.slug)
    .single()
  if (!error) article = data // handle errors
  return {
    props: {
      article: article
    }
  };
}

export async function getStaticPaths(ctx) {
  let articles = []
  let { data, error, status } = await supabase
    .from('articles')
    .select(`slug`)
  if (!error) articles = data // handle errors
  return {
    paths: articles.map( article => `/articles/${article.slug}`),
    fallback: false
  };
}
