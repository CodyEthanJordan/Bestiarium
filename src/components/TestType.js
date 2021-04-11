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
const TopDiv = styled.div`
    display: flex;
    align-items: flex-start;
    width: 50%;
    justify-content: space-between;
`
const Abilities = styled.div`
    margin-left: 1rem;
`
const SATitle = styled.h2`
    background-color: #CFE2F3;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    font-weight: bold;
`
const MainMonsterDeet = styled.div`
    display: flex;
    align-items: flex-start;
`
const Monster = styled.h1`
    font-size: 4rem;
`
const MonsterMainDetail = styled.h2`
    font-size: 2rem;
`
const MainStatDiv = styled(Page)`
    border: 1px solid black;
    margin: 0;
`
const SideDivs = styled.div`
    display: flex;
`
const DefStat = styled(MainStatDiv)`
    display: flex;
    flex-direction: column;
    width: 35vw;
    justify-content: space-around;
`
const Defense = styled(MainStatDiv)``
const Stat = styled(MainStatDiv)``
const OffSp = styled(DefStat)`
    width:65vw;
`
const Offense = styled(MainStatDiv)``
const Special = styled(MainStatDiv)``
const Ecology = styled.div``

const TestType = () => {
    return (
        <Page>

            <TopDiv>
                <MainMonsterDeet>
                    <Monster>Balor</Monster>
                    <MonsterMainDetail>CR 20</MonsterMainDetail>
                </MainMonsterDeet>
            
                <MainStatDiv>
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
                </MainStatDiv>
            </TopDiv>

            <SideDivs>
                <DefStat>
                    <Defense>
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
                    </Defense>

                    <Stat>
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
                    </Stat>
                </DefStat>

                <OffSp>
                    <Offense>
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
                    </Offense>

                    <Special>
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
                    </Special>
                </OffSp>
            </SideDivs>

            <Ecology>
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
            </Ecology>

        </Page>
    )
}

export default TestType