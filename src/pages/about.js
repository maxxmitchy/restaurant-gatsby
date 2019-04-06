import React from "react"

import Layout from "../components/layout"
import aboutImg from '../images/bcg/aboutBcg.jpeg'
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
const AboutPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <PageHeader img={aboutImg}><Banner title="about us" subtitle="About max's eatery?"></Banner></PageHeader>
    </Layout>
)

export default AboutPage
