export const Badge = ({ v, variant = "default" }) => {
  const variants = {
    unstable: "bg-slate-700 text-white",
    default: "bg-slate-700 text-white",
  };

  const variantClasses = variants[variant] || variants.default;

  return (
    <span className="inline-block px-3 py-1 rounded-xl text-xs font-semibold tracking-wide bg-slate-700 text-white mb-4">
      v{v.toUpperCase()}
    </span>
  );
};
