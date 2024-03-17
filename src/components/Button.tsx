interface BtnProps {
  onClick?: () => void;
  buttonType: "btn--secondary" | "secondary" | "";
  children: React.ReactNode;

}

export default function Button({ onClick, buttonType, children }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
