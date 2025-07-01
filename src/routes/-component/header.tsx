import { Link } from '@tanstack/react-router';

export const Header = () => {
  return (
    <header className="flex gap-2 p-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </header>
  );
};
