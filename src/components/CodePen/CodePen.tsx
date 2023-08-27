import PropTypes from "prop-types";
import codePenStyles from "@/components/CodePen/CodePen.module.css";

type CodePenProps = {
  height: number;
  id: number;
  tabs: string;
  theme: number;
  title: string;
  user: string;
  version: number;
};

function CodePen({
  height = 400,
  id,
  tabs = "results",
  theme = 41300,
  title,
  user = "johndjameson",
  version = 2,
}: CodePenProps) {
  const url = new URL(`https://codepen.io/${user}/embed/${id}`);

  url.searchParams.set("default-tab", tabs);
  url.searchParams.set("embed-version", String(version));
  url.searchParams.set("theme-id", String(theme));

  return (
    <iframe
      className={codePenStyles.demo}
      height={height}
      loading="lazy"
      src={url.toString()}
      style={{ height: `${height}px` }}
      title={title}
    />
  );
}

export default CodePen;
