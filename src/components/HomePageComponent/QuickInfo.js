import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"
export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our message" />
        <QuickInfoWrapper>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo reiciendis voluptatibus distinctio blanditiis dolorum est culpa exercitationem, veritatis ducimus perspiciatis, maiores autem dolores minus qui animi, veniam atque! Odio quasi eos nesciunt iste, ad expedita. Nam nisi quia possimus suscipit animi odio rem rerum laborum impedit adipisci voluptate accusamus harum voluptatibus inventore at, totam voluptas officia asperiores dolor corrupti sapiente!</p>
        <Link to="/about/" style={{textDecoration: 'none'}}></Link>  
        <SectionButton style={{margin:'2rem auto'}}>about</SectionButton>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`