import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default props => {
    const data = useStaticQuery(graphql`
    query {
        site(siteMetadata: {}) {
            siteMetadata {
              description
              lang
              title
              siteUrl
              locale
            }
          }
    }
    `)

    const title = props.pagetitle || data.site.siteMetadata.title
    // a or b aがtrueならa,aがfalseならb

    const description = props.pagedesc || data.site.siteMetadata.title
    // a or b aがtrueならa,aがfalseならb

    const url = props.pagepath ? `${data.site.siteMetadata.siteUrl}${props.pagepath}` : data.site.siteMetadata.siteUrl
    return (
        // Helmetの中にseo情報を記載していく
        <Helmet>
            <html lang={data.site.siteMetadata.lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonial" href={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={data.site.siteMetadata.title} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta propery="og:locale" content={data.site.siteMetadata.locale} />
        </Helmet>
    )
}
