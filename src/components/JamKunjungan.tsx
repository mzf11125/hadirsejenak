import type { Ref } from "react";
import Button from "./Button.tsx";
import type { TimelineEntry } from "../data/site.ts";

type JamKunjunganProps = {
  title: string;
  entries?: TimelineEntry[];
  preview?: boolean;
  previewCount?: number;
  revealRef?: Ref<HTMLDivElement>;
  detailTo?: string;
};

/**
 * JamKunjungan, the signature element. A plain time log of what actually
 * happened (or will happen) during a visit: the proof of presence.
 * Reused on the campaign page, report page, and volunteer signup.
 */
export default function JamKunjungan({
  title,
  entries = [],
  preview = false,
  previewCount = 3,
  revealRef,
  detailTo = "/events",
}: JamKunjunganProps) {
  const shown = preview ? entries.slice(0, previewCount) : entries;

  return (
    <div className={`jam${revealRef ? " reveal" : ""}`} ref={revealRef}>
      <h3>{title}</h3>
      <ol>
        {shown.map((e) => (
          <li key={`${e.time}-${e.title}`}>
            <time>{e.time}</time>
            <span className="dot" aria-hidden="true" />
            <div className="what">
              <b>{e.title}</b>
              <span>{e.detail}</span>
            </div>
          </li>
        ))}
      </ol>
      {preview && (
        <div className="jam-preview-tag">
          <span>Jam kunjungan lengkap di halaman events.</span>
          <Button to={detailTo} kind="secondary" onDark>
            Lihat kegiatan
          </Button>
        </div>
      )}
    </div>
  );
}