import { Link } from "react-router-dom";
import { Tweet } from "../pages/types";
import { SingleTweetItem } from "./SingleTweetItem";

type Props = {
  tweets: Tweet[];
  setTweets: (tweets: Tweet[]) => void;
};

export function MainMenu({ tweets, setTweets }: Props) {
  return (
    <section className="main-menu">
      <header className="tweet-header">
        <h2>Home</h2>
        <div className="tweet-post">
          <form
            className="tweet-form"
            onSubmit={(event) => {
              event.preventDefault();

              fetch("http://localhost:4000/tweets", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  text: event.target.tweet.value,
                  user: {
                    name: "Kabil",
                    username: "Kabili81",
                    profileImage:
                      "https://scontent.fprn12-1.fna.fbcdn.net/v/t1.18169-9/406751_2524474545904_62094089_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=de6eea&_nc_ohc=9ZQ1v4CGMvsAX9B7_Al&_nc_ht=scontent.fprn12-1.fna&oh=00_AT-47NX_fCLLVA3HvoamJu-q0PXa_u-DZVEMJScK_t_U2A&oe=631A356E",
                  },
                  image: "",
                }),
              })
                .then((resp) => resp.json())
                .then((tweet) => {
                  setTweets([...tweets, tweet]);
                });

              event.target.tweet.value = "";
              location.reload();
            }}
          >
            <img
              src="https://scontent.fprn12-1.fna.fbcdn.net/v/t1.18169-9/406751_2524474545904_62094089_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=de6eea&_nc_ohc=9ZQ1v4CGMvsAX9B7_Al&_nc_ht=scontent.fprn12-1.fna&oh=00_AT-47NX_fCLLVA3HvoamJu-q0PXa_u-DZVEMJScK_t_U2A&oe=631A356E"
              width={50}
            />

            <input type="text" name="tweet" placeholder="What's happening?" />
            <div className="tweet-button">
              <button className="tweet-button-btn" onClick={() => {}}>
                Tweet
              </button>
            </div>
          </form>
        </div>
      </header>
    
    </section>
  );
}
