import { XLogo } from "@phosphor-icons/react";
import { HeaderContainer } from "./style";



export const Header = ({ titulo }: { titulo: string }) => {
  return (
    <HeaderContainer>
      <h3>{titulo}</h3>
      <XLogo size={24} />
    </HeaderContainer>
  );
};
