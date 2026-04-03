export const dynamic = "force-dynamic";

async function getServerData() {
  const now = new Date();
  const uptime = process.uptime();
  const memUsage = process.memoryUsage();

  return {
    timestamp: now.toISOString(),
    hostname: process.env.HOSTNAME || "unknown",
    nodeVersion: process.version,
    uptime: Math.floor(uptime),
    memoryMB: Math.round(memUsage.rss / 1024 / 1024),
    pid: process.pid,
    env: process.env.APP_MESSAGE || "Hello from Launchpad!@@@@@@@",
  };
}

export default async function Home() {
  const data = await getServerData();

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 480, width: "100%", padding: 40 }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8, letterSpacing: "-0.5px" }}>
          Sample App
        </h1>
        <p style={{ color: "#888", marginBottom: 32, fontSize: 14 }}>
          Server-rendered by Next.js on every request
        </p>

        <div style={{ display: "grid", gap: 12 }}>
          <Card label="Message" value={data.env} />
          <Card label="Server Time" value={data.timestamp} />
          <Card label="Node.js" value={data.nodeVersion} />
          <Card label="PID" value={String(data.pid)} />
          <Card label="Uptime" value={`${data.uptime}s`} />
          <Card label="Memory" value={`${data.memoryMB} MB`} />
        </div>

        <p style={{ marginTop: 32, fontSize: 12, color: "#555" }}>
          Refresh to see updated server-side data.
        </p>
      </div>
    </div>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        borderRadius: 8,
        border: "1px solid #222",
        background: "#111",
      }}
    >
      <span style={{ fontSize: 13, color: "#888" }}>{label}</span>
      <span style={{ fontSize: 13, fontFamily: "monospace", color: "#ededed" }}>{value}</span>
    </div>
  );
}
