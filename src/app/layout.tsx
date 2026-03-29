import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launchpad Sample App",
  description: "A sample Next.js SSR app for testing Launchpad deployments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#0a0a0a", color: "#ededed" }}>
        {children}
      </body>
    </html>
  );
}
