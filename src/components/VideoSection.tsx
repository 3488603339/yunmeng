import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import studentBlocks from "@/assets/student-blocks-transparent.png";
import projectRobot from "@/assets/project-robot.png";
import projectPainting from "@/assets/project-painting.png";
import projectVoice from "@/assets/project-voice.png";
import projectLearning from "@/assets/project-learning.png";

const VideoSection = () => {
  const videos = [
    {
      title: "智能机器人小助手 - 陈雨萱",
      description: "课程是基础软件工具基础，商业思维及创作者基础，制作及优选基础创作",
      image: projectRobot
    },
    {
      title: "AI绘画创作工具 - 林思怡",
      description: "课程是基础软件工具基础，商业思维及创作者基础，制作及优选基础创作",
      image: projectPainting
    },
    {
      title: "语音识别助手 - 张梓轩",
      description: "课程是基础软件工具基础，商业思维及创作者基础，制作及优选基础创作",
      image: projectVoice
    },
    {
      title: "智能学习伙伴 - 李诗涵",
      description: "课程是基础软件工具基础，商业思维及创作者基础，制作及优选基础创作",
      image: projectLearning
    }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              优秀作品展示
            </h2>
            <p className="text-xl text-white/80">
              学生优秀作品展示，激发学习动力
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="w-full h-32 rounded-lg overflow-hidden mb-3">
                    <img 
                      src={video.image} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {video.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-sm leading-relaxed">
                    {video.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;