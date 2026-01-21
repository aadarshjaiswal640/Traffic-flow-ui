import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Target, Zap, TrendingUp, AlertCircle } from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from "recharts";

const trainingData = Array.from({ length: 50 }, (_, i) => ({
  episode: i * 100,
  reward: -500 + Math.pow(i, 1.8) * 1.5 + Math.random() * 50,
  loss: 1.0 / (1 + i * 0.1) + Math.random() * 0.05
}));

export default function RLAgent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-display font-bold text-white">Reinforcement Learning Agent</h2>
          <p className="text-muted-foreground">PPO-based intelligent signal controller</p>
        </div>
        <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono">MODEL: PPO_v4_STABLE</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 bg-card/40 border-white/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Learning Curve (Mean Reward)
            </CardTitle>
            <CardDescription>Convergence progress across training episodes</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" />
                <XAxis dataKey="episode" stroke="#64748b" fontSize={10} hide />
                <YAxis stroke="#64748b" fontSize={10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }}
                  itemStyle={{ color: '#00f0ff' }}
                />
                <Line type="monotone" dataKey="reward" stroke="#00f0ff" strokeWidth={2} dot={false} animationDuration={2000} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card/40 border-white/5">
          <CardHeader>
            <CardTitle className="text-sm font-display uppercase tracking-widest text-primary">Agent Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-muted-foreground uppercase">State Space</label>
              <div className="flex flex-wrap gap-2">
                {["Queue Length", "Wait Time", "Phase", "Density"].map(s => (
                  <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-muted-foreground uppercase">Action Space</label>
              <div className="flex flex-wrap gap-2">
                {["Switch Phase", "Hold Duration", "Yellow Interval"].map(s => (
                  <Badge key={s} variant="outline" className="text-[10px] border-amber-500/30 text-amber-500">{s}</Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Learning Rate</span>
                <span className="text-xs font-mono">3e-4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Gamma (Discount)</span>
                <span className="text-xs font-mono">0.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Batch Size</span>
                <span className="text-xs font-mono">1024</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/40 border-white/5">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Target className="w-5 h-5" />
              Reward Function Design
            </CardTitle>
          </CardHeader>
          <CardContent>
             <div className="bg-black/40 p-4 rounded-lg border border-white/5 font-mono text-xs text-blue-300">
                Reward = -α(Σ Queue) - β(Σ Wait) - γ(SwitchingPenalty) + δ(Throughput)
             </div>
             <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
               The agent is incentivized to minimize total intersection pressure while penalizing frequent, inefficient signal flickering.
             </p>
          </CardContent>
        </Card>

        <Card className="bg-card/40 border-red-500/20">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              Agentic Supervision
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-start gap-3">
               <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
               <div className="text-sm">
                 <p className="font-semibold text-white">Anomaly Detection</p>
                 <p className="text-muted-foreground">Supervisory agent detects reward collapse or oscillating policies during peak hour training.</p>
               </div>
             </div>
             <div className="flex items-start gap-3">
               <Zap className="w-5 h-5 text-green-500 shrink-0" />
               <div className="text-sm">
                 <p className="font-semibold text-white">Auto-Tuning</p>
                 <p className="text-muted-foreground">Automatically adjusts clip range and entropy coefficients to restore learning stability.</p>
               </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
