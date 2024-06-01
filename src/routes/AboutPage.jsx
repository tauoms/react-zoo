const AboutPage = () => {
  return (
    <div id="AboutPage">
      <h2>About</h2>
      <p>
        <strong>This is a practice React app</strong> with add/remove likes,
        remove card and search functionality. Animals can be browsed by
        category. Each animal has its own page (click "More info" in card) with
        a back button. Info paragraph on animal page is fetched from wikipedia.
      </p>
      <p>
        <strong>Some of the new things I learned during this project:</strong>{" "}
        How to use the React router and set up a page structure, how to pass and
        destructure props, how to use router useNavigate to create a back button
        and how to deploy a react project to github pages using the gh-pages
        package.
      </p>
      <p>
        The site gets all images randomly from{" "}
        <a href="https://unsplash.com/">Unsplash</a>.
      </p>
    </div>
  );
};

export default AboutPage;
