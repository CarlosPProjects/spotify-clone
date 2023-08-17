import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Song } from "../../types";
import { cookies } from "next/headers";

const getRecommendedSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(8);

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getRecommendedSongs;
