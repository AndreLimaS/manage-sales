import {
  HeaderContainer,
  HeaderContent,
  NewTransactionsButton,
} from "./styles";
import logoImg from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTrasactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova Transacão</NewTransactionsButton>
          </Dialog.Trigger>
          <NewTrasactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
