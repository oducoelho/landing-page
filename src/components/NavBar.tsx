import { LoginButtons, NavBarContainer, Options, Title } from "../styles/pages/navbar"

export const Navbar = () => {
  return (
    <NavBarContainer>
      <Title>
        <span>snap</span>
        <Options>
          <ul>
            <li>Features ˅</li>
            <li>Company ˅</li>
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