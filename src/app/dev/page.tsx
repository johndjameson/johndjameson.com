import { Metadata } from "next";
import devStyles from "@/app/dev/dev.module.css";

export const metadata: Metadata = {
  title: "Development",
  robots: {
    index: false,
  },
};

const overlapText = "Styling Fallback Fonts with Sass";

export default function Development() {
  return (
    <div
      style={{
        padding: "var(--space-200) var(--layout-container-width-padding-x) 0",
      }}
    >
      <>
        <div className={devStyles.overlap}>
          <p className={devStyles.fallback}>{overlapText}</p>
          <p className={devStyles.primary}>{overlapText}</p>
        </div>

        {[100, 300, 400, 500, 600, 700, 800, 900].map((weight) =>
          [false, true].map((italic) => (
            <p
              key={`${weight}-${italic}`}
              style={{
                fontFamily: "cendra-web",
                fontSize: 40,
                fontStyle: italic ? "italic" : "normal",
                fontWeight: weight,
                lineHeight: 1.2,
              }}
            >
              Example Text
            </p>
          ))
        )}
      </>
    </div>
  );
}
