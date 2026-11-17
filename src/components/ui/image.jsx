import * as React from "react";

const FALLBACK_IMAGE_URL = "/images/hero.svg";

export const Image = React.forwardRef(function Image({ src, alt = "", onError, ...props }, ref) {
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => setFailed(false), [src]);
  return (
    <img
      ref={ref}
      src={!src || failed ? FALLBACK_IMAGE_URL : src}
      alt={alt}
      onError={(event) => {
        if (!failed) setFailed(true);
        onError?.(event);
      }}
      {...props}
    />
  );
});

Image.displayName = "Image";
