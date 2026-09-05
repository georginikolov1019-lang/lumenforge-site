import FeatureWorkspace from "@/components/studio/FeatureWorkspace";

export default function TextToVideoPage() {
  return (
    <FeatureWorkspace
      title="Text → Video"
      blurb="Plain-language prompts become a mock cinematic clip with camera language baked in."
      fields={[
        {
          name: "prompt",
          label: "Prompt",
          type: "textarea",
          rows: 5,
          placeholder: "Slow push through rain-slick neon alley, amber rim light…",
        },
        {
          name: "aspect",
          label: "Aspect ratio",
          type: "select",
          options: ["16:9", "2.39:1", "9:16", "1:1"],
        },
        {
          name: "motion",
          label: "Motion intensity",
          type: "select",
          options: ["Subtle", "Medium", "Dynamic"],
        },
      ]}
    />
  );
}
