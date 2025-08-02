import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import AuthDialog from "./AuthDialog";

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [authType, setAuthType] = useState<"login" | "register">("login");
	const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
	interface User {
		username?: string;
		id?: number | string;
		token?: string;
		avatar?: string;
	}
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [courseUrl, setCourseUrl] = useState(
		"http://edu2.fquantplus.com/course/explore/AI_prime_class?fliter=all&orderBy=latest"
	);

	useEffect(() => {
		// 检查本地存储中是否有token和userId
		const storedToken = localStorage.getItem("token");
		const storedUserId = localStorage.getItem("userId");
		const storedUsername = localStorage.getItem("username");
		const storedAvatar = localStorage.getItem("avatar");

		if (storedToken && storedUserId) {
			try {
				const token = JSON.parse(storedToken);
				const userId = JSON.parse(storedUserId);
				const username = storedUsername
					? JSON.parse(storedUsername)
					: null;
				const avatar = storedAvatar ? JSON.parse(storedAvatar) : null;

				// 创建用户对象
				setCurrentUser({
					id: userId,
					token: token,
					username:
						username || "用户" + userId.toString().substring(0, 4), // 优先使用用户名
					avatar: avatar || "",
				});

				// 更新课程链接
				setCourseUrl(
					`http://edu2.fquantplus.com/course/explore/AI_prime_class?fliter=all&orderBy=latest`
				);
			} catch (error) {
				console.error("Failed to parse user data", error);
				localStorage.removeItem("token");
				localStorage.removeItem("userId");
				localStorage.removeItem("username");
				localStorage.removeItem("avatar");
			}
		}
	}, []);

	const handleOpenAuthDialog = (type: "login" | "register") => {
		setAuthType(type);
		setIsAuthDialogOpen(true);
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userId");
		localStorage.removeItem("username");
		localStorage.removeItem("avatar");
		setCurrentUser(null);
		setCourseUrl(
			"http://edu2.fquantplus.com/course/explore/AI_prime_class?fliter=all&orderBy=latest"
		);
		window.location.reload();
	};

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
				<div className="container mx-auto px-6">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="text-white font-bold text-xl">
							云梦AI
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							<a
								href="/"
								className="text-white/90 hover:text-white transition-colors"
							>
								首页
							</a>
							<a
								href={courseUrl}
								className="text-white/90 hover:text-white transition-colors"
							>
								课程
							</a>
							<a
								href="/projects"
								className="text-white/90 hover:text-white transition-colors"
							>
								项目
							</a>
						</div>

						{/* Desktop Auth Buttons */}
						<div className="hidden md:flex items-center space-x-4">
							{currentUser ? (
								<div className="flex items-center space-x-4">
									<div className="flex items-center space-x-2 text-white">
										{currentUser.avatar ? (
											<img
												src={currentUser.avatar}
												alt="用户头像"
												className="w-6 h-6 rounded-full object-cover"
											/>
										) : (
											<User size={18} />
										)}
										<span>{currentUser.username}</span>
									</div>
									<Button
										variant="ghost"
										className="text-white hover:bg-white/20"
										onClick={handleLogout}
									>
										退出
									</Button>
								</div>
							) : (
								<>
									<Button
										variant="ghost"
										className="text-white hover:bg-white/20"
										onClick={() =>
											handleOpenAuthDialog("login")
										}
									>
										登录
									</Button>
									<Button
										variant="hero"
										size="sm"
										onClick={() =>
											handleOpenAuthDialog("register")
										}
									>
										注册
									</Button>
								</>
							)}
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-white"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>

					{/* Mobile Menu */}
					{isMenuOpen && (
						<div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
							<div className="px-4 py-4 space-y-4">
								<a
									href="/"
									className="block text-white/90 hover:text-white transition-colors"
								>
									首页
								</a>
								<a
									href={courseUrl}
									className="block text-white/90 hover:text-white transition-colors"
								>
									课程
								</a>
								<a
									href="/projects"
									className="block text-white/90 hover:text-white transition-colors"
								>
									项目
								</a>
								<div className="flex space-x-4 pt-4">
									{currentUser ? (
										<div className="flex flex-col space-y-4 w-full">
											<div className="flex items-center space-x-2 text-white">
												{currentUser.avatar ? (
													<img
														src={currentUser.avatar}
														alt="用户头像"
														className="w-6 h-6 rounded-full object-cover"
													/>
												) : (
													<User size={18} />
												)}
												<span>
													{currentUser.username}
												</span>
											</div>
											<Button
												variant="ghost"
												className="text-white hover:bg-white/20"
												onClick={handleLogout}
											>
												退出
											</Button>
										</div>
									) : (
										<>
											<Button
												variant="ghost"
												className="text-white hover:bg-white/20"
												onClick={() =>
													handleOpenAuthDialog(
														"login"
													)
												}
											>
												登录
											</Button>
											<Button
												variant="hero"
												size="sm"
												onClick={() =>
													handleOpenAuthDialog(
														"register"
													)
												}
											>
												注册
											</Button>
										</>
									)}
								</div>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Auth Dialog */}
			<AuthDialog
				isOpen={isAuthDialogOpen}
				onClose={() => setIsAuthDialogOpen(false)}
				type={authType}
			/>
		</>
	);
};

export default Navigation;
