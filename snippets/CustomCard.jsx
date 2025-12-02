export const CustomCard = ({ title, titleBackgroundColor, titleTextColor, href, icon, children }) => {
  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === "string") {
      return <Icon color="#fff" icon={icon} size="26" />;
    }

    return icon;
  };

  const cardContent = (
    <div
      className={`rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md transition-shadow ${
        children ? "h-full mint-flex mint-flex-col" : ""
      }`}
    >
      <div
        className="flex items-center gap-3 px-6 py-4"
        style={{
          backgroundColor: titleBackgroundColor || "#28a561",
          color: titleTextColor || "#FFFFFF",
        }}
      >
        {icon && <div className="flex-shrink-0 my-0">{renderIcon()}</div>}
        <h3 className="text-xl font-semibold my-0 text-white">{title}</h3>
      </div>
      {children && <div className="px-6 py-4 space-y-3 flex-1">{children}</div>}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="custom_card block no-underline hover:no-underline border-b-0 !mb-4 h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};
