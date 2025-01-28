import { Card } from "./Card";

export const Intro = () => {
  return (
    <Card>
      <div className="flex flex-col gap-6 max-w-lg text-center">
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-3">
            <img src="/logo-small.svg" alt="Planit Logo" className="w-16 h-16 md:w-20 md:h-20" />
            <h1 className="text-4xl font-bold text-royal-purple">Welcome to Planit</h1>
          </div>
          <p className="text-lg text-text-primary/80">
            Your simple, straightforward planning companion
          </p>
        </div>
        
        <div className="divider" />
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 justify-center">
            <div className="badge badge-primary">Simple</div>
            <div className="badge badge-secondary">Fast</div>
            <div className="badge badge-accent">Smart</div>
          </div>
          
          <p className="text-text-primary/70">
            No complicated features. Just intelligent scheduling. 
            Our greedy algorithm automatically generates optimized schedules 
            based on your tasks and available time blocks.
          </p>
        </div>

        <button className="btn btn-primary w-fit mx-auto">
          Get Started
        </button>
      </div>
    </Card>
  );
};
