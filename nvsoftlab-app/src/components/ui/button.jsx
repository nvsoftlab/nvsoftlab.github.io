import React from "react";

export const Button = ({
  children,
  className,
  variant,
  size,
  asChild,
  ...props
}) => {
  let baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  let variantClasses = "";
  let sizeClasses = "h-10 px-4 py-2";

  switch (variant) {
    case "outline":
      variantClasses =
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
      break;
    case "secondary":
      variantClasses =
        "bg-secondary text-secondary-foreground hover:bg-secondary/80";
      break;
    default:
      variantClasses = "bg-primary text-primary-foreground hover:bg-primary/90";
      break;
  }

  switch (size) {
    case "lg":
      sizeClasses = "h-11 px-8";
      break;
    case "icon":
      sizeClasses = "h-10 w-10";
      break;
    default:
      sizeClasses = "h-10 px-4 py-2";
      break;
  }

  const mergedClassName = `${baseClasses} ${variantClasses} ${sizeClasses} ${
    className || ""
  }`;

  if (asChild) {
    if (React.Children.count(children) > 1) {
      console.warn("Button with 'asChild' expects a single child element.");
    }
    const child = React.Children.only(children);
    return React.cloneElement(child, {
      className: `${mergedClassName} ${child.props.className || ""}`.trim(),
      ...props,
    });
  }

  return (
    <button className={mergedClassName} {...props}>
      {children}
    </button>
  );
};
