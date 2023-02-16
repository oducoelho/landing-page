import { styled } from "..";

export const NavBarContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '30px 100px'
})
export const Title = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '100px',
  span: {
    fontSize: '$3xl',
    fontWeight: '700',  
  }
})
export const Options = styled('div', {
  ul: {
    display: 'flex',
    gap:'50px',
    li: {
      listStyle: 'none',
      fontSize: '$sm',
      color: '$gray500',
      '&:hover': {
        cursor: 'pointer',
        color: '$black100',
      }
    }
  }
})
export const LoginButtons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',

  span: {
    fontSize: '$sm',
    color: '$gray500',

    '&:hover': {
      cursor: 'pointer',
      color: '$black100',
    },
    
  },

  button: {
    padding: '15px 20px',
    borderRadius: 8,
    background: 'none',
    color: '$gray500',
    border: '2px solid $gray500',

    '&:hover': {
      cursor: 'pointer',
      color: '$black100',
    },
    
  }
})