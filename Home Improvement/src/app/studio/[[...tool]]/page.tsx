import StudioClient from "./StudioClient";

// Force static build for this route
export const dynamic = "force-static";

// Export standard Studio metadata
export { metadata, viewport } from "next-sanity/studio";

// Required for next export with optional catch-all route
export function generateStaticParams() {
  return [
    { tool: [] },
    { tool: ["desk"] },
    { tool: ["structure"] },
  ];
}

export default function StudioPage() {
  return <StudioClient />;
}
