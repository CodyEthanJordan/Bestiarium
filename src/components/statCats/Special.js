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
const SATitle = styled.h2`
    background-color: #CFE2F3;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    font-weight: bold;
`

const Special = () => {
    return (
        <Page>
            <Title>Special Abilities</Title>

            <SATitle>Death Throes (Su)</SATitle>
            <Data>
            When killed, a balor explodes in a blinding flash of fire that deals 100 points of damage (half fire, half unholy damage) to anything within 100 feet (Reflex DC 33 halves). The save DC is Constitution-based.
            </Data>

            <SATitle>Entangle (Ex)</SATitle>
            <Data>
            If a balor strikes a Medium or smaller foe with its whip, the balor can immediately attempt a grapple check without provoking an attack of opportunity. If the balor wins the check, it draws the foe into an adjacent square. The foe gains the grappled condition, but the balor does not.
            </Data>

            <SATitle>Flaming Body (Su)</SATitle>
            <Data>
                A balor’s body is covered in dancing flames. Anyone striking a balor with a natural weapon or unarmed strike takes 1d6 points of fire damage. A creature that grapples a balor or is grappled by one takes 6d6 points of fire damage each round the grapple persists.
            </Data>
            
            <SATitle>Vorpal Strike (Su)</SATitle>
            <Data>
                Any slashing weapon a balor wields (including its standard longsword and whip) gains the vorpal weapon quality. Weapons retain this quality for one hour after the balor releases the weapon, but after this the weapon reverts to its standard magical qualities, if any.
            </Data>
            
            <SATitle>Whip Mastery (Ex)</SATitle>
            <Data>
                A balor treats a whip as a light weapon for the purposes of two-weapon fighting, and can inflict lethal damage on a foe regardless of the foe’s armor.
            </Data>

        </Page>
    )
}

export default Special