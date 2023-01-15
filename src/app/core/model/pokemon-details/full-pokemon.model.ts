import { Ability } from "./ability.model";
import { Form } from "./form.model";
import { Move } from "./move.model";
import { Species } from "./species.model";
import { Sprite } from "./sprite.model";
import { Stats } from "./stats.model";
import { Type } from "./type.model";

export interface FullPokemon {
  abilities: Ability[],
  base_experience: number,
  forms: Form[],
  height: number,
  held_items: any[],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: Move[],
  name: string,
  order: number,
  past_types: any[],
  species: Species,
  sprites: Sprite,
  stats: Stats[],
  types: Type[],
  weight: number
}
