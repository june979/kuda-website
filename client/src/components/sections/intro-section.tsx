import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, ShieldCheck, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import introImage from "@assets/generated_images/dealer_customer_handshake_trust.png";

const features = [
  {
    icon: UserCheck,
    title: "투명한 실명제",
    description: "국토부 산하 매매조합 연합회 소속 딜러만",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "책임 보상제",
    description: "딜러개인이 아닌 협동조합이 보증합니다",
    gradient: "from-primary to-blue-600",
  },
  {
    icon: Scale,
    title: "공정한 기준",
    description: "대기업 수준의 엄격한 윤리 강령을 준수합니다.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="intro" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-responsive-title font-bold text-foreground mb-6 leading-tight">
              <span className="whitespace-nowrap">전국중고차딜러협동조합은</span>
              <br />
              <span className="text-primary">단순한 모임이 아닙니다</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              대한민국 전역에서 활동하는 정식 딜러들이 모여 만든
              <span className="font-semibold text-primary"> '소비자 보호 연합체'</span>입니다.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-3xl blur-3xl -z-10" />
            <img
              src={introImage}
              alt="신뢰할 수 있는 딜러와 고객의 만남"
              className="rounded-2xl shadow-2xl w-full object-cover"
              data-testid="img-intro"
            />
            <Card className="absolute -bottom-6 -left-6 p-4 bg-background/95 backdrop-blur-sm border border-border shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">소비자 보호 연합체</p>
                  <p className="text-sm text-muted-foreground">11,253명의 딜러가 함께</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
