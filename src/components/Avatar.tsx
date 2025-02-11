import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Avatar = ({
  children,
  className,
  ...otherprops
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        'size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900',
        className
      )}
      {...otherprops}
    >
      {children}
    </div>
  );
};

export default Avatar;
