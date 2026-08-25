import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

type Kind = "primary" | "secondary" | "quiet";

type BaseProps = {
  kind?: Kind;
  onDark?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: undefined;
  };

type ButtonAsLink = BaseProps &
  LinkProps & {
    to: string;
    href?: undefined;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const { kind = "primary", onDark = false, className = "", children, ...rest } = props;

  const dark = onDark ? " on-dark" : "";
  const kindCls =
    kind === "secondary"
      ? `btn-secondary${dark}`
      : kind === "quiet"
        ? "btn-quiet"
        : "btn-primary";
  const cls = `btn ${kindCls} ${className}`.trim();

  if ("to" in rest && typeof rest.to === "string") {
    const { to, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link to={to} className={cls} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ("href" in rest && typeof rest.href === "string") {
    return (
      <a className={cls} {...(rest as ButtonAsAnchor)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}