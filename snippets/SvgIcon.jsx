import { clsx } from 'clsx';

/**
 * Component used as a base for custom SVG Icons, similar to MUI's SvgIcon that
 * we migrated from.
 */
export function SvgIcon({ className, ...props }) {
  return (
    <svg
      className={clsx('inline-block h-6 w-6 fill-current', className)}
      {...props}
    />
  );
}
