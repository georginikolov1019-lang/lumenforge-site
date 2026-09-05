import FeatureWorkspace from "@/components/studio/FeatureWorkspace";

export default function ImageToVideoPage() {
  return (
    <FeatureWorkspace
      title="Image → Video"
      blurb="Upload a reference still (filename only in this demo) and describe the motion you want."
      fields={[
        {
          name: "image",
          label: "Reference image",
          type: "file",
        },
        {
          name: "motion",
          label: "Motion brief",
          type: "textarea",
          rows: 4,
          placeholder: "Gentle dolly-in, fog drifts left to right, lens flare soft…",
        },
        {
          name: "duration",
          label: "Duration",
          type: "select",
          options: ["4s", "8s", "12s", "24s"],
        },
      ]}
    />
  );
}
