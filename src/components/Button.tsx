import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, ReactNode } from "react";

type Kind = "primary" | "secondary" | "quiet";

type BaseProps = {
  kind?: Kind;
  onDark?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button(props: ButtonProps) {
  const {
    as: Tag = "button",
    kind = "primary",
    onDark = false,
    className = "",
    children,
    ...rest
  } = props as ButtonAsButton & { as: ElementType };

  const dark = onDark ? " on-dark" : "";
  const kindCls =
    kind === "secondary"
      ? `btn-secondary${dark}`
      : kind === "quiet"
        ? "btn-quiet"
        : "btn-primary";

  return (
    <Tag className={`btn ${kindCls} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}