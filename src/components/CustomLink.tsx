import { NavLink } from "react-router";

export function CustomLink({
  to,
  textString,
}: {
  to: string;
  textString: string;
}) {
  return (
    <NavLink
      style={{
        color: "white",
        fontSize: "1.1rem",
        padding: "4px",
        textDecoration: "none",
      }}
      to={to}
    >
      {textString}
    </NavLink>
  );
}
