import "./globals.css";


 const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div>
          {children}
        </div>
    </body>
    </html>
  );
}
export default RootLayout