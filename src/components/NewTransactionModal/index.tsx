import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton } from "./styles";
import { X } from "phosphor-react";
export function NewTrasactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transacão</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>
        <form action="">
          <input type="text" placeholder="descricão" required />
          <input type="text" placeholder="Preco" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
