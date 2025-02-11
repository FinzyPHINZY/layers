import Image from 'next/image';
import { IntegrationType } from '../sections/Integrations';
import { twMerge } from 'tailwind-merge';

const IntegrationColumn = ({
  className,
  integrations,
}: {
  integrations: IntegrationType;
  className?: string;
}) => {
  return (
    <div className={twMerge('flex flex-col gap-4 pb-4', className)}>
      {integrations.map((i) => (
        <div
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
          key={i.name}
        >
          <div className="flex justify-center">
            <Image src={i.icon} alt="icon" className="size-24 " />
          </div>
          <h3 className="text-3xl text-center mt-6">{i.name}</h3>
          <p className="text-center text-white/50 mt-2">{i.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IntegrationColumn;
