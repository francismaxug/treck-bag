import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Logo />
      <p
        style={{
          fontSize: "17px",
         
        }}
      >
        <i>@Max-cod</i>
      </p>
      <Counter />
    </header>
  );
}
