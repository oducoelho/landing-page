import { styled } from "..";

export const MainContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  margin: '0px 200px',
  img: {
    width: '35%',
  },
  '@media (max-width: 425px)': {
    display: 'flex',
    flexDirection: 'column-reverse',
    margin: '0px 20px',
    img: {
      display: 'none',
    },
  }
})
export const ContentContainer = styled('div', {
  paddingTop: '100px',
  '@media (max-width: 425px)': {
    paddingTop: '20px',
  }
})
export const Title = styled('div', {
  fontSize: '$5xl',
  fontWeight: '700',

  '@media (max-width: 425px)': {
    display: 'none',
  }
  
})
export const SubTitle = styled('div', {
  fontSize: '$lg',
  lineHeight: 1.3,
  color: '$gray500',
  margin: '50px 0px',
  '@media (max-width: 425px)': {
    display: 'none',
  }
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

  '&:hover': {
    background: 'none',
    border: '2px solid black',
    color: '$black100',
    cursor: 'pointer',

    transition: '300ms',
  },
  '@media (max-width: 425px)': {
    marginLeft: '110px',
  }
})
export const  Options = styled('div', {
  paddingTop: '100px',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '40px',

  img: {
    width: '15%',
  },
  '@media (max-width: 425px)': {
    paddingTop: '50px',
    gap: '50px',
    img: {
      display: 'flex',
    },
  },
})
// mobile responsiveness
export const  MobileImage = styled('div', {
  '@media (max-width: 2560px)': {
    img: {
      display: 'none',
    },
  },
  '@media (max-width: 425px)': {
    img: {
      display: 'flex',
      width: '100%',
    },
  },
})
export const MobileTitle = styled('div', {
  fontSize: '$2xl',
  fontWeight: '700',
  display: 'flex',
  justifyContent: 'center',

  '@media (max-width: 2560px)': {
    display: 'none',
  },

  '@media (max-width: 425px)': {
    display: 'flex',
  },
})
export const MobileSubTitle = styled('div', {
  fontSize: '$2md',
  lineHeight: 1.3,
  color: '$gray500',
  margin: '50px 0px',
  textAlign: 'center',

  '@media (max-width: 2560px)': {
    display: 'none',
  },

  '@media (max-width: 425px)': {
    display: 'flex',
  },
})