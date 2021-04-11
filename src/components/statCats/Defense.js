import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    margin: 1rem 0;
    font-size: 1.2rem;
`
const Title = styled.h2`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    font-variant: small-caps;
    padding: .25rem 0;
    margin-bottom: .5rem;
`
const Data = styled.p`
    margin: .25rem 0;
`
const BoldText = styled.span`
    font-weight: bold;
`

const Defense = () => {
    return (
        <Page>
            <Title>Defense</Title>
            <Data>
                <BoldText>AC </BoldText>
                36, touch 20, flat-footed 29, (+4 deflection, +7 <a href="">Dex</a>, +16 <a href="">natural</a>, -1 size)
            </Data>

            <Data>
                <BoldText>hp </BoldText>
                370 (20d10+260)
            </Data>

            <Data>
                <BoldText>Fort </BoldText>+29, <BoldText>Ref </BoldText>+17, <BoldText>Will </BoldText>+25
            </Data>

            <Data>
                <BoldText>DR </BoldText>15/cold iron and good; <BoldText>Immune </BoldText>electricity, fire, poison; <BoldText>Resist </BoldText>acid 10, cold 10; <BoldText>SR </BoldText>31
            </Data>
        </Page>
    )
}

export default Defense