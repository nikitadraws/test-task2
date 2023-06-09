export enum NodeState {
  DANGER = "danger",
  WARNING = "warning",
  NORMAL = "normal",
}

export interface TNode {
  id: number;
  title: string;
  state: NodeState;
  pos: {
    x: number;
    y: number;
  };
}

export interface TEdge {
  from: number;
  to: number;
  width: number;
}

export interface TFlow {
  nodes: TNode[];
  edges: TEdge[];
}

export const snapGrid: [number, number] = [3, 3];

export const defaultViewport = { x: 0, y: 0, zoom: 1.2 };

export const backgroundColor = {
  danger: "rgba(255, 0, 0, 0.65)",
  warning: "rgb(255, 255, 0, 0.65)",
  normal: "rgba(0, 255, 0, 0.65)",
};

export const initialNodes: TNode[] = [
  {
    id: 1,
    title: "danger",
    state: NodeState.DANGER,
    pos: {
      x: 180,
      y: 80,
    },
  },
  {
    id: 2,
    title: "warning",
    state: NodeState.WARNING,
    pos: {
      x: 180,
      y: 150,
    },
  },
  {
    id: 3,
    title: "normal",
    state: NodeState.NORMAL,
    pos: {
      x: 180,
      y: 220,
    },
  },
  {
    id: 4,
    title: "node",
    state: NodeState.NORMAL,
    pos: {
      x: 450,
      y: 110,
    },
  },
];

export const initialEdges: TEdge[] = [
  {
    from: 1,
    to: 4,
    width: 20,
  },
  {
    from: 2,
    to: 4,
    width: 21,
  },
  {
    from: 3,
    to: 4,
    width: 22,
  },
  {
    from: 3,
    to: 4,
    width: 22,
  },
];
