"use client";

import Arrow from "./Arrow";

export default function AnimatedButton({
  children,
  href,
  variant = "primary",
  direction = "up",
  className = "",
  ...props
}) {
  function move(event) {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      ).matches
    )
      return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty(
      "--mx",
      `${(event.clientX - rect.left - rect.width / 2) * 0.055}px`,
    );
    el.style.setProperty(
      "--my",
      `${(event.clientY - rect.top - rect.height / 2) * 0.08}px`,
    );
    el.style.setProperty("--px", `${event.clientX - rect.left}px`);
  }
  function reset(event) {
    event.currentTarget.style.setProperty("--mx", "0px");
    event.currentTarget.style.setProperty("--my", "0px");
  }
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      className={`animated-button button-${variant} ${className}`}
      onPointerMove={move}
      onPointerLeave={reset}
      type={href ? undefined : "button"}
      {...props}
    >
      <span className="button-fill" aria-hidden="true" />
      <span className="button-label">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      <span className="button-arrow">
        <Arrow direction={direction} />
      </span>
    </Tag>
  );
}
