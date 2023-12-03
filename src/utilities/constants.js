export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USERICON =
  "https://occ-0-3215-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjAwZDJkMjczNjljMTUyOGI2YTExNzg0MDNiNWM2MyIsInN1YiI6IjY1NTg5NDEzYjU0MDAyMTRkM2NhYTk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jNg49XNyuVBAe2AoiyWAjbGgQKAlUPKzNHD-QJCrdus",
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "french", name: "French" },
  { identifier: "korean", name: "Korean" },
  {identifier:"chinese",name:"Chinese"},
  {identifier:"malayalam",name:"Malayalam"},
  {identifier:"russian",name:"Russian"},
  {identifier:"tamil",name:"Tamil"},
];

export const OPENAI_KEY="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";
// export const OPENAI_KEY="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";
//  export const OPENAI_KEY="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";
//  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;