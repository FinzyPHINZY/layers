import Tag from '@/components/Tag';
import figmaIcon from '@/assets/images/figma-logo.svg';
import notionIcon from '@/assets/images/notion-logo.svg';
import slackIcon from '@/assets/images/slack-logo.svg';
import relumeIcon from '@/assets/images/relume-logo.svg';
import framerIcon from '@/assets/images/framer-logo.svg';
import githubIcon from '@/assets/images/github-logo.svg';
import Image from 'next/image';
import IntegrationColumn from '@/components/IntegrationColumn';

export const integrations = [
  {
    name: 'Figma',
    icon: figmaIcon,
    description: 'Figma is a collaborative interface design tool.',
  },
  {
    name: 'Notion',
    icon: notionIcon,
    description: 'Notion is an all-in-one workspace for notes and docs.',
  },
  {
    name: 'Slack',
    icon: slackIcon,
    description: 'Slack is a powerful team communication platform.',
  },
  {
    name: 'Relume',
    icon: relumeIcon,
    description: 'Relume is a no-code website builder and design system.',
  },
  {
    name: 'Framer',
    icon: framerIcon,
    description: 'Framer is a professional website prototyping tool.',
  },
  {
    name: 'GitHub',
    icon: githubIcon,
    description: 'GitHub is the leading platform for code collaboration.',
  },
];

export type IntegrationType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div className="">
            <Tag>Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Plays well with <span className="text-lime-400">others</span>
            </h2>

            <p className="text-white/50 mt-4 text-lg">
              Layes seamlessly connects with your favorite tools. making it easy
              to plug into any workflow and collaborate on multiple platforms
            </p>
          </div>

          <div className="">
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,transaprent)]">
              <IntegrationColumn integrations={integrations} />

              <IntegrationColumn
                reverse
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
              />

              <div className="flex flex-col gap-4 pb-4">
                {integrations.map((i) => (
                  <div
                    className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                    key={i.name}
                  >
                    <div className="flex justify-center">
                      <Image src={i.icon} alt="icon" className="size-24 " />
                    </div>
                    <h3 className="text-3xl text-center mt-6">{i.name}</h3>
                    <p className="text-center text-white/50 mt-2">
                      {i.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
