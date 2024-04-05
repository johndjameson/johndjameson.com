interface VisuallyHiddenProps {
  as?: React.ElementType;
  children: React.ReactNode;
}

function VisuallyHidden({ as, children }: VisuallyHiddenProps) {
  const Tag = as ?? "span";

  return <Tag className="sr-only">{children}</Tag>;
}

export default VisuallyHidden;
