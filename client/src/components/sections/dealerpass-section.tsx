import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, BadgeCheck, ArrowRight, X, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import dealerpassImage1 from "@assets/image_1769044497543.png";
import dealerpassImage2 from "@assets/image_1769044532564.png";
import kudaLogo from "@assets/kuda-logo-symbol.png";
import badDealerImage from "@assets/image_1769043820718.png";
import goodDealerImage from "@assets/image_1769043850006.png";

const beforeAfter = {
  before: [
    "문신, 금목걸이, 강압적인 분위기",
    "종이 계약서, 불투명한 거래",
    "신원 불명, 연락 두절 위험",
  ],
  after: [
    "투명한 이력 공개, 정장 차림의 매너",
    "디지털 표준 계약, 명확한 조건",
    "조합 인증 딜러, 책임 보증",
  ],
};

export default function DealerPassSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dealerpass" className="py-24 sm:py-32 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
              <div className="relative w-40 h-24 sm:w-56 sm:h-32 flex items-center justify-center">
                <img
                  src={kudaLogo}
                  alt="KUDA"
                  className="w-full h-full object-contain"
                  data-testid="img-kuda-logo"
                />
              </div>
            </motion.div>

            <div className="text-center sm:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary text-sm font-medium mb-4">
                Digital Trust
              </span>
              <h2 className="text-responsive-title font-bold text-foreground">
                이 마크가 있다면
                <br />
                <span className="text-primary">안심하세요</span>
              </h2>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span className="font-semibold text-foreground">딜러패스(Dealer Pass)</span>는 협동조합이 인증한 딜러에게만 부여되는
            <span className="text-primary font-semibold"> '디지털 신분증'</span>입니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 border-destructive/30 bg-destructive/5 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <h3 className="font-bold text-destructive">Before</h3>
                </div>
                <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-5 rounded-full overflow-hidden border-2 border-destructive/30 shadow-md">
                  <img
                    src={badDealerImage}
                    alt="나쁜 딜러"
                    className="w-full h-full object-cover object-top"
                    data-testid="img-bad-dealer"
                  />
                </div>
                <ul className="space-y-3">
                  {beforeAfter.before.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 border-primary/30 bg-primary/5 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-primary">After</h3>
                </div>
                <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-5 rounded-full overflow-hidden border-2 border-primary/30 shadow-md">
                  <img
                    src={goodDealerImage}
                    alt="좋은 딜러"
                    className="w-full h-full object-cover object-top"
                    data-testid="img-good-dealer"
                  />
                </div>
                <ul className="space-y-3">
                  {beforeAfter.after.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative flex gap-3 items-center">
              <img
                src={dealerpassImage2}
                alt="딜러패스 앱 - 인증"
                className="w-32 sm:w-36 rounded-2xl border-2 border-gray-700 shadow-lg"
                data-testid="img-dealerpass-mockup-2"
              />
              <img
                src={dealerpassImage1}
                alt="딜러패스 앱 - 홈"
                className="w-32 sm:w-36 rounded-2xl border-2 border-gray-700 shadow-lg"
                data-testid="img-dealerpass-mockup-1"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Card className="inline-flex items-center gap-4 p-4 sm:p-6 bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
            <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center p-1 flex-shrink-0">
              <img
                src={kudaLogo}
                alt="KUDA"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">딜러패스 마크를 확인하세요</p>
              <p className="text-sm text-muted-foreground">거래 전, 자세히 확인하고 방문하세요</p>
            </div>
            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
