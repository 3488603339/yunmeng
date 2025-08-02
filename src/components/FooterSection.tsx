import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Target } from "lucide-react";

const FooterSection = () => {
  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              云梦之路
            </h2>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium">
              AI教育，新的启程
            </p>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              在智能化的时代，让我们一起踏上云梦之路，开启AI教育的新篇章，为孩子们的未来点亮希望之光
            </p>
          </div>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group animate-slide-up">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">创新思维</h3>
                <p className="text-white/80 text-center text-sm">培养学生创新思维和问题解决能力</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">智能学习</h3>
                <p className="text-white/80 text-center text-sm">AI驱动的个性化学习体验</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">精准教学</h3>
                <p className="text-white/80 text-center text-sm">精准识别学习需求，提供定制化教学</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <Button variant="glass" size="lg" className="animate-pulse-glow">
              开始云梦之旅
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;