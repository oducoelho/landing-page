import { Button, ContentContainer, MainContainer, MobileImage,  Options, SubTitle, Title } from "../styles/pages/Main"

import DesktopImage from '../assets/image-hero-desktop.png'
import HeroImageMobile from '../assets/image-hero-mobile.png'
import ClientItem1 from '../assets/client-databiz.svg'
import ClientItem2 from '../assets/client-audiophile.svg'
import ClientItem3 from '../assets/client-meet.svg'
import ClientItem4 from '../assets/client-maker.svg'

export const Main = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <Title>Make <p>remote work</p></Title>
        <SubTitle>
          Get your in sync, no matter your location. <p>Streamline processes, create team rituals, and</p> watch productivity soar.
        </SubTitle>
        <Button>Learn more</Button>
        <Options>
          <img src={ClientItem1} alt="" />
          <img src={ClientItem2} alt="" />
          <img src={ClientItem3} alt="" />
          <img src={ClientItem4} alt="" />
        </Options>
      </ContentContainer>
      <img src={DesktopImage} alt="" />
      <MobileImage>
        <img src={HeroImageMobile} alt="" />
      </MobileImage>
    </MainContainer>  
  )
}