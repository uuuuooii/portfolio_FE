'use client'
import { useEffect, useState } from "react";
import { words } from "./data";

const SpeechBubble = () => {
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => {
      if (idx < words.length - 1) setIdx(p => p + 1);
      else setDone(true);
    }, 2000);
    return () => clearTimeout(t);
  }, [idx, done]);

  return (
    <ul className="
      sm:relative 
      sm:top-[24%] 
      sm:left-[72%] 
      sm:[&>li]:mr-auto
      flex 
      gap-2 
      flex-col 
      sm:items-end 
      items-center
      p-6 
      [position:unset] 
      top-auto  
      left-auto          
    ">
      {words.map((item, i) => {
        const isActive = i === idx;
        const isPast = i < idx;

        // 각 아이템마다 다른 파라미터 만들기 (결정적 pseudo-random)
        // - 딜레이: 음수로 넣어 초기 대기 없이 바로 어긋난 상태로 시작
        const delay = -(0.12 * (i % 10));              // ex) 0, -0.12s, -0.24s ...
        const duration = 2 + ((i * 37) % 5) * 0.15;    // 2.0s ~ 2.6s
        const liftPx = -3 - ((i * 53) % 4);            // -6px ~ -9px
        const s1 = 1;                                  // 기본 스케일
        const s2 = 1.01 + ((i * 17) % 3) * 0.005;      // 1.01 ~ 1.02 ~ 1.015

        return (
          <li
            key={item.id}
            className={`
              font-medium
              relative 
              list-none 
              inline-block 
              max-w-[80%]
              rounded-2xl px-4 py-1 text-black shadow
              transition-all duration-700 ease-in-out origin-bottom-right
              [will-change:transform]
              ${isActive
                ? "bg-lime-400 z-20 scale-100 opacity-100 animate-floatY"
                : isPast
                ? "bg-lime-300 z-10 scale-95 opacity-80 animate-floatY"
                : "opacity-0 scale-95"}
            `}
            style={
              {
                // 항목별 애니메이션 파라미터
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                // CSS 변수로 떠오르는 높이/스케일 미세 조절
                ['--y' as any]: `${liftPx}px`,
                ['--s' as any]: s1,
                ['--s2' as any]: s2,
              } as React.CSSProperties
            }
          >
            <h1 className="font-medium">{item.text}</h1>

            <span
              className={`
                pointer-events-none 
                absolute 
                sm:-left-1.5 
                sm:bottom-2
                [left:calc(var(--spacing)*2.5)]
                [bottom:calc(var(--spacing)*-1)]
                h-0 
                w-0 
                border-y-6 
                border-r-8 
                border-y-transparent
                ${isActive ? "border-r-lime-400" : isPast ? "border-r-lime-300" : ""}
              `}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default SpeechBubble;
