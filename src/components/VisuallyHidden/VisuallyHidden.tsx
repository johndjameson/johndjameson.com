import visuallyHiddenStyles from "@/components/VisuallyHidden/VisuallyHidden.module.css";

interface VisuallyHiddenProps {
  as?: React.ElementType;
  children: React.ReactNode;
}

function VisuallyHidden({ as, children }: VisuallyHiddenProps) {
  const Tag = as ?? "span";

  return <Tag className={visuallyHiddenStyles.hidden}>{children}</Tag>;
}

export default VisuallyHidden;
