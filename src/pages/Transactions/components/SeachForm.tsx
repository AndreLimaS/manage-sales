import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer, WrapperContainer } from "./styles";

export function SearchForm() {
  return (
    <WrapperContainer>
      <SearchFormContainer>
        <input type="text" placeholder="Busque por transacões" />
        <button type="submit">
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </SearchFormContainer>
    </WrapperContainer>
  );
}
