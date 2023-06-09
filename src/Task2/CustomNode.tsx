import React, { memo } from "react";
import { Handle, Position } from "reactflow";

interface CustomNodeProps {
  data: {
    title: string;
  };
}

export const CustomNode = memo(({ data }: CustomNodeProps) => {
  return (
    <>
      <div>{data.title}</div>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ top: 20, background: "#555" }}
        isConnectable={true}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ top: 20, background: "#555" }}
        isConnectable={true}
      />
    </>
  );
});
