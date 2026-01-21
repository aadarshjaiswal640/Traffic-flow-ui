import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactFlow, { 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState 
} from 'reactflow';
import 'reactflow/dist/style.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const initialNodes = [
  { 
    id: '1', 
    position: { x: 250, y: 0 }, 
    data: { label: 'Traffic Dataset (CSV)' },
    style: { background: '#1e293b', color: '#fff', border: '1px solid #3b82f6', borderRadius: '8px', padding: '10px' }
  },
  { 
    id: '2', 
    position: { x: 250, y: 100 }, 
    data: { label: 'Dataset Converter' },
    style: { background: '#1e293b', color: '#fff', border: '1px solid #64748b', padding: '10px' }
  },
  { 
    id: '3', 
    position: { x: 250, y: 220 }, 
    data: { label: 'Digital Twin Simulation (SUMO)' },
    style: { background: '#0f172a', color: '#00f0ff', border: '2px solid #00f0ff', fontWeight: 'bold', padding: '15px', borderRadius: '8px' }
  },
  { 
    id: '4', 
    position: { x: 250, y: 380 }, 
    data: { label: 'RL Environment Interface' },
    style: { background: '#1e293b', color: '#fff', border: '1px solid #64748b', padding: '10px' }
  },
  { 
    id: '5', 
    position: { x: 250, y: 500 }, 
    data: { label: 'PPO Decision Agent' },
    style: { background: '#0f172a', color: '#ffb700', border: '2px solid #ffb700', fontWeight: 'bold', padding: '15px', borderRadius: '8px' }
  },
  { 
    id: '6', 
    position: { x: 550, y: 500 }, 
    data: { label: 'Agentic AI Supervision' },
    style: { background: '#450a0a', color: '#f87171', border: '1px solid #f87171', padding: '10px' }
  },
  { 
    id: '7', 
    position: { x: 250, y: 620 }, 
    data: { label: 'Optimized Signal Timings' },
    style: { background: '#1e293b', color: '#22c55e', border: '1px solid #22c55e', padding: '10px' }
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#64748b' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#64748b' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, label: 'State Obs', labelStyle: { fill: '#64748b', fontSize: 10 }, style: { stroke: '#00f0ff' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#00f0ff' } },
  { id: 'e5-7', source: '5', target: '7', animated: true, label: 'Control Actions', labelStyle: { fill: '#64748b', fontSize: 10 }, style: { stroke: '#ffb700' } },
  { id: 'e7-3', source: '7', target: '3', animated: true, type: 'step', style: { stroke: '#22c55e' } },
  { id: 'e6-5', source: '6', target: '5', animated: true, style: { stroke: '#f87171' }, label: 'Auto-Tuning', labelStyle: { fill: '#f87171', fontSize: 10 } },
];

export default function Architecture() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 h-full flex flex-col"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-display font-bold text-white">System Architecture</h2>
          <p className="text-muted-foreground">High-level data flow and component interaction diagram</p>
        </div>
        <Badge variant="outline" className="border-primary text-primary">v1.0 Schematic</Badge>
      </div>

      <motion.div variants={item} className="flex-1 min-h-[650px] border border-white/10 rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm relative">
        <div className="absolute top-4 left-4 z-10 bg-black/60 p-2 rounded text-xs font-mono text-primary border border-primary/20">
          INTERACTIVE DIAGRAM - ZOOM/PAN ENABLED
        </div>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          className="bg-transparent"
        >
          <Background color="#1e293b" gap={20} />
          <Controls className="bg-card border-white/10 fill-white" />
        </ReactFlow>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Data Pipeline", color: "bg-blue-500" },
          { label: "State Observation", color: "bg-cyan-500" },
          { label: "Control Loop", color: "bg-amber-500" },
          { label: "Agent Oversight", color: "bg-red-500" },
        ].map((legend, i) => (
          <div key={i} className="flex items-center gap-2 p-3 rounded bg-card/50 border border-white/5">
            <div className={`w-3 h-3 rounded-full ${legend.color}`} />
            <span className="text-sm font-mono text-muted-foreground">{legend.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
