import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    margin: 1rem 0;
    font-size: 1.2rem;
`
const Data = styled.p`
    margin: .25rem 0;
`
const BoldText = styled.span`
    font-weight: bold;
`

const MainStats = () => {
    return (
        <Page>
            <Data>
                <BoldText>XP </BoldText>
                <BoldText>307,200</BoldText>
            </Data>

            <Data>
                CE Large outsider (<a href="">chaotic,</a> <a href="">demon,</a> <a href="">evil,</a> <a href="">extraplanar</a>)
            </Data>

            <Data>
                <BoldText>Init </BoldText>
                +11; 
                <BoldText>Senses </BoldText>
                <a href="">darkvision</a> 60 ft., low-light vision, <a href="">true seeing;</a> <a href="">Perception</a> +38
            </Data>

            <Data>
                <BoldText>Aura </BoldText>
                flaming body, <a href=""><em>unholy aura</em></a> (DC 26)
            </Data>
        </Page>
    )
}

export default MainStats