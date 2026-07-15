import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, Ban, Headphones, ShieldCheck, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import roleImage from "@assets/generated_images/professional_customer_service_team.png";

const roles = [
  {
    icon: Scale,
    number: "01",
    title: "갈등 중재자",
    description: "딜러와 분쟁 발생 시, 조합이 직접 해결합니다.",
  },
  {
    icon: Ban,
    number: "02",
    title: "허위매물 퇴출",
    description: "허위 매물 모니터링 및 신고 시스템을 운영합니다.",
  },
  {
    icon: Headphones,
    number: "03",
    title: "단일 소통 창구",
    description: "고객 불만을 접수하는 공식 창구가 24시간 열려 있습니다.",
  },
];

export default function RoleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="role" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Solution
          </span>
          <h2 className="text-responsive-title font-bold text-foreground mb-6">
            딜러개인이 아닌,
            <br />
            <span className="text-primary">협동조합</span>이 보증합니다
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            협동조합 소속 딜러와의 거래는 곧 조합과의 거래와 같습니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-3xl blur-3xl -z-10" />
            <img
              src={roleImage}
              alt="전문 고객 서비스 팀"
              className="rounded-2xl shadow-2xl w-full object-cover"
              data-testid="img-role"
            />
            <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-primary text-white shadow-xl">
              <p className="text-2xl font-bold">24H</p>
              <p className="text-sm opacity-80">상담 가능</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              고객님께 <span className="text-primary">세 가지를 약속</span>합니다
            </h3>

            <div className="space-y-4">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="group p-5 hover-elevate border border-border bg-card">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-muted-foreground/30">{role.number}</span>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                          <role.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-1" data-testid={`text-role-title-${index}`}>
                          {role.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 p-5 rounded-xl bg-primary/5 border border-primary/20"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <p className="font-semibold text-foreground">
                  협동조합 소속 딜러
                  <br />
                  =&gt; 조합이 보증하는 안전한 거래
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
