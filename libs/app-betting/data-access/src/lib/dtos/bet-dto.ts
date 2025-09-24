/* eslint-disable @typescript-eslint/typedef */
import {z} from 'zod';

const SelectableBetAmountsSchema = z.object({betModifier: z.string(), amounts: z.array(z.number())});
const latestOddsSchema = z.object({odds: z.string(), quotient: z.number()});
export const betTypeInfosSchema = z.object({
  betType: z.string(),
  betTypeCaption: z.string(),
  raceNumber: z.number(),
  betModifiers: z.array(z.string()),
  additionalLegs: z.array(z.number().or(z.unknown())),
  minBaseAmount: z.number(),
  maxBaseAmount: z.number(),
  minBoxAmount: z.number(),
  minWheelAmount: z.number(),
  maxPermuteAmount: z.number(),
  multipleAmount: z.number(),
  scratchAltAllowed: z.boolean(),
  selectableBetAmounts: z.array(
    SelectableBetAmountsSchema
  )
});
export const runnerSchema = z.object({
  name: z.string(),
  programNumber: z.string(),
  bettingNumber: z.number(),
  scratched: z.boolean(),
  postPosition: z.number(),
  odds: z.string(),
  morningLine: z.string(),
  medication: z.string(),
  weightCarried: z.number(),
  jockeyName: z.string(),
  trainerName: z.string(),
  subJockeyName: z.union([z.string(), z.null()]), // union ici au lieu de deux objets
  winPercent: z.number(),
  winPayoff: z.number(),
  winPoolTotal: z.number(),
  placePoolTotal: z.number(),
  showPoolTotal: z.number(),
  age: z.number(),
  gender: z.string(),
  sire: z.string(),
  dam: z.string(),
  damSire: z.string(),
  ownerName: z.string(),
  lifetimeStarts: z.number(),
  lifetimeWin: z.number(),
  lifetimePlace: z.number(),
  lifetimeShow: z.number(),
  lifetimeFourth: z.null().or(z.unknown()),
  powerRating: z.number(),
  averageClass: z.number(),
  lastClass: z.number(),
  averageSpeed: z.number(),
  averageSpeedAtDistance: z.number(),
  topSpeed: z.number(),
  paceEarly: z.number(),
  paceMid: z.number(),
  paceEnd: z.number(),
  jockeyStarts365: z.number(),
  jockeyWinPercent365: z.number(),
  trainerStarts365: z.number(),
  trainerWinPercent365: z.number(),
  jockeyTrainerStarts: z.number(),
  jockeyTrainerWinPercent: z.number(),
  bestTime: z.null().or(z.unknown()),
  latestOdds: z.array(
    latestOddsSchema
  )
});

export const betDtoSchema = z.object({
  programName: z.string(),
  programDate: z.string(),
  programCaption: z.string(),
  programType: z.string(),
  programCurrency: z.string(),
  raceNumber: z.number(),
  status: z.string(),
  mtp: z.number(),
  postTime: z.string(),
  betTypeInfos: z.array(
    betTypeInfosSchema
  ),
  runners: z.array(
    runnerSchema
  ),
  favorites: z.array(z.number()),
  orderOfFinish: z.array(z.unknown()),
  results: z.array(z.unknown()),
  raceCaption: z.string(),
  raceDescription: z.string(),
  raceType: z.string(),
  maxClaimPrice: z.number(),
  purse: z.number(),
  distance: z.string(),
  ageRestriction: z.string(),
  sexRestriction: z.string(),
  surface: z.string(),
  replayCode: z.string(),
  carryovers: z.array(z.unknown())
});
export type BetDto = z.infer<typeof betDtoSchema>;
export type RunnerDto = z.infer<typeof runnerSchema>;
export type BetTypeInfosDto = z.infer<typeof betTypeInfosSchema>;
export type LatestOddsDto = z.infer<typeof latestOddsSchema>;
export type SelectableBetAmountsDto = z.infer<typeof SelectableBetAmountsSchema>;
