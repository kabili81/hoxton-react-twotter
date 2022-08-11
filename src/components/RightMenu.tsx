export function RightMenu() {
  return (
    <section className="right-menu">
      <form className="search-form">
        <input type="text" name="searchTweets" placeholder="Search Twitter" />
      </form>
      <div className="right-menu__trends">
        <h2>Trends for you</h2>
      </div>
    </section>
  );
}
