import { Header } from "../../components/Header";
import { Historic } from "../../components/Historic";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SeachForm";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />
      <Historic />
    </div>
  );
}
