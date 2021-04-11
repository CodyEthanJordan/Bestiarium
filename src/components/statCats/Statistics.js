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

const Statistics = () => {
    return (
        <Page>
            <Title>Statistics</Title>

            <Data>
                <BoldText>Str </BoldText>35, <BoldText>Dex </BoldText>25, <BoldText>Con </BoldText>36, <BoldText>Int </BoldText>24, <BoldText>Wis </BoldText>24, <BoldText>Cha </BoldText>27
            </Data>

            <Data>
                <BoldText>Base Atk </BoldText>+20; <BoldText>CMB </BoldText>+33; <BoldText>CMD </BoldText>54
            </Data>

            <Data>
                <BoldText>Feats </BoldText><a href="">Cleave</a>, <a href="">Combat Reflexes</a>, <a href="">Greater Two-Weapon Fighting</a>, <a href="">Improved Initiative</a>, <a href="">Improved Two-Weapon Fighting</a>, <a href="">Iron Will</a>, <a href="">Power Attack</a>, <a href="">Quicken Spell-Like Ability <em>(telekinesis)</em></a>, <a href="">Two-Weapon Fighting</a>, <a href="">Weapon Focus</a> (longsword)
            </Data>

            <Data>
                <BoldText>Skills </BoldText><a href="">Acrobatics</a> +27, <a href="">Bluff</a> +31, <a href="">Diplomacy</a> +31, <a href="">Fly</a> +32, <a href="">Intimidate</a> +31, <a href="">Knowledge</a> (history) +27, <a href="">Knowledge</a> (nobility) +27, <a href="">Knowledge</a> (planes) +30, <a href="">Knowledge</a> (religion) +27, <a href="">Perception</a> +38, <a href="">Sense Motive</a> +30, <a href="">Stealth</a> +26, <a href="">Use Magic Device</a> +31; <BoldText>Racial Modifiers </BoldText>+8 <a href="">Perception</a>
            </Data>

            <Data>
                <BoldText>Languages </BoldText>Abyssal, Celestial, Draconic; <a href="">telepathy</a> 100ft.
            </Data>

            <Data>
                <BoldText>SQ </BoldText>death throes, vorpal strike, whip mastery
            </Data>
        </Page>
    )
}

export default Statistics