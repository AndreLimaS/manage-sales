import * as Dialog from "@radix-ui/react-dialog";
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TrasactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
export function NewTrasactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transacão</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="">
          <input type="text" placeholder="descricão" required />
          <input type="text" placeholder="Preco" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TrasactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TrasactionTypeButton>

            <TrasactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saida
            </TrasactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
