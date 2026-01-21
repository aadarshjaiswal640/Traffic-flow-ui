import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend, Cell 
} from "recharts";
import { ArrowUpRight, ArrowDownRight, Clock, Car, Zap, Activity } from "lucide-react";

// Mock Data
const waitingTimeData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  baseline: 40 + Math.random() * 30 + (i > 8 && i < 19 ? 40 : 0), // Peak hours traffic
  ai: 20 + Math.random() * 15 + (i > 8 && i < 19 ? 20 : 0),
}));

const throughputData = [
  { name: "Fixed-Time", vehicles: 1200 },
  { name: "Max-Pressure", vehicles: 1450 },
  { name: "RL Agent (PPO)", vehicles: 1850 },
];

const emissionData = Array.from({ length: 7 }, (_, i) => ({
  day: `Day ${i+1}`,
  reduction: 15 + Math.random() * 10
}));

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-white">Simulation Dashboard</h2>
          <p className="text-muted-foreground">Real-time visualization of system performance metrics</p>
        </div>
        <div className="flex gap-2">
           <div className="bg-red-500/10 text-red-500 px-3 py-1 rounded border border-red-500/20 text-xs font-mono flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
             LIVE SIMULATION
           </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card/40 border-white/5 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Wait Time</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">24.5s</div>
            <p className="text-xs text-green-400 flex items-center mt-1">
              <ArrowDownRight className="w-3 h-3 mr-1" />
              -35% vs Baseline
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-card/40 border-white/5 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Throughput</CardTitle>
            <Car className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">1,850</div>
            <p className="text-xs text-muted-foreground mt-1">Vehicles / Hour</p>
          </CardContent>
        </Card>

        <Card className="bg-card/40 border-white/5 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Signal Efficiency</CardTitle>
            <Zap className="h-4 w-4 text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">92%</div>
            <p className="text-xs text-green-400 flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +12% Optimization
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/40 border-white/5 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Training Episode</CardTitle>
            <Activity className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">#4,291</div>
            <p className="text-xs text-muted-foreground mt-1">Converging...</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts */}
      <Tabs defaultValue="wait-time" className="space-y-4">
        <TabsList className="bg-black/20 border border-white/5">
          <TabsTrigger value="wait-time">Waiting Time Analysis</TabsTrigger>
          <TabsTrigger value="throughput">Throughput Comparison</TabsTrigger>
          <TabsTrigger value="emissions">Emission Reduction</TabsTrigger>
        </TabsList>

        <TabsContent value="wait-time" className="space-y-4">
          <Card className="bg-card/40 border-white/5">
            <CardHeader>
              <CardTitle>Average Waiting Time (24h)</CardTitle>
              <CardDescription>Comparison between Fixed-Time Baseline and AI Agent</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={waitingTimeData}>
                  <defs>
                    <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorBase" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}s`} />
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="baseline" stroke="#ef4444" fillOpacity={1} fill="url(#colorBase)" name="Fixed-Time Baseline" strokeWidth={2} />
                  <Area type="monotone" dataKey="ai" stroke="#00f0ff" fillOpacity={1} fill="url(#colorAi)" name="AI Optimized" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="throughput" className="space-y-4">
          <Card className="bg-card/40 border-white/5">
            <CardHeader>
              <CardTitle>Vehicle Throughput Comparison</CardTitle>
              <CardDescription>Total vehicles cleared per hour under heavy traffic</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={throughputData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155' }}
                  />
                  <Bar dataKey="vehicles" fill="#00f0ff" radius={[4, 4, 0, 0]} barSize={60}>
                    {throughputData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 2 ? '#00f0ff' : '#334155'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Intersection Visualizer Mockup */}
      <Card className="bg-card/40 border-white/5 overflow-hidden">
        <CardHeader>
           <CardTitle>Live Intersection Digital Twin</CardTitle>
        </CardHeader>
        <CardContent className="relative h-[300px] flex items-center justify-center bg-black/40">
           {/* Simple CSS Intersection */}
           <div className="relative w-64 h-64">
              {/* Roads */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-20 bg-slate-800 border-x border-slate-700"></div>
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-20 bg-slate-800 border-y border-slate-700"></div>
              
              {/* Markings */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-yellow-500/50"></div>
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-yellow-500/50"></div>
              
              {/* Cars (Dots) */}
              <motion.div 
                animate={{ y: [0, 200], opacity: [0, 1, 1, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-[calc(50%-20px)] w-3 h-5 bg-cyan-400 rounded-sm shadow-[0_0_10px_cyan]"
              />
              <motion.div 
                animate={{ x: [0, 200], opacity: [0, 1, 1, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute left-0 top-[calc(50%+10px)] w-5 h-3 bg-red-400 rounded-sm shadow-[0_0_10px_red]"
              />
              
              {/* Signals */}
              <div className="absolute top-[calc(50%-40px)] left-[calc(50%-40px)] w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_red] animate-pulse" />
              <div className="absolute bottom-[calc(50%-40px)] right-[calc(50%-40px)] w-4 h-4 bg-green-500 rounded-full shadow-[0_0_15px_green]" />
           </div>
           
           <div className="absolute bottom-4 right-4 text-xs font-mono text-muted-foreground bg-black/60 p-2 rounded">
              Phase: North-South Green
              <br/>
              Next Switch: 12s
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
