import React from "react";

export const Card = ({ className, children }) => (
  <div className={`rounded-xl ${className}`}>{children}</div>
);

export const CardContent = ({ className, children }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardHeader = ({ className, children }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);

export const CardTitle = ({ className, children }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
  >
    {children}
  </h3>
);
