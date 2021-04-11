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
const Abilities = styled.div`
    margin-left: 1rem;
`

const Offense = () => {
    return (
        <Page>
            <Title>Offense</Title>

            <Data>
                <BoldText>Speed </BoldText>
                40 ft., fly 90 ft. (good)
            </Data>

            <Data>
                +1 <a href=""><em>vorpal</em></a> <a href=""><em>unholy</em></a> <em>longsword</em> +31/+26/+21+/16 (2d6+13), +1 <a href=""><em>vorpal</em></a> <a href=""><em>flaming</em></a> <em>whip</em> +30/+25/+20 (1d4+7 plus 1d6 fire and <a href="">entangle</a>) or 2 slams +31 (1d10+12)
            </Data>

            <Data>
                <BoldText>Space </BoldText>10 ft.; <BoldText>Reach </BoldText>10 ft. (20 ft. with whip)
            </Data>

            <Data>
                <BoldText>Spell-Like Abilities </BoldText>
                (CL 20th)
            </Data>

            <Abilities>
                <Data>
                    <BoldText>Constant</BoldText>-<a href=""><em>true seeing</em></a>, <a href=""><em>unholy aura</em></a> (DC 26)
                </Data>

                <Data>
                    <BoldText>At will</BoldText>-<a href=""><em>dominate monster</em></a> (DC 27), <a href=""><em>greater dispel magic</em></a>, <a href=""><em>greater teleport</em></a> (self plus 50 lbs. of objects only), <a href=""><em>power word stun</em></a>, <a href=""><em>telekinesis</em></a> (DC 23)
                </Data>

                <Data>
                    <BoldText>3/day</BoldText>-quickened <a href=""><em>telekinesis</em></a> (DC 23)
                </Data>

                <Data>
                    <BoldText>1/day</BoldText>-<a href=""><em>blasphemy</em></a> (DC 25), <a href=""><em>fire storm</em></a> (DC 26), <a href=""><em>implosion</em></a> 
                    (DC 27), <a href="">summon</a> (level 9, any 1 CR 19 or lower demon 100%)
                </Data>
            </Abilities>
        </Page>
    )
}

export default Offense