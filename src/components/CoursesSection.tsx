import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Megaphone, Rocket } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      title: "小学校园线上课程",
      description: "为小学生精心设计的在线课程，培养学习兴趣，提高学习效果",
      icon: Heart,
      gradient: "from-pink-400 to-red-400"
    },
    {
      title: "小学教育辅导课程", 
      description: "为孩子提供全面的课程，精准匹配孩子的兴趣课程",
      icon: Megaphone,
      gradient: "from-yellow-400 to-orange-400"
    },
    {
      title: "AI应用线上课程",
      description: "培养学生AI创新能力，以及AI多样力",
      icon: Rocket,
      gradient: "from-blue-400 to-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            线上课程
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            为不同年龄段的学生提供个性化的AI教育课程
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-3">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 text-center leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;