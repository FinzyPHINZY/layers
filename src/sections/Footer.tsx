import logoImage from '@/assets/images/logo.svg';
import Image from 'next/image';

const footerLinks = [
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' },
];

export default function Footer() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div className="">
            <Image src={logoImage} alt="logo" className="" />
          </div>
          <div className="">
            <p className="text-white/50 hover:text-lime-400 hover:underline">
              <a href="https://finzyphinzy.vercel.app" className="">
                Boluwatife Adeyemi
              </a>
            </p>
          </div>
          <div className="">
            <nav className="flex gap-6">
              {footerLinks.map((link, i) => (
                <a href={link.href} className="text-white/50 text-sm" key={i}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
