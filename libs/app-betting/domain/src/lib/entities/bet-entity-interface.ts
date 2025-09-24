export interface IBetEntity {
  programName: string
  programDate: string
  programCaption: string
  programType: string
  programCurrency: string
  raceNumber: number
  status: string
  mtp: number
  postTime: string
  betTypeInfos: BetTypeInfo[]
  runners: Runner[]
  favorites: number[]
  orderOfFinish: unknown[]
  results: unknown[]
  raceCaption: string
  raceDescription: string
  raceType: string
  maxClaimPrice: number
  purse: number
  distance: string
  ageRestriction: string
  sexRestriction: string
  surface: string
  replayCode: string
  carryovers: unknown[]
}

export interface BetTypeInfo {
  betType: string
  betTypeCaption: string
  raceNumber: number
  betModifiers: string[]
  additionalLegs: number[] | unknown[]
  minBaseAmount: number
  maxBaseAmount: number
  minBoxAmount: number
  minWheelAmount: number
  maxPermuteAmount: number
  multipleAmount: number
  scratchAltAllowed: boolean
  selectableBetAmounts: SelectableBetAmount[]
}

export interface SelectableBetAmount {
  betModifier: string
  amounts: number[]
}

export interface Runner {
  name: string;
  programNumber: string;
  bettingNumber: number;
  scratched: boolean;
  postPosition: number;
  odds: string;
  morningLine: string;
  medication: string;
  weightCarried: number;
  jockeyName: string;
  trainerName: string;
  subJockeyName?: string;
  winPercent: number;
  winPayoff: number;
  winPoolTotal: number;
  placePoolTotal: number;
  showPoolTotal: number;
  age: number;
  gender: string;
  sire: string;
  dam: string;
  damSire: string;
  ownerName: string;
  lifetimeStarts: number;
  lifetimeWin: number;
  lifetimePlace: number;
  lifetimeShow: number;
  lifetimeFourth?: null | unknown;
  powerRating: number;
  averageClass: number;
  lastClass: number;
  averageSpeed: number;
  averageSpeedAtDistance: number;
  topSpeed: number;
  paceEarly: number;
  paceMid: number;
  paceEnd: number;
  jockeyStarts365: number;
  jockeyWinPercent365: number;
  trainerStarts365: number;
  trainerWinPercent365: number;
  jockeyTrainerStarts: number;
  jockeyTrainerWinPercent: number;
  bestTime?: unknown | null;
  latestOdds: LatestOdd[];
}

export interface LatestOdd {
  odds: string;
  quotient: number;
}
