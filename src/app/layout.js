import "./globals.css";

export const metadata = {
  title: "Learn to Drive!",
  description: "Use ChatGPT to Study for the Washington Knowledge Exam",
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
