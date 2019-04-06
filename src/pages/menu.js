import React from "react"

import Layout from "../components/layout"
import menuImg from "../images/bcg/menuBcg.jpeg"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Menu</h3>
    <PageHeader img={menuImg}>
      <Banner title="menu" subtitle={`let's dig in`} />
    </PageHeader>
  </Layout>
)

export default MenuPage
