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

const Ecology = () => {
    return (
        <Page>
            <Title>Ecology</Title>

            <Data>
                <BoldText>Environment </BoldText>
                any (Abyss)
            </Data>

            <Data>
                <BoldText>Organization </BoldText>
                solitary or warband (1 balor and 2-5 glabrezus)
            </Data>

            <Data>
                <BoldText>Treasure </BoldText>
                standard (<em>+1 <a href="">unholy</a> longsword, +1 <a href="">flaming</a> whip</em>, other treasure)
            </Data>

            <Data>
                When folk whisper frightened tales of the demonic, what most envision is a towering figure of fire and flesh, a horned nightmare armed with flaming whip and sword flying through the night in search of its latest victim. The demon these folk fear is the balor, and that fear is justly placed, for few demons can match the mighty balor in strength or brutality.
            </Data>
            
            <Data>
                On the Abyss, most balors serve demon lords as generals or captains (those balors who don’t are even more potent, and are known as balor lords—see below). A balor typically commands vast legions of demons, and while it often lets these slavering and eager minions fight its battles, the balor is far from a coward. If presented with an opportunity to join a fight, few balors choose to resist.
            </Data>
            
            <Data>
                In combat, a balor relies upon its spell-like abilities to fight foes wise enough to avoid melee range, favoring destructive powers like <a href=""><em>fire storm</em></a> or <a href=""><em>implosion</em></a> and saving <a href=""><em>dominate monster</em></a> for use against the rare foe it would prefer to capture alive. A balor usually uses <a href=""><em>telekinesis</em></a> to disarm ranged weapons or pull foes into melee—with the use of a quickened <a href=""><em>telekinesis</em></a>, a balor can use the latter tactic and still inflict a full-round attack on a hapless foe. A balor reduced to fewer than 50 hit points almost always seeks to flee via teleportation, but if that and flight prove impossible it seeks to position itself such that, if it is slain, its death throes are as devastating as possible to the enemy host.
            </Data>
            
            <Data>
                A balor stands 14 feet in height and weighs 4,500 pounds. Only the cruelest mortal souls can fuel the creation of a balor—unlike in the cases of most other demons, it often takes multiple souls of powerful villains to trigger the birthing of a new balor.
            </Data>

        </Page>
    )
}

export default Ecology