import { Header } from "../../components/Header";
import { Historic } from "../../components/Historic";
import { Summary } from "../../components/Summary";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <Historic />
    </div>
  );
}
