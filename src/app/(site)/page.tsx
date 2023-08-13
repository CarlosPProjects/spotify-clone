import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <>
      <Header>
        <div className="mb-2">
          <h1
            className="
            text-3xl
            font-semibold
            text-green-500
          "
          >
            Overview
          </h1>
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-3
            mt-4
          "
          >
            <ListItem
              image="/images/liked-albums.jpg"
              name="Liked Albums"
              href="/liked-albums"
            />
            <ListItem
              image="/images/liked-songs.png"
              name="Liked Songs"
              href="/liked-albums"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 md:px-4 px-2">
        <div className="flx justify-between items-center">
          <h1 className="text-2xl font-semibold">Newest songs</h1>
        </div>
        <div>List of Songs!</div>
      </div>
    </>
  );
}
