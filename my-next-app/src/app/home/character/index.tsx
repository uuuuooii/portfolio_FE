import SpeechBubble from "../speechBubble"

const Character = () => {
  return (
    <div className="
        absolute 
        left-1/2 
        top-[40%]
        transform 
        -translate-x-1/2 
        -translate-y-1/2
    "
    >
         
        <div
        className="
            absolute    
            left-1/2 
            -translate-x-1/2 
            transform
            w-[240px] 
            h-[240px]
            bg-[url('/face-sprite-dark.png')]
            bg-no-repeat
            bg-[length:2400px_720px]
            animate-[blink_1s_steps(10)_infinite]
        "
        />
        <div className="
            [transform:perspective(1000px)_translateZ(100px)_scale(0.9)_rotateX(-20deg)_translateZ(0px)] 
            [transform-origin:50%_100%_0]"
        >
            {/* glowing light */}
            <div
                className="
                absolute
                left-1/2
                -translate-x-1/2
                bottom-[0%]  
                w-[160px]
                rounded-full
                shadow-[0_0_40px_10px_rgba(100,200,255,0.6)]
                brightness-110
                contrast-125
                animate-[glow_2s_ease-in-out_infinite]
                "
            />

            <img
                src="/labtop.png"
                alt=""
                width={390}
                height={237}
                className="
                max-w-[unset]
                w-[250px]
                left-1/2
                -translate-x-1/2
                relative
                inset-0
                translate-y-[100%]
                transform
                [perspective-origin:center_bottom]
                "
            />
        </div>

    </div>
  )
}

export default Character