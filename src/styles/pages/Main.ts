import { styled } from "..";

export const MainContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  margin: '0px 200px',

  img: {
    width: '35%',
  }
})

export const ContentContainer = styled('div', {

})
export const Title = styled('div', {
  fontSize: '$5xl',
  fontWeight: '700',
})
export const SubTitle = styled('div', {
  fontSize: '$lg',
  lineHeight: 1.3,
  color: '$gray500',
  margin: '50px 0px',
})
export const Button = styled('div', {
  width: '150px',
  height: '50px',
  background: '$black100',
  color: '$white100',
  borderRadius: 8,
  fontSize: '$md',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',   
})
export const  Options = styled('div', {
  marginTop: '50px',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '40px',
  img: {
    width: '15%',
  }
})
