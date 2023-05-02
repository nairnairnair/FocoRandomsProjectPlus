import BowserIcon from '../../images/characters/Bowser.webp';
import CaptainIcon from '../../images/characters/Captain-Falcon.webp';
import CharizardIcon from '../../images/characters/Charizard.webp';
import DededeIcon from '../../images/characters/Dedede.webp';
import DiddyIcon from '../../images/characters/Diddy-Kong.webp';
import DkIcon from '../../images/characters/Donkey-Kong.webp';
import FalcoIcon from '../../images/characters/Falco.webp';
import FoxIcon from '../../images/characters/Fox.webp';
import GanonIcon from '../../images/characters/Ganondorf.webp';
import IcsIcon from '../../images/characters/Ice-Climbers.webp';
import IkeIcon from '../../images/characters/Ike.webp';
import IvysaurIcon from '../../images/characters/Ivysaur.webp';
import KirbyIcon from '../../images/characters/Kirby.webp';
import KnucklesIcon from '../../images/characters/Knuckles.webp';
import LinkIcon from '../../images/characters/Link.webp';
import LucarioIcon from '../../images/characters/Lucario.webp';
import LucasIcon from '../../images/characters/Lucas.webp';
import LuigiIcon from '../../images/characters/Luigi.webp';
import MarioIcon from '../../images/characters/Mario.webp';
import MarthIcon from '../../images/characters/Marth.webp';
import MetaKnightIcon from '../../images/characters/Meta-Knight.webp';
import MewtwoIcon from '../../images/characters/Mewtwo.webp';
import MrGIcon from '../../images/characters/Mr-Game-&-Watch.webp';
import NessIcon from '../../images/characters/Ness.webp';
import OlimarIcon from '../../images/characters/Olimar.webp';
import PeachIcon from '../../images/characters/Peach.webp';
import PikachuIcon from '../../images/characters/Pikachu.webp';
import PuffIcon from '../../images/characters/Jigglypuff.webp';
import PitIcon from '../../images/characters/Pit.webp';
import ROBIcon from '../../images/characters/ROB.webp';
import RoyIcon from '../../images/characters/Roy.webp';
import SamusIcon from '../../images/characters/Samus.webp';
import SheikIcon from '../../images/characters/Sheik.webp';
import SnakeIcon from '../../images/characters/Snake.webp';
import SonicIcon from '../../images/characters/Sonic.webp';
import SquirtleIcon from '../../images/characters/Squirtle.webp';
import ToonlinkIcon from '../../images/characters/Toon-Link.webp';
import WarioIcon from '../../images/characters/Wario.webp';
import WolfIcon from '../../images/characters/Wolf.webp';
import YoshiIcon from '../../images/characters/Yoshi.webp';
import ZeldaIcon from '../../images/characters/Zelda.webp';
import ZSSIcon from '../../images/characters/Zero-Suit-Samus.webp';
import UnknownIcon from '../../images/characters/unknown.png';

import { Tooltip } from 'react-tooltip';

const characterNameToIcon = new Map([
  ['BOWSER', BowserIcon],
  ['CAPTAIN_FALCON', CaptainIcon],
  ['CHARIZARD', CharizardIcon],
  ['DEDEDE', DededeIcon],
  ['DIDDY_KONG', DiddyIcon],
  ['DONKEY_KONG', DkIcon],
  ['FALCO', FalcoIcon],
  ['FOX', FoxIcon],
  ['GAME_AND_WATCH', MrGIcon],
  ['GANONDORF', GanonIcon],
  ['ICE_CLIMBERS', IcsIcon],
  ['IKE', IkeIcon],
  ['IVYSAUR', IvysaurIcon],
  ['KIRBY', KirbyIcon],
  ['KNUCKLES', KnucklesIcon],
  ['LINK', LinkIcon],
  ['LUCARIO', LucarioIcon],
  ['LUCAS', LucasIcon],
  ['LUIGI', LuigiIcon],
  ['MARIO', MarioIcon],
  ['MARTH', MarthIcon],
  ['META_KNIGHT', MetaKnightIcon],
  ['MEWTWO', MewtwoIcon],
  ['NESS', NessIcon],
  ['OLIMAR', OlimarIcon],
  ['PEACH', PeachIcon],
  ['PIKACHU', PikachuIcon],
  ['JIGGLYPUFF', PuffIcon],
  ['PIT', PitIcon],
  ['ROB', ROBIcon],
  ['ROY', RoyIcon],
  ['SAMUS', SamusIcon],
  ['SHEIK', SheikIcon],
  ['SNAKE', SnakeIcon],
  ['SONIC', SonicIcon],
  ['SQUIRTLE', SquirtleIcon],
  ['YOSHI', YoshiIcon],
  ['YOUNG_LINK', ToonlinkIcon],
  ['WARIO', WarioIcon],
  ['WOLF', WolfIcon],
  ['ZELDA', ZeldaIcon],
  ['ZERO_SUIT_SAMUS', ZSSIcon]
]);
const characters = [...characterNameToIcon.keys()];

export const getIcon = (name: string, classes="h-20 w-20") => {
  const icon = characterNameToIcon.get(name)
  if(!icon) {
    return <span className="title text-8xl">?</span>
  }
  return <img className={classes} src={icon} />
}

export const randCharacter = () => {
  return characters[Math.floor(Math.random() * characters.length)];
}
