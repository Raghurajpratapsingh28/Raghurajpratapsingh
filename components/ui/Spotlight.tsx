// import React from "react";
// import { cn } from "@/lib/utils";

// type SpotlightProps = {
//   className?: string;
//   fill?: string;
// };

// export const Spotlight = ({ className, fill }: SpotlightProps) => {
//   return (
//     <svg
//       className={cn(
//         "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
//         className
//       )}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 3787 2842"
//       fill="none"
//     >
//       <g filter="url(#filter)">
//         <ellipse
//           cx="1924.71"
//           cy="273.501"
//           rx="1924.71"
//           ry="273.501"
//           transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
//           fill={fill || "white"}
//           fillOpacity="0.21"
//         ></ellipse>
//       </g>
//       <defs>
//         <filter
//           id="filter"
//           x="0.860352"
//           y="0.838989"
//           width="3785.16"
//           height="2840.26"
//           filterUnits="userSpaceOnUse"
//           colorInterpolationFilters="sRGB"
//         >
//           <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//           <feBlend
//             mode="normal"
//             in="SourceGraphic"
//             in2="BackgroundImageFix"
//             result="shape"
//           ></feBlend>
//           <feGaussianBlur
//             stdDeviation="151"
//             result="effect1_foregroundBlur_1065_8"
//           ></feGaussianBlur>
//         </filter>
//       </defs>
//     </svg>
//   );
// };

"use client";
import React from "react";
import { motion } from "motion/react";

type SpotlightProps = {
    className?:string;
    fill?:string;
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />
      </motion.div>
    </motion.div>
  );
};
