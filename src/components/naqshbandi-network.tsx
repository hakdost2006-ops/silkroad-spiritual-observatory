import { getLineageNode, type LineageView } from "../data/naqshbandi-lineage";
import { naqshbandiRelationships } from "../data/naqshbandi-history";

type Position = { id: string; x: number; y: number };
const positions: Record<LineageView, Position[]> = {
  formation: [
    { id: "yusuf-hamadani", x: 280, y: 60 },
    { id: "abd-al-khaliq", x: 650, y: 60 },
    { id: "arif-riwgari", x: 650, y: 200 },
    { id: "mahmud-faghnawi", x: 280, y: 200 },
    { id: "ali-ramitani", x: 280, y: 340 },
    { id: "baba-samasi", x: 650, y: 340 },
    { id: "amir-kulal", x: 650, y: 480 },
    { id: "baha-al-din", x: 280, y: 480 },
  ],
  networks: [
    { id: "baha-al-din", x: 490, y: 50 },
    { id: "muhammad-parsa", x: 150, y: 180 },
    { id: "ala-al-din-attar", x: 490, y: 180 },
    { id: "yaqub-charkhi", x: 830, y: 180 },
    { id: "nizam-khamush", x: 490, y: 320 },
    { id: "sad-kashghari", x: 490, y: 460 },
    { id: "ubayd-allah-ahrar", x: 830, y: 460 },
    { id: "jami", x: 490, y: 600 },
  ],
  afterlives: [
    { id: "ubayd-allah-ahrar", x: 155, y: 80 },
    { id: "muhammad-qazi", x: 155, y: 240 },
    { id: "makhdum-azam", x: 155, y: 400 },
    { id: "mujaddidi-bridge", x: 490, y: 80 },
    { id: "baqi-billah", x: 490, y: 240 },
    { id: "ahmad-sirhindi", x: 490, y: 400 },
    { id: "later-mujaddidi", x: 490, y: 560 },
    { id: "khalid-baghdadi", x: 825, y: 560 },
    { id: "golden-sufi-center", x: 825, y: 240 },
  ],
};
const shortNames: Record<string, string> = {
  "abd-al-khaliq": "Ghijduwani",
  "mahmud-faghnawi": "Mahmud Faghnawi",
  "baba-samasi": "Baba Samasi",
  "amir-kulal": "Amir Kulal",
  "baha-al-din": "Baha al-Din Naqshband",
  "ala-al-din-attar": "Ala al-Din Attar",
  "ubayd-allah-ahrar": "Ubayd Allah Ahrar",
  "makhdum-azam": "Makhdum-i A'zam",
  "mujaddidi-bridge": "Open transmission bridge",
  "khalid-baghdadi": "Khalid al-Baghdadi",
};

export function NaqshbandiNetwork({
  view,
  activeId,
  onSelect,
}: {
  view: LineageView;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const nodes = positions[view];
  const byId = new Map(nodes.map((node) => [node.id, node]));
  const edges = naqshbandiRelationships.filter((edge) => byId.has(edge.from) && byId.has(edge.to));
  const height = view === "formation" ? 550 : 680;
  return (
    <figure className="mt-8 border-y border-[#176858]/20 py-5">
      <figcaption className="mb-3 flex flex-wrap justify-between gap-3 text-xs text-stone">
        <span>
          {view === "formation"
            ? "The remembered Bukhara succession"
            : view === "networks"
              ? "Distinct circles after Baha al-Din"
              : "Dahbid, Mujaddidi and Khalidi formations"}
        </span>
        <span>Solid: documented · Dashed: reported or reconstructed</span>
      </figcaption>
      <div className="overflow-x-auto pb-2">
        <svg
          role="group"
          aria-label={`${view} relationship diagram`}
          viewBox={`0 0 980 ${height}`}
          className="w-full min-w-[620px]"
        >
          <defs>
            <marker
              id={`naqsh-arrow-${view}`}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#64877b" />
            </marker>
          </defs>
          {edges.map((edge) => {
            const from = byId.get(edge.from)!;
            const to = byId.get(edge.to)!;
            const sameRow = from.y === to.y;
            const direction = to.x > from.x ? 1 : -1;
            const startX = sameRow ? from.x + 130 * direction : from.x;
            const endX = sameRow ? to.x - 130 * direction : to.x;
            const startY = sameRow ? from.y : from.y + 36;
            const endY = sameRow ? to.y : to.y - 36;
            const controlY = (startY + endY) / 2;
            const d = sameRow
              ? `M ${startX} ${startY} L ${endX} ${endY}`
              : `M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`;
            return (
              <path
                key={`${edge.from}-${edge.to}`}
                d={d}
                fill="none"
                stroke="#64877b"
                strokeWidth="1.6"
                strokeDasharray={edge.evidence === "documented" ? undefined : "5 5"}
                markerEnd={`url(#naqsh-arrow-${view})`}
              >
                <title>{`${edge.kind}: ${edge.note}`}</title>
              </path>
            );
          })}
          {nodes.map((position) => {
            const node = getLineageNode(position.id)!;
            return (
              <foreignObject
                key={node.id}
                x={position.x - 130}
                y={position.y - 36}
                width="260"
                height="72"
              >
                <button
                  type="button"
                  aria-pressed={activeId === node.id}
                  aria-controls="master-reader"
                  onClick={() => onSelect(node.id)}
                  className={`flex h-full w-full flex-col items-center justify-center border px-3 text-center ${activeId === node.id ? "border-[#176858] bg-[#176858] text-white" : "border-[#176858]/35 bg-[#fbfcfa] text-lapis-deep hover:border-[#176858]"}`}
                  style={{ outlineOffset: "-4px" }}
                >
                  <span className="font-serif text-[22px] leading-tight">
                    {shortNames[node.id] || node.name}
                  </span>
                  <span
                    className={`mt-1 text-[10px] ${activeId === node.id ? "text-white/80" : "text-stone"}`}
                  >
                    {node.evidence === "modern-community"
                      ? "Modern community account"
                      : node.id === "mujaddidi-bridge"
                        ? "Intermediaries remain open"
                        : node.place.split(",")[0]}
                  </span>
                </button>
              </foreignObject>
            );
          })}
        </svg>
      </div>
    </figure>
  );
}
