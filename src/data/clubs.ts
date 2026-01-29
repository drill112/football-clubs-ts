export type Club = {
  id: number;
  name: string;
  city: string;
  country: string;
  founded: number;
};

export const clubs: Club[] = [
  {
    id: 1,
    name: "Real Madrid",
    city: "Madrid",
    country: "Spain",
    founded: 1902,
  },
  {
    id: 2,
    name: "Barcelona",
    city: "Barcelona",
    country: "Spain",
    founded: 1899,
  },
  {
    id: 3,
    name: "Manchester City",
    city: "Manchester",
    country: "England",
    founded: 1880,
  },
  {
    id: 4,
    name: "Bayern Munich",
    city: "Munich",
    country: "Germany",
    founded: 1900,
  },
  {
    id: 5,
    name: "Juventus",
    city: "Turin",
    country: "Italy",
    founded: 1897,
  },
  {
    id: 6,
    name: "PSG",
    city: "Paris",
    country: "France",
    founded: 1970,
  },
];
