import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface AuthDialogProps {
	isOpen: boolean;
	onClose: () => void;
	type: "login" | "register";
}

const AuthDialog = ({ isOpen, onClose, type }: AuthDialogProps) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const endpoint =
				type === "login"
					? "http://115.28.136.113:8081/site/login"
					: "http://115.28.136.113:8081/site/register";

			const response = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			const responseData = await response.json();
			console.log("API响应:", responseData);
			// 检查响应中的data字段是否为false
			if (responseData.data[0] === false) {
				// 如果data为false，表示操作失败，显示msg作为错误信息
				setError(
					responseData.msg ||
						`${type === "login" ? "登录" : "注册"}失败，请重试`
				);
			} else {
				// 操作成功，存储用户信息到本地存储
				localStorage.setItem(
					"token",
					JSON.stringify(responseData.data[0].edu_user.token)
				);
				localStorage.setItem(
					"userId",
					JSON.stringify(responseData.data[0].edu_user.user.id)
				);
				localStorage.setItem(
					"username",
					JSON.stringify(
						responseData.data[0].edu_user.user.name || username
					)
				);
				localStorage.setItem(
					"avatar",
					JSON.stringify(
						responseData.data[0].edu_user.user.mediumAvatar || ""
					)
				);
				onClose();
				window.location.reload(); // 重新加载页面以更新用户状态
			}
		} catch (err) {
			setError(`网络错误，请稍后重试`);
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="sm:max-w-[425px] bg-white text-black">
				<DialogHeader>
					<DialogTitle>
						{type === "login" ? "登录" : "注册"}
					</DialogTitle>
					<DialogDescription>
						{type === "login"
							? "登录您的账户以访问所有功能"
							: "创建一个新账户以开始使用我们的服务"}
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4 pt-4">
					<div className="space-y-2">
						<label
							htmlFor="username"
							className="text-sm font-medium"
						>
							用户名
						</label>
						<Input
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="请输入用户名"
							required
						/>
					</div>
					<div className="space-y-2">
						<label
							htmlFor="password"
							className="text-sm font-medium"
						>
							密码
						</label>
						<Input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="请输入密码"
							required
						/>
					</div>
					{error && <p className="text-red-500 text-sm">{error}</p>}
					<div className="flex justify-end pt-4">
						<Button type="submit" disabled={loading}>
							{loading
								? "处理中..."
								: type === "login"
								? "登录"
								: "注册"}
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default AuthDialog;
