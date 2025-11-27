export const PipelineOverviewImage = ({ alt = "Pipeline Overview", className = "", ...props }) => {
  return (
    <>
      <img
        src="/public/doc-assets/pipeline-overview-light.png"
        alt={alt}
        className={`block dark:hidden ${className}`}
        {...props}
      />
      <img
        src="/public/doc-assets/pipeline-overview-dark.png"
        alt={alt}
        className={`hidden dark:block ${className}`}
        {...props}
      />
    </>
  );
};
