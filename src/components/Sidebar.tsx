import Link from 'next/link';
import LineChartIcon from './icons/LineChartIcon';
import BarChartIcon from './icons/BarChartIcon';
import PieChartIcon from './icons/PieChartIcon';
import CandlestickChartIcon from './icons/CandlestickChartIcon';
import CategoryListItem from './CategoryListItem';

const Sidebar = () => {
  return (
    <nav>
      <ul className="[&_li]:mb-1 [&_li]:list-disc [&_li]:list-inside ml-2">
        <CategoryListItem>
          <LineChartIcon />
          Line
        </CategoryListItem>
        <li>
          <Link href="/">Default</Link>
        </li>
        <CategoryListItem>
          <BarChartIcon />
          Bar
        </CategoryListItem>
        <li>
          <Link href="/bar">Default</Link>
        </li>
        <li>
          <Link href="/bar/stacked">Stacked</Link>
        </li>
        <li>
          <Link href="/bar/stacked/horizontal">Stacked - Horizontal</Link>
        </li>
        <CategoryListItem>
          <PieChartIcon />
          Pie
        </CategoryListItem>
        <li>
          <Link href="/pie">Default</Link>
        </li>
        <CategoryListItem>
          <CandlestickChartIcon />
          Candlestick
        </CategoryListItem>
        <li>
          <Link href="/candlestick">Default</Link>
        </li>
        <li>
          <Link href="/candlestick/index">Index Chart</Link>
        </li>
        <li>
          <Link href="/candlestick/index/minimal">Index Chart - Minimal</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
