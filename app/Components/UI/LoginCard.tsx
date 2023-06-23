"use client";
import { NextRouter } from "next/router";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginCard: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const handleLogin = () => {
		if (email == "demo@coralmango.com" && password == "demo") {
			localStorage.setItem("user", email);
			toast.success("Login Successfull");
			setTimeout(() => {
				router.refresh();
			}, 2000);
		} else toast.error("Sorry Invalid Credentials");
	};

	return (
		<div className=" flex justify-center items-center py-5 w-full">
			<div className="bg-white rounded shadow-lg p-6 w-full">
				<h2 className="text-2xl font-bold mb-6">Login</h2>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="password"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={handleLogin}
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginCard;
