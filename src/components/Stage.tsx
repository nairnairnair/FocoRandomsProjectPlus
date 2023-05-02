import BattleFieldIcon from "../../images/stages/dab.png"
import BigBlueIcon from "../../images/stages/dab.png"
import BrinstarIcon from "../../images/stages/dab.png"
import BrinstarDepthsIcon from "../../images/stages/dab.png"
import CorneriaIcon from "../../images/stages/dab.png"
import FinalDestinationIcon from "../../images/stages/olpole.png"
import FlatZoneIcon from "../../images/stages/olpole.png"
import FountainOfDreamsIcon from "../../images/stages/olpole.png"
import FoursideIcon from "../../images/stages/olpole.png"
import GreatBayIcon from "../../images/stages/olpole.png"
import GreenGreensIcon from "../../images/stages/mentioned.jpeg"
import IcicleMountainIcon from "../../images/stages/mentioned.jpeg"
import JungleJapesIcon from "../../images/stages/mentioned.jpeg"
import KongoJungleIcon from "../../images/stages/mentioned.jpeg"
import MushroomKingdomIcon from "../../images/stages/mentioned.jpeg"
import MushroomKingdomIIIcon from "../../images/stages/pole.jpeg"
import PeachsCastleIcon from "../../images/stages/pole.jpeg"
import PokeFloatsIcon from "../../images/stages/pole.jpeg"
import PokemonStadiumIcon from "../../images/stages/pole.jpeg"
import RainbowCruiseIcon from "../../images/stages/pole.jpeg"
import VenomIcon from "../../images/stages/POLEAR.jpeg"
import YoshisIslandIcon from "../../images/stages/POLEAR.jpeg"
import YoshisIsland64Icon from "../../images/stages/POLEAR.jpeg"
import YoshisStoryIcon from "../../images/stages/POLEAR.jpeg"
import { Tooltip } from "react-tooltip";

const stageNameToIcon = new Map([
  ["FOUNTAIN_OF_DREAMS", FountainOfDreamsIcon],
  ["POKEMON_STADIUM", PokemonStadiumIcon],
  ["PRINCESS_PEACHS_CASTLE", PeachsCastleIcon],
  ["KONGO_JUNGLE", KongoJungleIcon],
  ["BRINSTAR",BrinstarIcon],
  ["CORNERIA",CorneriaIcon],
  ["YOSHIS_STORY",YoshisStoryIcon],
  ["ONETT",BrinstarIcon], // TODO
  ["MUTE_CITY",BrinstarIcon], // TODO
  ["RAINBOW_CRUISE", RainbowCruiseIcon],
  ["JUNGLE_JAPES", JungleJapesIcon],
  ["GREAT_BAY", GreatBayIcon],
  ["HYRULE_TEMPLE", BrinstarIcon], // TODO
  ["BRINSTAR_DEPTHS", BrinstarDepthsIcon],
  ["YOSHIS_ISLAND", YoshisIslandIcon],
  ["GREEN_GREENS", GreenGreensIcon],
  ["FOURSIDE", FoursideIcon],
  ["MUSHROOM_KINGDOM_I", MushroomKingdomIcon],
  ["MUSHROOM_KINGDOM_II", MushroomKingdomIIIcon],
  ["VENOM", VenomIcon],
  ["POKE_FLOATS", PokeFloatsIcon],
  ["BIG_BLUE", BigBlueIcon],
  ["ICICLE_MOUNTAIN", IcicleMountainIcon],
  ["FLAT_ZONE", FlatZoneIcon],
  ["DREAM_LAND_N64", BrinstarDepthsIcon], // TODO
  ["YOSHIS_ISLAND_N64", YoshisIsland64Icon],
  ["KONGO_JUNGLE_N64", KongoJungleIcon],
  ["BATTLEFIELD", BattleFieldIcon],
  ["FINAL_DESTINATION", FinalDestinationIcon]
]);
const stages = [...stageNameToIcon.keys()];

export const getIcon = (name: string, className="h-40 w-40") => {
  const icon = stageNameToIcon.get(name)
  if(!icon) {
    return <span className="title text-8xl">?</span>
  }
  return <img className={className} src={icon} />;
};

export const randStage = () => {
  return stages[Math.floor(Math.random() * stages.length)];
};
