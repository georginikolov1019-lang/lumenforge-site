import FeatureWorkspace from "@/components/studio/FeatureWorkspace";

export default function CharactersPage() {
  return (
    <FeatureWorkspace
      title="Characters"
      blurb="Define a character lock for continuity across scenes. Generate produces a mock bible card."
      fields={[
        {
          name: "name",
          label: "Character name",
          placeholder: "Maya Voss",
        },
        {
          name: "look",
          label: "Look & wardrobe",
          type: "textarea",
          rows: 4,
          placeholder: "Silver-streaked hair, charcoal coat, frost-blue eyes…",
        },
        {
          name: "voice",
          label: "Voice / demeanor",
          placeholder: "Measured, low register, dry wit",
        },
        {
          name: "consistency",
          label: "Consistency lock",
          type: "select",
          options: ["Strict face lock", "Soft likeness", "Style-only"],
        },
      ]}
      resultTitle="Character bible (mock)"
      resultHint="Mock character card only — no model training or identity lock is performed."
    />
  );
}
