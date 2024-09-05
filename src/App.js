import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "League of Legends game image",
  },

  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Valorant game image",
  },

  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Minecraft game image",
  },

  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "TFT game image",
  },
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Mayk Brito image",
  },

  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png",
    alt: "Alanzoka image",
  },

  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-150x150.png",
    alt: "Cellbit image",
  },
];

const socialListData = [
  {
    url: "https://twitch.com/maykbrito",
    imageUrl: "/MyFirstReactPage/assets/twitch.svg",
    alt: "Mayk Brito's Twitch",
  },
  {
    url: "https://instagram.com/maykbrito",
    imageUrl: "/MyFirstReactPage/assets/instagram.svg",
    alt: " Mayk Brito's Instagram",
  },
  {
    url: "https:///twitter.com/maykbrito",
    imageUrl: "/MyFirstReactPage/assets/twitter.svg",
    alt: "Mayk Brito's Twitter",
  },
  {
    url: "https://youtube.com/maykbrito",
    imageUrl: "/MyFirstReactPage/assets/youtube.svg",
    alt: "Mayk Brito's Youtube Channel",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="My Games"
          subtitle="Games I like most"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Channels and Streamers"
          subtitle="List of channels and
          transmissions that I cannot miss"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="My Social Media"
          subtitle="Follow me now"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
