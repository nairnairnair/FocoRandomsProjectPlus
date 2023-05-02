
import BowserIcon from '../../images/characters/Bowser.png';
import CaptainIcon from '../../images/characters/Captain-Falcon.png';
import CharizardIcon from '../../images/characters/Charizard.png';
import DededeIcon from '../../images/characters/Dedede.png';
import DiddyIcon from '../../images/characters/Diddy-Kong.png';
import DkIcon from '../../images/characters/Donkey-Kong.png';
import FalcoIcon from '../../images/characters/Falco.png';
import FoxIcon from '../../images/characters/Fox.png';
import GanonIcon from '../../images/characters/Ganondorf.png';
import IcsIcon from '../../images/characters/Ice-Climbers.png';
import IkeIcon from '../../images/characters/Ike.png';
import IvysaurIcon from '../../images/characters/Ivysaur.png';
import KirbyIcon from '../../images/characters/Kirby.png';
import KnucklesIcon from '../../images/characters/Knuckles.png';
import LinkIcon from '../../images/characters/Link.png';
import LucarioIcon from '../../images/characters/Lucario.png';
import LucasIcon from '../../images/characters/Lucas.png';
import LuigiIcon from '../../images/characters/Luigi.png';
import MarioIcon from '../../images/characters/Mario.png';
import MarthIcon from '../../images/characters/Marth.png';
import MetaKnightIcon from '../../images/characters/Meta-Knight.png';
import MewtwoIcon from '../../images/characters/Mewtwo.png';
import MrGIcon from '../../images/characters/Mr-Game-&-Watch.png';
import NessIcon from '../../images/characters/Ness.png';
import OlimarIcon from '../../images/characters/Olimar.png';
import PeachIcon from '../../images/characters/Peach.png';
import PikachuIcon from '../../images/characters/Pikachu.png';
import PuffIcon from '../../images/characters/Jigglypuff.png';
import PitIcon from '../../images/characters/Pit.png';
import ROBIcon from '../../images/characters/ROB.png';
import RoyIcon from '../../images/characters/Roy.png';
import SamusIcon from '../../images/characters/Samus.png';
import SheikIcon from '../../images/characters/Sheik.png';
import SnakeIcon from '../../images/characters/Snake.png';
import SonicIcon from '../../images/characters/Sonic.png';
import SquirtleIcon from '../../images/characters/Squirtle.png';
import ToonlinkIcon from '../../images/characters/Toon-Link.png';
import WarioIcon from '../../images/characters/Wario.png';
import WolfIcon from '../../images/characters/Wolf.png';
import YoshiIcon from '../../images/characters/Yoshi.png';
import ZeldaIcon from '../../images/characters/Zelda.png';
import ZSSIcon from '../../images/characters/Zero-Suit-Samus.png';
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
