const CategoryListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex font-medium bg-white rounded shadow-sm px-2.5 py-2 gap-3 items-center mt-6 [&_+_li]:mt-3 list-none -ml-2">
      {children}
    </li>
  );
};

export default CategoryListItem;
