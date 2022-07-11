import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom!*/`}</style>
          <link
            href="https://unpkg.com/prism-theme-night-owl@1.4.0/build/style.css"
            rel="stylesheet"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
