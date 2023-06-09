import React, { useCallback, useState } from "react";

import { CustomFlow } from "./CustomFlow";
import { TFlow, initialEdges, initialNodes } from "./data";
import { NodePositionChange } from "reactflow";
import "./styles.scss";

export const Task2 = () => {
  const [flow, setFlow] = useState<TFlow>({
    nodes: initialNodes,
    edges: initialEdges,
  });

  // функция для изменения позиций узла,
  // здесь мутируется initialNodes, так не очень хорошо делать, но вроде работает
  const handleChange = useCallback((changes: [NodePositionChange]) => {
    if (changes.length && changes[0].dragging && changes[0].position) {
      const target = flow.nodes.findIndex(
        (el) => el.id.toString() === changes[0].id
      );
      const updatedNodes = [...flow.nodes];

      updatedNodes[target].pos = {
        x: changes[0].position.x,
        y: changes[0].position.y,
      };

      setFlow((prev) => {
        return {
          ...prev,
          nodes: updatedNodes,
        };
      });
    }
  }, []);

  return (
    <>
      <div className="flow-container">
        <div className="flow-container__box">
          {flow.nodes.map((el) => (
            <span>
              id: {el.id}; X pos: {el.pos.x}; Y pos: {el.pos.y}
            </span>
          ))}
        </div>
        <CustomFlow onChange={handleChange} flow={flow} />
      </div>
    </>
  );
};
