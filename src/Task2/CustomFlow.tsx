import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  useEdgesState,
  addEdge,
  Position,
  Node,
  Edge,
  OnConnect,
} from "reactflow";
import "reactflow/dist/style.css";
import { CustomNode } from "./CustomNode";
import {
  TEdge,
  TFlow,
  TNode,
  backgroundColor,
  defaultViewport,
  snapGrid,
} from "./data";
import "./styles.scss";

interface CustomNodeFlowProps {
  onChange: (changes: any) => void;
  flow: TFlow;
}

const nodeTypes = {
  customNode: CustomNode,
};

export const CustomFlow = ({ onChange, flow }: CustomNodeFlowProps) => {
  const [edges, setEdges, onEdgesChange] = useEdgesState<TEdge[]>([]);

// обновление узлов при каждом изменении объекта flow
  const nodes: Node[] = flow.nodes.map((el: TNode) => {
    return {
      id: el.id.toString(),
      position: {
        x: el.pos.x,
        y: el.pos.y,
      },
      data: { title: el.title },
      style: {
        border: "1px solid #777",
        padding: 10,
        borderRadius: 5,
        backgroundColor: backgroundColor[el.state],
      },
      type: "customNode",
      sourcePosition: Position.Right,
    };
  });

  useEffect(() => {
    const initialEdges: Edge[] = flow.edges.map((el) => {
      return {
        id: `${el.from.toString()}-${el.to.toString()}`,
        source: el.from.toString(),
        target: el.to.toString(),
        animated: true,
        style: { stroke: "#000000" },
      };
    });

    setEdges(initialEdges);
  }, []);

  const onConnect: OnConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, animated: true, style: { stroke: "#000000" } },
          eds
        )
      ),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultViewport={defaultViewport}
    ></ReactFlow>
  );
};
