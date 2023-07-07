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
        <li>
          <Link href="/bar/stacked">Bar - Stacked</Link>
        </li>
        <li>
          <Link href="/bar/stacked/horizontal">Bar - Stacked - Horizontal</Link>
        </li>
        <li>Pie</li>
        <li>Candlestick</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
