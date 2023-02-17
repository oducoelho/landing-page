import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { styled } from "..";
import { keyframes } from '@stitches/react';
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

// radix drop menu 

export const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const contentStyles = {
  minWidth: 150,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
};

export const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);
export const DropdownMenuSubContent = styled(DropdownMenu.SubContent, contentStyles);

export const DropdownMenuArrow = styled(DropdownMenu.Arrow, { fill: 'white' });

export const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$black100',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
};

export const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);
export const DropdownMenuCheckboxItem = styled(DropdownMenu.CheckboxItem, itemStyles);
export const DropdownMenuRadioItem = styled(DropdownMenu.RadioItem, itemStyles);
export const DropdownMenuSubTrigger = styled(DropdownMenu.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
});

export const DropdownMenuLabel = styled(DropdownMenu.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11,
});

export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

export const DropdownMenuItemIndicator = styled(DropdownMenu.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LeftSlot = styled('div', {
  paddingRight: '20px',
  color: mauve.mauve11,
  '[data-highlighted] > &': { color: 'white' },
  '[data-disabled] &': { color: mauve.mauve8 },
});

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:focus': { boxShadow: `0 0 0 2px black` },
});