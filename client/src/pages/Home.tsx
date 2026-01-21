import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronRight, CheckCircle2, AlertTriangle, Layers } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/abstract_digital_city_traffic_network_schematic.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Hero Section */}
      <motion.div variants={item} className="relative rounded-xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Traffic Network" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>
        
        <div className="relative z-10 p-8 md:p-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            SYSTEM DESIGN DOCUMENT V1.0
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            AI-Based Intelligent <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 text-glow">
              Traffic Optimization
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            A next-generation traffic signal control system leveraging Reinforcement Learning (PPO), 
            Digital Twins, and Agentic AI supervision to optimize urban mobility without physical sensors.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/architecture">
              <Button size="lg" className="bg-primary text-background hover:bg-primary/90 font-semibold gap-2">
                Explore Architecture <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/modules">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 gap-2">
                View Modules <Layers className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats / Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            title: "Reinforcement Learning", 
            desc: "PPO-based adaptive signal control learning from simulated environments.",
            icon: CheckCircle2,
            color: "text-primary"
          },
          { 
            title: "Digital Twin", 
            desc: "Virtual replica of intersections for safe AI training and validation.",
            icon: Layers,
            color: "text-blue-400"
          },
          { 
            title: "Zero Hardware", 
            desc: "Purely dataset-driven approach requiring no physical sensors or cameras.",
            icon: AlertTriangle,
            color: "text-amber-400"
          }
        ].map((stat, i) => (
          <motion.div key={i} variants={item}>
            <Card className="h-full bg-card/40 border-white/5 hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-2 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <CardTitle className="font-display tracking-wide">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Project Objective */}
      <motion.div variants={item}>
        <Card className="bg-card/30 border-white/10 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl font-display text-primary">Project Objective</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              To design an intelligent traffic signal control system that optimizes urban traffic flow using 
              advanced AI techniques, eliminating the need for expensive physical infrastructure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded border border-white/5 bg-black/20">
                <h3 className="text-primary font-mono text-sm mb-3 uppercase">Core Technologies</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-primary" /> Proximal Policy Optimization (PPO)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-primary" /> SUMO / CityFlow Simulation
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-primary" /> Agentic AI Supervision
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded border border-white/5 bg-black/20">
                <h3 className="text-amber-400 font-mono text-sm mb-3 uppercase">Key Constraints</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" /> No IoT Sensors or Cameras
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" /> Public Datasets Only
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-amber-400" /> System Design Focus
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
