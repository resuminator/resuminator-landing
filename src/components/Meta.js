import React from "react"
import { Helmet } from "react-helmet"

const Meta = () => {
  const socialBanner =
    "https://user-images.githubusercontent.com/30192068/106096565-d649a180-615b-11eb-932b-7cd08eae86a9.png"
  return (
    <Helmet title="Resuminator: Beautiful Single-Page Resumes">
      <meta name="publish_date" property="publish_date" content="2021-01-03"/>
      <meta name="author" content="Vivek Nigam"/>
      <meta
        name="title"
        content="Resuminator: Beautiful Single-Page Resumes; without the hassle!"
      />
      <meta
        name="description"
        content="Build beautiful single-page resumes; without the hassle! Enter your details quickly and download an awesome single-page resume in minutes! 🤩"
      />

      <meta name="publish_date" property="og:publish_date" content="2021-01-03"/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://resuminator.in/" />
      <meta
        name="title"
        property="og:title"
        content="Resuminator: Beautiful Single-Page Resumes; without the hassle!"
      />
      <meta
        name="description"
        property="og:description"
        content="Build beautiful single-page resumes; without the hassle! Enter your details quickly and download an awesome single-page resume in minutes! 🤩"
      />
      <meta name="image" property="og:image" content={socialBanner} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://resuminator.in/" />
      <meta
        property="twitter:title"
        content="Resuminator: Beautiful Single-Page Resumes"
      />
      <meta
        property="twitter:description"
        content="Build beautiful single-page resumes; without the hassle! Enter your details quickly and download an awesome single-page resume in minutes! 🤩"
      />
      <meta property="twitter:image" content={socialBanner}></meta>
    </Helmet>
  )
}

export default Meta
