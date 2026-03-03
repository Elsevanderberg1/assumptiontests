import { Handle, Position } from "@xyflow/react";
import type { NodeProps } from "@xyflow/react";
import type { MindmapNodeData } from "./mindmap-data";

const colorMap = {
  yellow: "bg-amber-100 dark:bg-amber-900/40 border-amber-300 dark:border-amber-700",
  green: "bg-emerald-100 dark:bg-emerald-900/40 border-emerald-300 dark:border-emerald-700",
  blue: "bg-sky-100 dark:bg-sky-900/40 border-sky-300 dark:border-sky-700",
};

const seqBadgeColor = "bg-amber-400 dark:bg-amber-500 text-amber-950";

export function MindmapNode({ data, id }: NodeProps) {
  const nodeData = data as unknown as MindmapNodeData;
  const { label, subtitle, color, seq } = nodeData;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${label}. Click to read more.`}
      className={`relative rounded-[2rem] border-2 px-5 py-4 min-w-[160px] max-w-[220px] text-center cursor-pointer transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${colorMap[color]}`}
      data-testid={`mindmap-node-${id}`}
    >
      <div
        className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${seqBadgeColor}`}
        aria-hidden="true"
      >
        {seq}
      </div>

      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0 !w-0 !h-0" />

      <p className="text-xs font-semibold leading-snug">{label}</p>
      {subtitle && (
        <p className="text-[10px] leading-tight text-muted-foreground mt-1">{subtitle}</p>
      )}

      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0 !w-0 !h-0" />
    </div>
  );
}
