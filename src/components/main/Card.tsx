import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="card bg-background/75 w-fit shadow-sm shadow-background-hover border border-background-secondary rounded-box">
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
