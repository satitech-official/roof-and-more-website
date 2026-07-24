/* eslint-disable @next/next/no-img-element */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function withBasePath(src) {
  if (
    !src ||
    !basePath ||
    !src.startsWith("/") ||
    src.startsWith("//") ||
    src === basePath ||
    src.startsWith(`${basePath}/`)
  ) {
    return src;
  }
  return `${basePath}${src}`;
}

export default function LocalImage({
  alt,
  className = "",
  fill = false,
  height,
  priority = false,
  sizes,
  src,
  width,
  ...props
}) {
  void sizes;
  const fillClass = fill ? "local-image-fill" : "";
  const classes = [fillClass, className].filter(Boolean).join(" ");

  return (
    <img
      {...props}
      alt={alt}
      className={classes || undefined}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
      height={fill ? undefined : height}
      loading={priority ? "eager" : "lazy"}
      src={withBasePath(src)}
      width={fill ? undefined : width}
    />
  );
}
