import FeatureWorkspace from "@/components/studio/FeatureWorkspace";

export default function ScriptToVideoPage() {
  return (
    <FeatureWorkspace
      title="Script → Video"
      blurb="Paste dialogue and stage directions. The demo maps them to a fake shot list and preview."
      fields={[
        {
          name: "script",
          label: "Script",
          type: "textarea",
          rows: 8,
          placeholder: "INT. OBSERVATORY — NIGHT\nMAYA\nWe lost the signal again…",
        },
        {
          name: "style",
          label: "Directorial style",
          type: "select",
          options: ["Handheld documentary", "Locked-off tableau", "Steadicam glide", "Anamorphic spectacle"],
        },
      ]}
    />
  );
}
