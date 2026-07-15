import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Banknote, ArrowDownToLine, Headset, Building2, Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import benefitsImage from "@assets/generated_images/large_car_dealership_aerial_view.png";

const comparisons = [
  {
    category: "마케팅 비용",
    big: "TV광고, 연예인 모델 등 과도한 비용",
    kuda: "실속 있는 운영으로 비용 절감",
  },
  {
    category: "유통 구조",
    big: "복잡한 단계, 다양한 이해관계자",
    kuda: "직매입 직매각, 합리적 가격",
  },
  {
    category: "사후 관리",
    big: "매뉴얼화된 콜센터 응대",
    kuda: "담당 딜러의 책임있는 케어",
  },
];

const benefits = [
  { icon: Banknote, title: "가격 거품 제거", description: "과도한 마케팅 비용 없이 실속 가격" },
  { icon: ArrowDownToLine, title: "유통 최소화", description: "직매입 직매각으로 합리적 가격" },
  { icon: Headset, title: "대기업급 관리", description: "신뢰 있는 상담과 사후 케어" },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="bg-muted/30 overflow-hidden">
      <div className="relative h-64 sm:h-80 lg:h-96">
        <img
          src={benefitsImage}
          alt="대형 중고차 매장 전경"
          className="w-full h-full object-cover"
          data-testid="img-benefits"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-muted/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
              Benefit
            </span>
            <h2 className="text-responsive-title font-bold text-white drop-shadow-lg">
              대기업의 시스템으로,
              <br />
              유통과정만 줄였습니다
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-lg text-muted-foreground mb-12"
        >
          신뢰를 광고한다고 중고차 성능이 좋아지고 가격이 낮아질까요?
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full p-6 sm:p-8 border-destructive/20 bg-destructive/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground">대기업 중고차</h3>
              </div>
              
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="font-medium text-foreground">{item.big}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full p-6 sm:p-8 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">협동조합 소속 딜러</h3>
              </div>
              
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="font-medium text-foreground">{item.kuda}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className="p-5 text-center hover-elevate border border-border bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-1" data-testid={`text-benefit-title-${index}`}>
                {benefit.title}
              </h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
