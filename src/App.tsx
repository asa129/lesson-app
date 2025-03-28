import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";

function App() {
  return (
    <>
      <PrimaryButton>あああ</PrimaryButton>
      <SecondaryButton>いいい</SecondaryButton>
      <br />
      <br />
      <SearchInput />
    </>
  );
}

export default App;
