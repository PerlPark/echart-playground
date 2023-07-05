import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav>
      <ul className="[&_li]:mb-2">
        <li>
          <Link href="/">Line</Link>
        </li>
        <li>
          <Link href="/bar">Bar</Link>
        </li>
        <li>Pie</li>
        <li>Candlestick</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
