import LineChartIcon from './icons/LineChartIcon';
import BarChartIcon from './icons/BarChartIcon';
import PieChartIcon from './icons/PieChartIcon';
import CandlestickChartIcon from './icons/CandlestickChartIcon';
import CategoryListItem from './CategoryListItem';
import BoxplotChartIcon from './icons/BoxplotChartIcon';
import LinkListItem from './LinkListItem';

const Sidebar = () => {
  return (
    <nav>
      <ul className="[&_li]:mb-1 [&_li]:list-disc [&_li]:list-inside ml-2">
        <CategoryListItem>Common</CategoryListItem>
        <LinkListItem href="/common/custom-tooltip">
          Custom Tooltip
        </LinkListItem>
        <CategoryListItem>
          <LineChartIcon />
          Line
        </CategoryListItem>
        <LinkListItem href="/">Default</LinkListItem>
        <LinkListItem href="/line/smooth">Smooth</LinkListItem>
        <CategoryListItem>
          <BarChartIcon />
          Bar
        </CategoryListItem>
        <LinkListItem href="/bar">Default</LinkListItem>
        <LinkListItem href="/bar/stacked">Stacked</LinkListItem>
        <LinkListItem href="/bar/stacked/horizontal">
          Stacked - Horizontal
        </LinkListItem>
        <LinkListItem href="/bar/counting">Counting</LinkListItem>
        <CategoryListItem>
          <PieChartIcon />
          Pie
        </CategoryListItem>
        <LinkListItem href="/pie">Default</LinkListItem>
        <CategoryListItem>
          <CandlestickChartIcon />
          Candlestick
        </CategoryListItem>
        <LinkListItem href="/candlestick">Default</LinkListItem>
        <LinkListItem href="/candlestick/index">Index Chart</LinkListItem>
        <LinkListItem href="/candlestick/index/minimal">
          Index Chart - Minimal
        </LinkListItem>
        <CategoryListItem>
          <BoxplotChartIcon />
          Boxplot
        </CategoryListItem>
        <LinkListItem href="/boxplot">Default</LinkListItem>
      </ul>
    </nav>
  );
};

export default Sidebar;
