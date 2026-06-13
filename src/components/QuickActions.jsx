import { LINKS } from "../data/siteData";
import { InstaIc, PhoneIc, PinIc, YtIc } from "./common";

export default function QuickActions() {
  const acts = [
    { label: "Call", href: LINKS.phone, ic: <PhoneIc />, cls: "qa-call" },
    { label: "Maps", href: LINKS.maps, ic: <PinIc />, cls: "qa-maps" },
    { label: "Instagram", href: LINKS.instagram, ic: <InstaIc />, cls: "qa-ig" },
    { label: "YouTube", href: LINKS.youtube, ic: <YtIc />, cls: "qa-yt" },
  ];
  return (
    <nav className="qa" aria-label="Quick actions">
      {acts.map((a) => (
        <a
          key={a.label}
          className={`qa-btn ${a.cls}`}
          href={a.href}
          target={a.href.startsWith("tel:") ? undefined : "_blank"}
          rel="noreferrer"
        >
          <span className="qa-ic">{a.ic}</span>
          <span className="qa-label">{a.label}</span>
        </a>
      ))}
    </nav>
  );
}
