// 映画リストに常時表示しておく映画を取ってくる

export const getMoviesList = async () => {
  const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=953fc93f2e8e043f0c0cce10edb8423d";
  let data: [] = []
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`レスポンスステータス: ${response.status}`);
    }
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  return data
};
