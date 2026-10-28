export default function Button({
  variant = "primary",
  disabled = false,
  children,
}) {
  return (
    <button className={variant} disabled={disabled}>
      {children}
    </button>
  );
}
