import Image from "next/image";

const socials = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Raghurajpratapsingh28",
    label: "GitHub",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/raghuraj2810?s=21",
    label: "Twitter",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/raghuraj-pratap-singh-712811294/",
    label: "LinkedIn",
  },
  {
    id: 4,
    img: "/cv.png",
    link: "https://drive.google.com/file/d/1hqILpJjmGddF9OmjwZHa-X6olQuJ_Zif/view?usp=drive_link",
    label: "CV",
  },
];

const SideSocials = () => {
  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col gap-4">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="group transition-transform hover:scale-110 active:scale-95 shadow-lg rounded-full bg-black/70 p-2 border border-white/10 backdrop-blur flex items-center justify-center relative"
        >
          <img src={social.img} alt={social.label} width={28} height={28} />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SideSocials; 