import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development",
  robots: {
    index: false,
  },
};

const overlapText = "Styling Fallback Fonts with Sass";

export default function Development() {
  return (
    <div className="px-container-w py-8">
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
        )),
      )}
    </div>
  );
}
