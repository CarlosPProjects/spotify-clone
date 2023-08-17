import getRecommendedSongs from "@/actions/getRecomendedSongs";
import AddSong from "@/components/AddSong";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

interface LibraryProps {}

const Library = async ({}) => {
  const songs = await getRecommendedSongs();

  return (
    <>
      <Header />
      <div className="flex flex-row w-full">
        <div className="flex-1 mt-2 mb-7 md:px-4 px-2">
          <div
            className="
          flex
          relative
          w-full
          max-h-[300px]
          rounded-2xl
          aspect-video
          bg-[#6d659e]
          mb-2
        "
          ></div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl font-semibold">Upload a song</h3>
            <AddSong />
          </div>
        </div>
        <Sidebar songs={songs} />
      </div>
    </>
  );
};

export default Library;
