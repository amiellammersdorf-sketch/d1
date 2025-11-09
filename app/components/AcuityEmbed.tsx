"use client";

type Props = {
  height?: number;         // default 900
  calendarId?: string;     // optional: show a specific calendar
  lang?: string;           // e.g., "de" or "en"
  className?: string;
};

export default function AcuityEmbed({
  height = 900,
  calendarId,
  lang = "de",
  className = "",
}: Props) {
  const ownerId = process.env.NEXT_PUBLIC_ACUITY_OWNER_ID;
  const src = `https://app.acuityscheduling.com/schedule.php?owner=${ownerId}${
    calendarId ? `&calendarID=${encodeURIComponent(calendarId)}` : ""
  }&lang=${encodeURIComponent(lang)}`;

  return (
    <div className={`border-brand border-[6px] ${className}`}>
      <iframe
        title="Acuity Scheduling"
        src={src}
        width="100%"
        height={height}
        frameBorder={0}
        loading="lazy"
        style={{ display: "block" }}
      />
    </div>
  );
}
