import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  IconButton,
  LeftSlot,
  LoginButtons,
  NavBarContainer,
  Options,
  Title
} from "../styles/pages/navbar"

import Todo from '../assets/icon-todo.svg'
import Calendar from '../assets/icon-calendar.svg'
import Reminders from '../assets/icon-reminders.svg'
import Planning from '../assets/icon-planning.svg'

import ArrowDown from '../assets/icon-arrow-down.svg'

export const Navbar = () => {

  return (
    <NavBarContainer>
      <Title>
        <span>snap</span>
        <Options>
          <ul>
            <li>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <IconButton aria-label="Customise options">
                    Features<img src={ArrowDown} alt="" />
                  </IconButton>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenuContent sideOffset={5}>
                    <DropdownMenuItem>
                      <LeftSlot><img src={Todo} alt="" /></LeftSlot>Todo List
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LeftSlot><img src={Calendar} alt="" /></LeftSlot>Calendar
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LeftSlot><img src={Reminders} alt="" /></LeftSlot>Reminders
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LeftSlot><img src={Planning} alt="" /></LeftSlot>Planning
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </li>
            <li>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <IconButton aria-label="Customise options">
                    Company<img src={ArrowDown} alt="" />
                  </IconButton>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenuContent sideOffset={5}>
                    <DropdownMenuItem>
                      History
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Our Team
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Blog
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </Options>
      </Title>

      <LoginButtons>
        <span>Login</span>
        <button>Register</button>
      </LoginButtons>
    </NavBarContainer>
  )
}