export interface Winner {
  athlete: string;
  age:     number | null;
  country: string;
  year:    number;
  date:    Date;
  sport:   Sport;
  gold:    number;
  silver:  number;
  bronze:  number;
  total:   number;
}

export enum Sport {
  AlpineSkiing = "Alpine Skiing",
  Archery = "Archery",
  Athletics = "Athletics",
  Badminton = "Badminton",
  Baseball = "Baseball",
  Basketball = "Basketball",
  BeachVolleyball = "Beach Volleyball",
  Biathlon = "Biathlon",
  Bobsleigh = "Bobsleigh",
  Boxing = "Boxing",
  Canoeing = "Canoeing",
  CrossCountrySkiing = "Cross Country Skiing",
  Curling = "Curling",
  Cycling = "Cycling",
  Diving = "Diving",
  Equestrian = "Equestrian",
  Fencing = "Fencing",
  FigureSkating = "Figure Skating",
  Football = "Football",
  FreestyleSkiing = "Freestyle Skiing",
  Gymnastics = "Gymnastics",
  Handball = "Handball",
  Hockey = "Hockey",
  IceHockey = "Ice Hockey",
  Judo = "Judo",
  Luge = "Luge",
  ModernPentathlon = "Modern Pentathlon",
  NordicCombined = "Nordic Combined",
  RhythmicGymnastics = "Rhythmic Gymnastics",
  Rowing = "Rowing",
  Sailing = "Sailing",
  Shooting = "Shooting",
  ShortTrackSpeedSkating = "Short-Track Speed Skating",
  Skeleton = "Skeleton",
  SkiJumping = "Ski Jumping",
  Snowboarding = "Snowboarding",
  Softball = "Softball",
  SpeedSkating = "Speed Skating",
  Swimming = "Swimming",
  SynchronizedSwimming = "Synchronized Swimming",
  TableTennis = "Table Tennis",
  Taekwondo = "Taekwondo",
  Tennis = "Tennis",
  Trampoline = "Trampoline",
  Triathlon = "Triathlon",
  Volleyball = "Volleyball",
  Waterpolo = "Waterpolo",
  Weightlifting = "Weightlifting",
  Wrestling = "Wrestling",
}

// export enum DateEnum {
//   The01102000 = "01/10/2000",
//   The12082012 = "12/08/2012",
//   The24022002 = "24/02/2002",
//   The24082008 = "24/08/2008",
//   The26022006 = "26/02/2006",
//   The28022010 = "28/02/2010",
//   The29082004 = "29/08/2004",
// }