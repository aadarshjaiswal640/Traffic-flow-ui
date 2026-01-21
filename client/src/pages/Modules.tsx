import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Truck, Brain, Eye, BarChart, Activity } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Dataset Module",
    icon: Database,
    color: "text-blue-400",
    description: "Ingests and processes public traffic data.",
    features: ["CSV Ingestion", "Arrival Rate Calculation", "Peak-Hour Detection", "Pattern Normalization"],
    tech: "Pandas, NumPy"
  },
  {
    id: 2,
    title: "Digital Twin",
    icon: Truck,
    color: "text-cyan-400",
    description: "Virtual replica of the intersection for simulation.",
    features: ["SUMO/CityFlow Integration", "Vehicle Queue Sim", "Lane Density Tracking", "Signal Phase Control"],
    tech: "SUMO, Python API"
  },
  {
    id: 3,
    title: "RL Module (PPO)",
    icon: Brain,
    color: "text-purple-400",
    description: "The core decision-making brain of the system.",
    features: ["Proximal Policy Optimization", "State: Queue & Wait Time", "Action: Phase Selection", "Reward: Min Wait Time"],
    tech: "PyTorch, Stable Baselines3"
  },
  {
    id: 4,
    title: "Agentic Supervision",
    icon: Eye,
    color: "text-red-400",
    description: "Monitors and corrects the RL agent's learning.",
    features: ["Unstable Pattern Detection", "Auto-Hyperparameter Tuning", "Retraining Triggers", "Robustness Checks"],
    tech: "Meta-Learning, Heuristics"
  },
  {
    id: 5,
    title: "Baseline Comparison",
    icon: BarChart,
    color: "text-gray-400",
    description: "Benchmarks performance against standard systems.",
    features: ["Fixed-Time Control", "Max-Pressure Control", "Throughput Comparison", "Delay Analysis"],
    tech: "Statistical Analysis"
  },
  {
    id: 6,
    title: "Evaluation Metrics",
    icon: Activity,
    color: "text-green-400",
    description: "Quantifies system success and efficiency.",
    features: ["Avg Waiting Time", "Queue Length", "CO2 Emission Est.", "Signal Efficiency"],
    tech: "Matplotlib, Seaborn"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

export default function Modules() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-display font-bold text-white">System Modules</h2>
        <p className="text-muted-foreground">Detailed breakdown of functional components</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <motion.div key={mod.id} variants={item}>
            <Card className="h-full bg-card/40 border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-card/60 group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-lg bg-white/5 ${mod.color} group-hover:scale-110 transition-transform duration-300`}>
                    <mod.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className="font-mono text-xs opacity-50">MOD-0{mod.id}</Badge>
                </div>
                <CardTitle className="mt-4 font-display tracking-wide text-xl">{mod.title}</CardTitle>
                <CardDescription>{mod.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-muted-foreground uppercase mb-2">Features</h4>
                  <ul className="space-y-1">
                    {mod.features.map((feat, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/50" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="w-full pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-muted-foreground">Tech Stack: </span>
                  <span className="text-xs font-mono text-primary">{mod.tech}</span>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
