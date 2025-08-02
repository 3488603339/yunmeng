import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import aiNlp from "@/assets/ai-nlp.png";
import aiVideo from "@/assets/ai-video.png";
import aiVoice from "@/assets/ai-voice.png";
import aiImage from "@/assets/ai-image.png";

const HeroSection = () => {
  const aiDirections = [
    { image: aiNlp, alt: "Natural Language Processing", name: "自然语言处理" },
    { image: aiVideo, alt: "Video Generation", name: "视频生成" },
    { image: aiVoice, alt: "Voice Generation", name: "语音生成" },
    { image: aiImage, alt: "Image Generation", name: "图片生成" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aiDirections.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [aiDirections.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % aiDirections.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + aiDirections.length) % aiDirections.length);
  };
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-pink-400/20" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
                YUNMENG 云梦
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                云梦AI
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white/90">
                走进智能海洋
              </h2>
              <p className="text-xl text-white/80 max-w-md leading-relaxed">
                开启AI教育新时代，让孩子在智能的海洋中探索知识，发现无限可能
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                AI教育学
              </Button>
              <Button variant="glass" size="lg">
                了解更多
              </Button>
            </div>
          </div>

          {/* Right content - Characters */}
          <div className="flex flex-col items-center lg:items-end animate-slide-up">
            <img 
              src="/lovable-uploads/17c0a0a8-e032-481a-8534-010376502722.png" 
              alt="AI学习伙伴" 
              className="max-w-md w-full h-auto object-contain"
            />
            <p className="text-white/90 text-xl font-medium mt-4 text-center lg:text-right ml-[-6px]">
              海量课程资源
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;