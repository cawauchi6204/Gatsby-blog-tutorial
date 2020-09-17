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
            }
          }
    }
    `)

    const title = props.pagetitle || data.site.siteMetadata.title

    const description = props.pagedesc || data.site.siteMetadata.title

    const url = props.pagepath ? `${data.site.siteMetadata.siteUrl}${props.pagepath}` : data.site.siteMetadata.siteUrl
    return (
        <Helmet>
            <html lang={data.site.siteMetadata.lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonial" href={url} />
        </Helmet>
    )
}
