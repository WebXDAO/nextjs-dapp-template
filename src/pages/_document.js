import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <>
        <Html className="scroll-smooth h-full antialiased" lang="en">
          <Head />
          <body className="flex h-full flex-col bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
            <Main />
            <NextScript />
            {/* Add external scripts here */}
          </body>
        </Html>
      </>
    );
  }
}

export default MyDocument;
