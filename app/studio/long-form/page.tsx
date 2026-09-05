import FeatureWorkspace from "@/components/studio/FeatureWorkspace";

export default function LongFormPage() {
  return (
    <FeatureWorkspace
      title="Long-form project"
      blurb="Scaffold a feature-length structure. The demo returns a fake act breakdown and runtime plan."
      fields={[
        {
          name: "project",
          label: "Project name",
          placeholder: "Northern Lights Chronicle",
        },
        {
          name: "logline",
          label: "Logline",
          type: "textarea",
          rows: 3,
          placeholder: "A cartographer maps storms that rewrite memory…",
        },
        {
          name: "acts",
          label: "Structure",
          type: "select",
          options: ["3-act", "5-act", "Episodic (6×8 min)", "Anthology"],
        },
        {
          name: "runtime",
          label: "Target runtime",
          placeholder: "48 minutes",
        },
      ]}
      resultTitle="Project scaffold (mock)"
      resultHint="Demo scaffold only — no real long-form pipeline is running yet."
    />
  );
}
