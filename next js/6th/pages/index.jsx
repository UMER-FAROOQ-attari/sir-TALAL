export default function Home() {
  return (
    <>
      <h1 className="font-bold pt-6  p-3 text-3xl text-center bg-blue-900 text-orange-400 capitalize ">
        defrance between SSR and SSG
      </h1>
      <div className="dfrnc bg-amber-100 flex rounded-2xl border m-4 ">
        <div className="SSG   p-3 border-r">
          <h1 className="text-2xl  pb-3  font-bold">SSG (Static Site Generation)</h1>
          SSG (Static Site Generation) creates the HTML for your page at build
          time, meaning it happens once when you run the build command.
          <br />
          SSG is extremely fast because the pages are pre-made and can be served
          instantly from a CDN.
          <br />
          You use SSG for pages where the data doesnot change often, like a blog
          post or an About Us page.
          <br />
          In the Pages Router, you implement SSG using the getStaticProps
          function.
          <br />
          SSG helps a lot with SEO because the content is already there for
          Google to crawl easily.
        </div>
        <div className="SSR   p-3 border-l">
          <h1 className="text-2xl pb-3   font-bold">SSR (Server-Side Rendering)</h1>
          SSR (Server-Side Rendering) creates the HTML for your page on every
          single request, meaning it happens whenever someone clicks the link.
          <br />
          SSR can be a bit slower because the server has to do work and think before sending the page to the user.
          <br />
          You use SSR for pages that need real-time data, like a user’s private dashboard or a live stock price.
          <br />
          In the Pages Router, you implement SSR using the getServerSideProps function (like the one we just fixed!).
          <br />
          The best thing about Next.js is that you can use both in the same app, choosing the best method for each specific page.
        </div>
      </div>
    </>
  );
}
