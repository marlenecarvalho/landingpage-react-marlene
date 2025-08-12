import { useState, useRef, useEffect } from "react";

export default function Motivacional() {
    const imgRef = useRef(null);
    const [visivel, setvisivel] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setvisivel(true);
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (imgRef.current) {
            observer.observe(imgRef.current);
        }
        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
         <div className="">
                   <div>
                  <img 
                  ref={imgRef}
                  src="/disciplina.png" 
                  alt="disciplina" 
                  height={800} 
                  width={1200}
                  className={visivel ? "animate-fade-in" : "hidden"}
                  />
                </div> <div className="mb-16 top-1/2 right-1/2 absolute">
                 
                </div>
                </div>
    )
    

}