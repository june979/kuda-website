import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, HeadphonesIcon, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import kudaLogo from "@assets/KakaoTalk_20260121_174123289_02_1769010486180.png";
import moLitLogo from "@assets/image_1769050059074.png";

const contacts = [
  {
    icon: HeadphonesIcon,
    category: "고객 안심 센터 / 정책 협의",
    organization: "협동조합 사무국",
    name: "강신호 사무총장",
    phone: "010-6801-1077",
    phoneRaw: "01068011077",
  },
  {
    icon: Smartphone,
    category: "딜러패스 인증 / 시스템 문의",
    organization: "딜러패스 운영팀",
    name: "조혜령 실장",
    phone: "010-5588-9740",
    phoneRaw: "01055889740",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            안전한 중고차 거래의
            <br className="sm:hidden" />
            새로운 기준
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            전국중고차딜러협동조합(KUDA)은 고객님의 안전한 내 차 마련을 응원합니다.
            <br className="hidden sm:block" />
            불편 사항이나 제안이 있다면 연락 부탁드립니다.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full p-6 sm:p-8 bg-card border border-border hover-elevate">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {contact.category}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">{contact.organization}</p>
                  <h3 className="text-xl font-bold text-foreground" data-testid={`text-contact-name-${index}`}>
                    {contact.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    data-testid={`link-phone-${index}`}
                  >
                    {contact.phone}
                  </a>
                </div>

                <Button
                  className="w-full mt-6"
                  variant="outline"
                  asChild
                >
                  <a href={`tel:${contact.phoneRaw}`} data-testid={`button-call-${index}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    전화하기
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-muted/50 border border-border">
            <img
              src={kudaLogo}
              alt="KUDA 로고"
              className="h-8 w-auto"
              data-testid="img-footer-logo"
            />
            <div className="h-8 w-px bg-border" />
            <span className="text-sm text-muted-foreground">
              Korea Usedcar Dealers Association
            </span>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <img
              src={moLitLogo}
              alt="국토교통부"
              className="h-6 w-auto"
              data-testid="img-molit-logo"
            />
            <p className="text-xs text-muted-foreground" data-testid="text-organization-info">
              한국국토교통부 매매조합 연합회 소속으로만 가입 된 중기청 산하 협동조합
            </p>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            © 2026 전국중고차딜러협동조합. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
