import React from "react"
import img from "../images/bcg/homeBcg.jpeg"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import QuickInfo from "../components/HomePageComponent/QuickInfo"
import Gallery from "../components/HomePageComponent/Gallery-1"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Max eatery" subtitle="26, chitis way off zoo road, UNN">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
