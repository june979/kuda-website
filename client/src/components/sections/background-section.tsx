import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, UserX, Shield, Users } from "lucide-react";
import backgroundImage from "@assets/generated_images/noir_honest_vs_dishonest_dealers.png";

export default function BackgroundSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="background" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="성실한 딜러 vs 악성 딜러"
          className="w-full h-full object-cover"
          data-testid="img-background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
      </div>

      <div className="relative py-24 sm:py-32" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/20 text-red-400 text-sm font-medium mb-4">
                Problem
              </span>
              <h2 className="text-responsive-title font-bold text-white mb-6 leading-tight">
                수많은 성실한 딜러들이
                <br />
                <span className="text-red-400">일부 악성 딜러 때문에</span>
                <br />
                피해를 보고 있습니다
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                대한민국에는 고객을 가족처럼 생각하는 성실한 딜러가 훨씬 많습니다.
                <br />
                하지만 소수의 악성 딜러로 인해 업계 전체의 이미지가 무너지고 있습니다.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <UserX className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="font-bold text-white" data-testid="text-problem-title-0">악성 딜러</h3>
                  </div>
                  <p className="text-sm text-white/70">
                    허위 매물, 사기 거래로 고객과 동료 딜러 모두에게 피해를 줍니다.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-white" data-testid="text-problem-title-1">성실한 딜러</h3>
                  </div>
                  <p className="text-sm text-white/70">
                    정직하게 일하지만, 업계 전체 불신으로 인해 어려움을 겪습니다.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">그래서 협동조합이 만들어졌습니다</h3>
                    <p className="text-white/80">
                      악성 딜러를 퇴출하고, 업계의 자정활동을 위해 전국의 성실한 딜러들이 뭉쳤습니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <p className="text-sm text-white/90">
                    <span className="font-semibold">허위 딜러는 정식 딜러가 아닙니다.</span> 불법조직입니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
