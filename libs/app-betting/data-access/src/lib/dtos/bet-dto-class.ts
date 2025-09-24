import {BetDto, BetTypeInfosDto, RunnerDto} from "./bet-dto";

export class BetDtoClass implements BetDto {
  public programName: string;
  public programDate: string;
  public programCaption: string;
  public programType: string;
  public programCurrency: string;
  public raceNumber: number;
  public status: string;
  public mtp: number;
  public postTime: string;
  public betTypeInfos: BetTypeInfosDto[];
  public runners: RunnerDto[];
  public favorites: number[];
  public orderOfFinish: unknown[];
  public results: unknown[];
  public raceCaption: string;
  public raceDescription: string;
  public raceType: string;
  public maxClaimPrice: number;
  public purse: number;
  public distance: string;
  public ageRestriction: string;
  public sexRestriction: string;
  public surface: string;
  public replayCode: string;
  public carryovers: unknown[];

  constructor(init?: Partial<BetDtoClass>) {
    this.programName = init?.programName ?? '';
    this.programDate = init?.programDate ?? '';
    this.programCaption = init?.programCaption ?? '';
    this.programType = init?.programType ?? '';
    this.programCurrency = init?.programCurrency ?? '';
    this.raceNumber = init?.raceNumber ?? 0;
    this.status = init?.status ?? '';
    this.mtp = init?.mtp ?? 0;
    this.postTime = init?.postTime ?? '';
    this.betTypeInfos = init?.betTypeInfos ?? [];
    this.runners = init?.runners ?? [];
    this.favorites = init?.favorites ?? [];
    this.orderOfFinish = init?.orderOfFinish ?? [];
    this.results = init?.results ?? [];
    this.raceCaption = init?.raceCaption ?? '';
    this.raceDescription = init?.raceDescription ?? '';
    this.raceType = init?.raceType ?? '';
    this.maxClaimPrice = init?.maxClaimPrice ?? 0;
    this.purse = init?.purse ?? 0;
    this.distance = init?.distance ?? '';
    this.ageRestriction = init?.ageRestriction ?? '';
    this.sexRestriction = init?.sexRestriction ?? '';
    this.surface = init?.surface ?? '';
    this.replayCode = init?.replayCode ?? '';
    this.carryovers = init?.carryovers ?? [];
  }
}
