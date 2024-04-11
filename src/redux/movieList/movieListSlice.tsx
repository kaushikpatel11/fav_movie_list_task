import { createSlice } from "@reduxjs/toolkit";

export interface MovieListState {
  movieDataList: { name: string; year: number; des: string }[];
}

const initialState: MovieListState = {
  movieDataList: [
    {
      name: "Maidaan",
      des: "Drama, History, Sport",
      year: 2024,
    },
    {
      name: "Bade Miyan Chote Miyan",
      des: "Action, Comedy, Thriller",
      year: 2024,
    },
    {
      name: "Dukaan",
      des: "Comedy, Drama",
      year: 202,
    },
    {
      name: "The Lost Girl",
      des: "Drama",
      year: 2024,
    },
    {
      name: "Crew",
      des: "Comedy, Drama",
      year: 2024,
    },
    {
      name: "Madgaon Express",
      des: "Comedy, Drama",
      year: 2023,
    },
    {
      name: "Swatantra Veer Savarkar",
      des: "Biography, Drama",
      year: 2024,
    },
    {
      name: "Ae Watan… Mere Watan",
      des: "Biography, Drama, History",
      year: 2024,
    },
    {
      name: "Bastar: The Naxal Story",
      des: "Crime, Drama",
      year: 2023,
    },
    {
      name: "Murder Mubarak",
      des: "Comedy, Drama",
      year: 2024,
    },
    {
      name: "Yodha",
      des: "Action",
      year: 2025,
    },
    {
      name: "Shaitaan",
      des: "Horror, Thriller",
      year: 2024,
    },
    {
      name: "Tera Kya Hoga Lovely",
      des: "Comedy",
      year: 2024,
    },
    {
      name: "Dange",
      des: "Action, Drama",
      year: 2027,
    },
    {
      name: "Laapataa Ladies",
      des: "Comedy, Drama",
      year: 2024,
    },
    {
      name: "Crakk - Jeethegaa Toh Jiyegaa",
      des: "Action",
      year: 2021,
    },
    {
      name: "Aakhir Palaayan Kab Tak?",
      des: "Drama",
      year: 2028,
    },
    {
      name: "Kuch Khattaa Ho Jaay",
      des: "Comedy, Documentary",
      year: 2024,
    },
    {
      name: "Bhakshak",
      des: "Drama",
      year: 2024,
    },
    {
      name: "Lantrani",
      des: "Comedy, Drama",
      year: 2025,
    },
    {
      name: "Mirg",
      des: "Action, Comedy, Drama",
      year: 2024,
    },
    {
      name: "Teri Baaton Mein Aisa Uljha Jiya",
      des: "Drama, Romance, Sci-Fi",
      year: 2024,
    },
    {
      name: "Fighter",
      des: "Action, Thriller",
      year: 2023,
    },
    {
      name: "Main Atal Hoon",
      des: "Biography",
      year: 2024,
    },
    {
      name: "Merry Christmas",
      des: "Drama, Thriller",
      year: 2024,
    },
    {
      name: "Kho Gaye Hum Kahan",
      des: "Comedy, Drama, Romance",
      year: 2024,
    },
    {
      name: "Dry Day",
      des: "Drama",
      year: 2024,
    },
    {
      name: "Dunki",
      des: "Comedy, Drama",
      year: 2023,
    },
    {
      name: "Hi Papa",
      des: "Drama, Romance",
      year: 2023,
    },
    {
      name: "Mast Mein Rehne Ka",
      des: "Comedy, Drama",
      year: 2023,
    },
  ],
};

export const movieListSlice = createSlice({
  name: "movieData",
  initialState,
  reducers: {},
});

export default movieListSlice.reducer;
