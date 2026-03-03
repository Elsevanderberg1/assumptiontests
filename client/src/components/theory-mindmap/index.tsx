import { useState, useEffect, useMemo, useCallback } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  type Node,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ExternalLink } from "lucide-react";
import { MindmapNode } from "./mindmap-node";
import {
  mindmapNodes as initialNodes,
  mindmapEdges as initialEdges,
  nodeDetailContent,
  resourceLinks,
  type MindmapNodeData,
} from "./mindmap-data";

const nodeTypes: NodeTypes = {
  mindmapNode: MindmapNode,
};

const STAGGER_DELAY = 400;
const TOTAL_NODES = initialNodes.length;

function MindmapInner() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  useEffect(() => {
    if (visibleCount >= TOTAL_NODES) return;
    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, STAGGER_DELAY);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  const allNodes = useMemo(() => {
    const sorted = [...initialNodes].sort(
      (a, b) => (a.data as unknown as MindmapNodeData).seq - (b.data as unknown as MindmapNodeData).seq
    );
    return sorted.map((node) => {
      const nodeData = node.data as unknown as MindmapNodeData;
      const isVisible = nodeData.seq < visibleCount;
      return {
        ...node,
        style: {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.8)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          pointerEvents: isVisible ? ("auto" as const) : ("none" as const),
        },
      };
    });
  }, [visibleCount]);

  const visibleNodeIds = useMemo(
    () => {
      const sorted = [...initialNodes].sort(
        (a, b) => (a.data as unknown as MindmapNodeData).seq - (b.data as unknown as MindmapNodeData).seq
      );
      return new Set(sorted.filter((_, i) => i < visibleCount).map((n) => n.id));
    },
    [visibleCount]
  );

  const allEdges = useMemo(
    () =>
      initialEdges.map((e) => ({
        ...e,
        animated: true,
        style: {
          stroke: "hsl(var(--muted-foreground))",
          strokeWidth: 1.5,
          opacity: visibleNodeIds.has(e.source) && visibleNodeIds.has(e.target) ? 1 : 0,
          transition: "opacity 0.4s ease",
        },
      })),
    [visibleNodeIds]
  );

  const onNodeClick = useCallback((_: any, node: Node) => {
    setSelectedNodeId(node.id);
  }, []);

  const detail = selectedNodeId ? nodeDetailContent[selectedNodeId] : null;

  return (
    <div data-testid="theory-mindmap">
      <div
        className="w-full border rounded-lg bg-card/50 overflow-hidden"
        style={{ height: 480 }}
      >
        <ReactFlow
          nodes={allNodes}
          edges={allEdges}
          nodeTypes={nodeTypes}
          onNodeClick={onNodeClick}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          preventScrolling={false}
          minZoom={0.4}
          maxZoom={1.5}
          proOptions={{ hideAttribution: true }}
        />
      </div>

      <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground" data-testid="theory-resources">
        <span className="font-medium">Resources:</span>
        {resourceLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-foreground hover:text-muted-foreground inline-flex items-center gap-1"
            data-testid={`link-resource-${link.id}`}
          >
            {link.label} <ExternalLink className="h-3 w-3" />
          </a>
        ))}
      </div>

      <Sheet open={!!selectedNodeId} onOpenChange={(open) => !open && setSelectedNodeId(null)}>
        <SheetContent className="overflow-y-auto" data-testid="sheet-theory-detail">
          {detail && (
            <>
              <SheetHeader>
                <SheetTitle data-testid="sheet-theory-title">{detail.title}</SheetTitle>
              </SheetHeader>
              <div className="mt-4" data-testid="sheet-theory-content">
                {detail.content}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function TheoryMindmap() {
  return (
    <ReactFlowProvider>
      <MindmapInner />
    </ReactFlowProvider>
  );
}
