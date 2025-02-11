import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Tag({
  className,
  children,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'inline-flex items-center border border-lime-400 text-lime-400 gap-2 px-3 py-1 rounded-full uppercase',
        className
      )}
      {...otherProps}
    >
      <span className="">&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
