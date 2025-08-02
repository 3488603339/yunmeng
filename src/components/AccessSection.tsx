import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teacher from "@/assets/teacher.png";
import studentBoy from "@/assets/student-boy.png";

const AccessSection = () => {
	return (
		<section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
			<div className="container mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
					{/* Teacher Version */}
					<div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group animate-slide-up">
						<div className="text-center space-y-6">
							<div className="flex justify-center">
								<img
									src={teacher}
									alt="Teacher"
									className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="space-y-4">
								<h3 className="text-2xl font-bold text-gray-800">
									教师版
								</h3>
								<p className="text-gray-600 leading-relaxed">
									为教师提供完整的教学工具和资源，助力AI教育教学
								</p>
							</div>
							<a
								href={`http://edu2.fquantplus.com/user/${JSON.parse(
									localStorage.getItem("userId")
								)}`}
							>
								<Button
									variant="hero"
									size="lg"
									className="w-full group"
								>
									点击进入
									<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
								</Button>{" "}
							</a>
						</div>
					</div>

					{/* Student Version */}
					<div
						className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group animate-slide-up"
						style={{ animationDelay: "0.2s" }}
					>
						<div className="text-center space-y-6">
							<div className="flex justify-center">
								<img
									src={studentBoy}
									alt="Student"
									className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="space-y-4">
								<h3 className="text-2xl font-bold text-gray-800">
									学生版
								</h3>
								<p className="text-gray-600 leading-relaxed">
									专为学生设计的互动学习平台，让AI学习变得简单有趣
								</p>
							</div>
							<a
								href={`http://edu2.fquantplus.com/user/${JSON.parse(
									localStorage.getItem("userId")
								)}`}
							>
								<Button
									variant="hero"
									size="lg"
									className="w-full group"
								>
									点击进入
									<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AccessSection;
