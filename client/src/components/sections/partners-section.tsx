import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake } from "lucide-react";

import logo1 from "@assets/image_1769049160749.png";
import logo2 from "@assets/image_1769049224457.png";
import logo3 from "@assets/image_1769049249459.png";
import logo4 from "@assets/image_1769049293041.png";
import logoDb from "@assets/image_1769049529279.png";
import logoSamsung from "@assets/image_1769049563636.png";
import logoKb from "@assets/image_1769049589556.png";
import logoHyundai from "@assets/image_1769049616829.png";

const partners = [
  { name: "자동차매매공제조합", logo: logo1 },
  { name: "iM캐피탈", logo: logo2 },
  { name: "신한카드", logo: logo3 },
  { name: "JB우리캐피탈", logo: logo4 },
  { name: "DB손해보험", logo: logoDb },
  { name: "삼성화재", logo: logoSamsung },
  { name: "KB손해보험", logo: logoKb },
  { name: "현대해상", logo: logoHyundai },
];

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-20 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Partners</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            함께하는 파트너사
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center p-4 bg-background rounded-xl border border-border"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 sm:h-12 w-auto max-w-[160px] object-contain"
                    data-testid={`img-partner-${index}`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              자동차연장보증서비스 안내
            </h3>
            <p className="text-muted-foreground">
              자동차매매공제조합의 연장보증서비스(EW)를 확인하세요
            </p>
          </div>
          
          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.youtube.com/embed/T2FCYaCa0L4"
              title="자동차매매공제조합 연장보증서비스(EW)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              data-testid="video-ew-service"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
