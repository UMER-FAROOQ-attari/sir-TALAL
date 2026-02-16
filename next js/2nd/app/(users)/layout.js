import Header from "./component/Header";
export default function RootLayout({ children }) {
  return <>
        <Header />
  
  {children}</>;
}
