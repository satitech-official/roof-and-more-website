/* eslint-disable @next/next/no-img-element */

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
      loading="eager"
      src={src}
      width={fill ? undefined : width}
    />
  );
}
