import FeatureWorkspace from "@/components/studio/FeatureWorkspace";

export default function StoryToVideoPage() {
  return (
    <FeatureWorkspace
      title="Story → Video"
      blurb="Describe the narrative arc. We’ll mock a directed sequence with continuity-aware framing."
      fields={[
        {
          name: "title",
          label: "Working title",
          placeholder: "Signal Awakening",
        },
        {
          name: "story",
          label: "Story / beat sheet",
          type: "textarea",
          rows: 6,
          placeholder: "Act I: a lighthouse keeper receives a transmission…",
        },
        {
          name: "tone",
          label: "Tone",
          type: "select",
          options: ["Noir thriller", "Epic fantasy", "Intimate drama", "Sci-fi opera"],
        },
        {
          name: "runtime",
          label: "Target runtime",
          placeholder: "90 seconds",
        },
      ]}
    />
  );
}
