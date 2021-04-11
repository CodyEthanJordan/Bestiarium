import styled from 'styled-components'

import {monsters} from '../SampleData/monsters'
import {sizes} from '../SampleData/sizes'
import {types} from '../SampleData/types'

import MainStats from './statCats/MainStats'
import Defense from './statCats/Defense'
import Offense from './statCats/Offense'
import Statistics from './statCats/Statistics'
import Special from './statCats/Special'
import Ecology from './statCats/Ecology'

const CenterPage = styled.div`
    display:flex;
    justify-content: center;
`
const Page = styled.div`
    width: 50%;
`
const FlexDiv = styled.div`
    display: flex;
`
const Text = styled.p``
const NameDiv = styled(FlexDiv)``
const Name = styled.input``
const UniqueCheck = styled.input``
const TypeSizeDiv = styled(FlexDiv)``
const Type = styled.select``
const Size = styled.select``
const HDDiv = styled(FlexDiv)``
const Number = styled.input``
const StatsDiv = styled.div``
const StatDiv = styled(FlexDiv)``
const EditHP = styled.button``

const NameAndAttackDiv = styled(FlexDiv)`
    background-color: #CFE2F3;
    font-size: 2rem;
    font-weight: bold;
    justify-content: space-between;
`
const NAADTitle = styled.h2``
const NAADDetail = styled.h3``


const MainComponent = () => {

    // console.log(types)

    return (
        <CenterPage>
        <Page>
            {/* <NameDiv>
                <Text>Name:</Text>
                <Name
                    type="text"
                    placeholder="Dragon"
                    name="name"
                    value= {monsters[0].name}
                />
                <Text>Unique?</Text>
                <UniqueCheck
                    type="checkbox"
                    name="unique"
                />
            </NameDiv>
            <TypeSizeDiv>
                <Text>Type:</Text>
                <Type
                    name="type"
                >
                    <option value=''>---Select---</option>
                    {types.map(type => {
                        return (
                            <option value={type.name}>
                                {type.name}
                            </option>
                        )
                    })}
                </Type>
                <Text>Size:</Text>
                <Size
                    name="size"
                    value={monsters[0].size}
                >
                    <option value=''>---Select---</option>
                    {sizes.map(size => {
                        return (
                            <option value={size.name}>
                                {size.name}
                            </option>
                        )
                    })
                    }
                </Size>
            </TypeSizeDiv>
            <HDDiv>
                <Text>HD:</Text>
                <Number
                    type="number"
                    name="HD"
                    placeholder="HD number"
                    min="0"
                />
            </HDDiv>
            <StatsDiv>
                <StatDiv>
                    <Text>Str</Text>
                    <Number
                        type="number"
                        name="strength"
                        placeholder="4"
                        min="0"
                        value= {monsters[0].abilityScores.str}
                    />
                <Text>[Weak to legendary scale button presets]</Text>
                </StatDiv>
                <StatDiv>
                    <Text>Dex</Text>
                    <Number
                        type="number"
                        name="dexterity"
                        placeholder="4"
                        min="0"
                        value= {monsters[0].abilityScores.dex}
                    />
                <Text>[Weak to legendary scale button presets]</Text>
                </StatDiv>
                <StatDiv>
                    <Text>Con</Text>
                    <Number
                        type="number"
                        name="constitution"
                        placeholder="4"
                        min="0"
                        value= {monsters[0].abilityScores.con}
                    />
                <Text>[Weak to legendary scale button presets]</Text>
                </StatDiv>
                <StatDiv>
                    <Text>Int</Text>
                    <Number
                        type="number"
                        name="intelligence"
                        placeholder="4"
                        min="0"
                        value= {monsters[0].abilityScores.int}
                    />
                <Text>[Weak to legendary scale button presets]</Text>
                </StatDiv>
                <StatDiv>
                    <Text>Wis</Text>
                    <Number
                        type="number"
                        name="wisdom"
                        placeholder="4"
                        min="0"
                        value= {monsters[0].abilityScores.wis}
                    />
                <Text>[Weak to legendary scale button presets]</Text>
                </StatDiv>
                <StatDiv>
                    <Text>Cha</Text>
                    <Number
                        type="number"
                        name="charisma"
                        placeholder="4"
                        min="0"
                        value= {monsters[0].abilityScores.cha}
                    />
                <Text>[Weak to legendary scale button presets]</Text>
                </StatDiv>
                <StatDiv>
                    <Text>{monsters[0].HP.value}</Text>
                    <EditHP>Edit</EditHP>
                </StatDiv>
            </StatsDiv>
            <Text>
                HD(avg die + const modifier)
            </Text>
            <Text>
                Ex. Dragon has D10 HD - 6HD dragon has 6x (5.5+const modifier) HP
            </Text> */}

            <NameAndAttackDiv>
                <NAADTitle>Balor</NAADTitle>
                <NAADDetail>CR 20</NAADDetail>
            </NameAndAttackDiv>

            <MainStats/>
            <Defense/>
            <Offense/>
            <Statistics/>
            <Special/>
            <Ecology/>

        </Page>
        </CenterPage>
    )
}

export default MainComponent