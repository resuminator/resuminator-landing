import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({data}) => {
  return (
    <Helmet title="Resuminator | Beautiful Single-Page Resumes">
      <meta
        name="title"
        content="Resuminator | Beautiful Single-Page Resumes"
      />
      <meta
        name="description"
        content="Build beautiful single-page resumes; without the hassle! Enter your details quickly and download an awesome single-page resume in minutes! 🤩"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://resuminator.in/" />
      <meta
        property="og:title"
        content="Resuminator | Beautiful Single-Page Resumes"
      />
      <meta
        property="og:description"
        content="Build beautiful single-page resumes; without the hassle! Enter your details quickly and download an awesome single-page resume in minutes! 🤩"
      />
      <meta property="og:image" content={data.meta.childImageSharp.fixed} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://resuminator.in/" />
      <meta
        property="twitter:title"
        content="Resuminator | Beautiful Single-Page Resumes"
      />
      <meta
        property="twitter:description"
        content="Build beautiful single-page resumes; without the hassle! Enter your details quickly and download an awesome single-page resume in minutes! 🤩"
      />
      <meta property="twitter:image" content={data.meta.childImageSharp.fixed}></meta>
    </Helmet>
  )
}

export default Meta
