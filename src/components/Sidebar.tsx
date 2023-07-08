import Link from 'next/link';
import LineChartIcon from './icons/LineChartIcon';
import BarChartIcon from './icons/BarChartIcon';
import PieChartIcon from './icons/PieChartIcon';
import CandlestickChartIcon from './icons/CandlestickChartIcon';

const categoryStyle =
  'flex hover:bg-slate-50 bg-white rounded shadow-sm px-2.5 py-2 gap-3 items-center mt-6 [&_+_li]:mt-3 list-none -ml-2';

const Sidebar = () => {
  return (
    <nav>
      <ul className="[&_li]:mb-1 [&_li]:list-disc [&_li]:list-inside ml-2">
        <li className={categoryStyle}>
          <LineChartIcon />
          Line
        </li>
        <li>
          <Link href="/">Default</Link>
        </li>
        <li className={categoryStyle}>
          <BarChartIcon />
          Bar
        </li>
        <li>
          <Link href="/bar">Default</Link>
        </li>
        <li>
          <Link href="/bar/stacked">Stacked</Link>
        </li>
        <li>
          <Link href="/bar/stacked/horizontal">Stacked - Horizontal</Link>
        </li>
        <li className={categoryStyle}>
          <PieChartIcon />
          Pie
        </li>
        <li>
          <Link href="/bar">Default</Link>
        </li>
        <li className={categoryStyle}>
          <CandlestickChartIcon />
          Candlestick
        </li>
        <li>
          <Link href="/bar">Default</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
