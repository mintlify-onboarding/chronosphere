import { useEffect, useRef } from 'react';

/**
 * Component with limited capacity for generating dynamic code blocks within
 * Nextra following the guidance in the documentation.
 * https://nextra.site/docs/guide/syntax-highlighting#with-dynamic-content
 *
 * Note that this component **MUST** be used very carefully and tested to verify
 * it works as intended in individual use cases because it relies on dynamically
 * finding and replacing content in the code block. It currently will only support
 * a single find and replace.
 */
// Note for maintainers: we should be very careful of this behavior when upgrading
// nextra to make sure it still works as intended. For example, the "copy" behavior
// still works because it does a "querySelector('code')?.textContent." If that ever
// changed, this code could break.
export function DynamicCode({ children, find, replace }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // Find the first code span that matches.
      const token = [
        ...ref.current.querySelectorAll('code span'),
      ].find((el) => el.innerText === find);

      if (token) {
        // If found, replace the text.
        token.innerText = replace;
      }
    }
  }, [find, replace]);

  // We need a div wrapping around the children to have a pointer to the
  // dom to search within.
  return (
    <>
      <div ref={ref}>{children}</div>
    </>
  );
}
