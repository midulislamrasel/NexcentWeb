import Link from "next/link";

const NavLink = ({ ...rest }) => {
  return <Link {...rest}>{rest.label}</Link>;
};

export default NavLink;
