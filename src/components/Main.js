import styled from 'styled-components'

const Page = styled.div``
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

const samplecreature = {
    "hitdie": 10,
    "type": "dragon",
    "size": {
        "size": "small",
        "modifier": .5
    }
}

// const types = {
//     [
//         name: dragon,
//         modifier: 4
//     ]
// }

const Main = () => {

    return (
        <Page>
            <NameDiv>
                <Text>Name:</Text>
                <Name
                    type="text"
                    placeholder="Dragon"
                    name="name"
                    value= {samplecreature.type}
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
                </Type>
                <Text>Size:</Text>
                <Size
                    name="size"
                >
                    <option value=''>---Select---</option>
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
                    />
                <Text>[Weak to legendary scale button presets]</Text>
                </StatDiv>
                <StatDiv>
                    <Text>HP (static number that can be changed)</Text>
                    <EditHP>Edit</EditHP>
                </StatDiv>
            </StatsDiv>
            <Text>
                HD(avg die + const modifier)
            </Text>
            <Text>
                Ex. Dragon has D10 HD - 6HD dragon has 6x (5.5+const modifier) HP
            </Text>
        </Page>
    )
}

export default Main