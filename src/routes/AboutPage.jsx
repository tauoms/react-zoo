const AboutPage = () => {
  return (
    <div id="AboutPage">
      <h2>About</h2>
      <p>
        This is a practice React app with add/remove likes, remove card and
        search functionality. Animals can be browsed by category. Each animal
        has its own page (click "More info" in card) with a back button. Info
        paragraph on animal page is fetched from wikipedia.
      </p>
      <p>
        The site gets all images randomly from{" "}
        <a href="https://unsplash.com/">Unsplash</a>.
      </p>
    </div>
  );
};

export default AboutPage;
