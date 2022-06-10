import { useTheme } from "styled-components";
import BrandLogo from "../../components/Logo";
import { ThemeInterface } from "../../theme";
import NavBar from "../NavBar";
import { Wrapper } from "./styled";

export default function HeaderContainer() {
  const theme: ThemeInterface = useTheme();
  return (
    <Wrapper>
      <BrandLogo
        className="brandLogo"
        color={theme.onSurface}
        width={88}
        height={64}
      />
      <NavBar />
    </Wrapper>
  );
}
