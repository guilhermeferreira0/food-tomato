interface NavLinkProps {
  href: string,
  name: string
}

export function NavLink({ href, name }: NavLinkProps) {
  return (
    <li
      className="border-b-2 border-transparent hover:border-gray-600 transition-all"
    >
      <a href={href}>{name}</a>
    </li>
  );
}