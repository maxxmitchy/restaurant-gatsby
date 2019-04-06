import React from "react"

import Layout from "../components/layout"
import contactImg from "../images/bcg/contactBcg.jpeg"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>contact</h3>
    <PageHeader img={contactImg}>
      <Banner title="contact us" subtitle="Make sure we get in touch!" />
    </PageHeader>
  </Layout>
)

export default ContactPage
