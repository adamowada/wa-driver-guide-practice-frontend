import "./globals.css";

export const metadata = {
  title: "学习驾驶！",
  description: "使用ChatGPT学习华盛顿州知识测试",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <body>
        {children}
      </body>
    </html>
  );
}
