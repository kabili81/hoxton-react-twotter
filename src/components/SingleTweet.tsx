import { Tweet } from "../pages/types";
type Props = {
  tweet: Tweet;
};
export function SingleTweet({ tweet }: Props) {
  return (
    <section className="single-tweet-item" key={tweet.id}>
      <img
        className="profile-image"
        src={tweet.user.profileImage}
        alt="profile-image"
        width={50}
      />
      <div className="single-tweet-card__text">
        <h2>{tweet.user.name}</h2>
        <span>@{tweet.user.name}</span>
        <div className="single-tweet-card__name__and__text">
          <div className="single-tweet-card__text">
            <button
              onClick={() => {
                if (tweet.user.name === "Kabil") {
                  fetch(`http://localhost:4000/tweets/${tweet.id}`, {
                    method: "DELETE",
                  })
                    .then((resp) => resp.json())
                    .then(() => {
                      location.reload();
                    });
                } else {
                  alert("You can't delete this tweet");
                }
              }}
            >
              ❌
            </button>
          </div>
        </div>
        <p>{tweet.text}</p>
        <img
          className="text-image"
          src={tweet.image}
          alt="text-image"
          width={500}
        />
      </div>
    </section>
  );
}
