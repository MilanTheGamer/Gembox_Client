import dynamic from "next/dynamic";
import BrandLogo from "../../components/Logo";
import { Wrapper } from "./styled";

const NavBar = dynamic(() => import("../NavBar"), {
  ssr: false,
});

export default function HeaderContainer() {
  return (
    <Wrapper>
      <BrandLogo className="brandLogo" width={88} height={64} />
      <NavBar />
    </Wrapper>
  );
}
