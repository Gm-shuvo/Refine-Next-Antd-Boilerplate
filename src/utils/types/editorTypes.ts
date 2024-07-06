export type EditorCanvasTypes = "StartNode" | "CustomNode";

export type EditorCanvasNodeType = {
  id: string
  type: EditorCanvasTypes
  position: {
    x: number
    y: number
  }
  data: {
    label : string
    getId: () => string
    setNodes: any
    nodedata: any
    getNodeData: () => any
    setEdges: (edges: any) => void
    getEdges: () => any
  }
}

export type EditorCanvasCardType  = {
  id: string
  title: string
  type: EditorCanvasTypes
  data: any
}