import { motion } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";
import heroImage from "@assets/image_1.jpg_1769010021942.jpg";

export default function HeroSection() {
  const scrollToIntro = () => {
    const element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="전국중고차딜러협동조합 전국 정모"
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-white/90 text-sm font-medium">국내 최대 딜러 연합체</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 backdrop-blur-sm rounded-2xl p-1 inline-block">
              <div className="bg-black/40 backdrop-blur-md rounded-xl px-8 py-6 sm:px-12 sm:py-8">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="block text-5xl sm:text-6xl md:text-7xl font-bold text-white"
                  data-testid="text-dealer-count"
                >
                  11,253
                </motion.span>
                <span className="text-white/80 text-lg sm:text-xl mt-2 block">명의 국가 공인 딜러가</span>
              </div>
            </div>
            
            <motion.div
              animate={{ 
                boxShadow: ["0 0 20px rgba(99, 155, 255, 0.3)", "0 0 40px rgba(99, 155, 255, 0.5)", "0 0 20px rgba(99, 155, 255, 0.3)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl -z-10"
            />
          </motion.div>

          <h1 className="text-responsive-hero font-bold text-white mb-6 leading-tight">
            약속합니다
          </h1>

          <p className="text-responsive-subtitle text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            일부 악성 딜러로 인해 잃은 신뢰를 자정하기 위한
            <br />
            국내 최대 딜러 연합체
            <br className="sm:hidden" />
            <span className="text-primary font-semibold whitespace-nowrap"> 전국중고차딜러협동조합</span>
          </p>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToIntro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
