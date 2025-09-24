import {classes} from '@automapper/classes';
import {createMap, createMapper, Mapper} from '@automapper/core';
import {BetEntity} from '@org/app-betting/domain';
import {BetDtoClass} from '../dtos/bet-dto-class';

const mapper: Mapper = createMapper({
  strategyInitializer: classes(),
});

// Déclare les mappings explicitement
createMap(mapper, BetDtoClass, BetEntity);

export function mapBetDtoToEntity(dto: BetDtoClass): BetEntity {
  return mapper.map<BetDtoClass, BetEntity>(dto, BetDtoClass, BetEntity);
}
