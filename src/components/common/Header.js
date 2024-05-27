import './Header.scss';

export default function Header({ children }) {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}
