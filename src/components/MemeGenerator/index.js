import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  MemeContainer,
  FormAndMemeContainer,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontsizeOptionId = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state
    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state
    return (
      <MemeGeneratorForm onSubmit={this.onGeneratorMeme}>
        <CustomLabel htmlFor="backgroundImageUrl">Image URL</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImageUrl"
          onChange={this.onChanegBackgroundImage}
          value={backgroundImageUrlInput}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          value={topTextInput}
          placeholder="Enter the Top Text"
          onChange={this.onChangeTopTextInput}
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          value={bottomTextInput}
          placeholder="Enter the Bottom Text"
          onChange={this.onChangeBottomTextInput}
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChaneFontSizeOptionId}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>

        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {backgroundImageUrl, topText} = this.state
    const {bottomText, activeFontSizeId} = this.state
    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renederMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
