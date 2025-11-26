export const PlatformOverviewImage = ({ alt = "Pipeline Overview", className = "", ...props }) => {
  return (
    <>
      <img
        src="/public/doc-assets/platform-overview-light.png"
        alt={alt}
        className={`block dark:hidden ${className}`}
        {...props}
      />
      <img
        src="/public/doc-assets/platform-overview-dark.png"
        alt={alt}
        className={`hidden dark:block ${className}`}
        {...props}
      />
    </>
  );
};
