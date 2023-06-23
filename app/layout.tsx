import { ToastContainer } from "react-toastify";
import Header from "./Components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ToastContainer />
				<Header />
				{children}
			</body>
		</html>
	);
}
