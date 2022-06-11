import BrandLogo from "../../components/Logo";
import NavBar from "../NavBar";
import { Wrapper } from "./styled";

export default function HeaderContainer() {
  return (
    <Wrapper>
      <BrandLogo className="brandLogo" width={88} height={64} />
      <NavBar />
    </Wrapper>
  );
}
