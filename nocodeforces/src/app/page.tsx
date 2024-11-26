import { Linkedin, Twitter, Globe } from "lucide-react";
import Form from "./appComponents/Form";

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-blue-300 hover:text-white transition-colors duration-300"
      aria-label={label}
    >
      <Icon size={24} />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-20 text-yellow-300 tracking-wider">
          No<span className=" text-blue-300">Codeforces</span> 
        </h1>
        <Form />
      </div>

      <div className="absolute bottom-5 flex justify-center items-center gap-x-4 gap-y-6 pb-8">
        <SocialLink
          href="https://www.linkedin.com/in/sameerposwal/"
          icon={Linkedin}
          label="LinkedIn Profile"
        />
        <SocialLink
          href="https://twitter.com/sameerposwal03"
          icon={Twitter}
          label="Twitter Profile"
        />
        <SocialLink
          href="https://sameerposwal.vercel.app/"
          icon={Globe}
          label="Portfolio Website"
        />
      </div>
    </main>
  )
}
