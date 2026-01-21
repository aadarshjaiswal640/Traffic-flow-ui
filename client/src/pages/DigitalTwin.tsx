import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrafficCone, MapPin, Gauge, Layers, Eye, Activity } from "lucide-react";

export default function DigitalTwin() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-display font-bold text-white">Digital Twin Module</h2>
        <p className="text-muted-foreground">Virtual replica for safe environment AI training</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-card/40 border-white/5 overflow-hidden">
            <CardHeader className="border-b border-white/5">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Intersection Simulation View
                </CardTitle>
                <Badge variant="outline" className="font-mono text-xs">SUMO_RENDER_v1.2</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0 relative h-[500px] bg-black/60 flex items-center justify-center">
              {/* Simulation Mockup Visualization */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "20px 20px"
                }} />
                
                {/* 4-way Intersection Graphic */}
                <div className="relative w-80 h-80">
                   <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-24 bg-slate-900 border-x border-white/10" />
                   <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-24 bg-slate-900 border-y border-white/10" />
                   
                   {/* Grid lines */}
                   <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-yellow-500/20 dashed" />
                   <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-yellow-500/20 dashed" />

                   {/* Vehicles */}
                   <motion.div animate={{ y: [0, 320] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-[calc(50%-15px)] w-4 h-6 bg-primary rounded-sm shadow-[0_0_10px_hsl(var(--primary))]" />
                   <motion.div animate={{ x: [320, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }} className="absolute right-0 top-[calc(50%+10px)] w-6 h-4 bg-blue-400 rounded-sm shadow-[0_0_10px_#60a5fa]" />
                </div>
              </div>

              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-black/60 backdrop-blur border-primary/20 text-primary">FPS: 60</Badge>
                <Badge className="bg-black/60 backdrop-blur border-primary/20 text-primary">ENTITY_COUNT: 42</Badge>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur p-3 rounded border border-white/10 font-mono text-[10px] grid grid-cols-4 gap-4">
                <div>LANE_01: <span className="text-primary">ACTIVE</span></div>
                <div>QUEUE_LEN: <span className="text-amber-400">12v</span></div>
                <div>WAIT_TIME: <span className="text-red-400">42s</span></div>
                <div>DENSITY: <span className="text-blue-400">0.82</span></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/40 border-white/5">
            <CardHeader>
              <CardTitle className="text-sm font-display uppercase tracking-widest text-primary">Simulation Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Intersection Type", val: "4-Way Signalized", icon: MapPin },
                { label: "Flow Model", val: "Krauss Follower", icon: Gauge },
                { label: "Lane Layout", val: "3 Inbound / 3 Outbound", icon: Layers },
                { label: "Update Freq", val: "10Hz (Real-time)", icon: Activity },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded bg-black/20 border border-white/5">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                  <span className="text-xs font-mono text-white">{item.val}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/40 border-white/5">
            <CardHeader>
              <CardTitle className="text-sm font-display uppercase tracking-widest text-primary">Digital Twin Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Zero-risk RL exploration",
                "Extreme weather scenario testing",
                "Peak-hour data replay",
                "Infrastructure-free validation"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {text}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
