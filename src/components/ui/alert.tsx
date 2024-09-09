import { cn } from "@/utils/functions/classNames";

export const Alert: React.FC<{ variant: 'destructive' | 'default'; children?: React.ReactNode; className?: string }> = ({ variant, children, className = '' }) => (
    <div className={cn(
        'rounded-lg p-4 ',
        variant === 'destructive' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700',
        className
    )} role="alert">
        {children}
    </div>
);

export const AlertDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = 'text-sm' }) => (
    <div className={cn(className)}>{children}</div>
);