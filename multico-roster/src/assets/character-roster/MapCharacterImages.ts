import NicoletteImage1 from "./nicolette/nicolette-1-alt.png";
import NicoletteImage2 from "./nicolette/nicolette-2-alt.png";
import NicoletteImage3 from "./nicolette/nicolette-3-alt.png";
import NicoletteImage1Alt from "./nicolette/nicolette-1.png";
import NicoletteImage2Alt from "./nicolette/nicolette-2.png";
import NicoletteImage3Alt from "./nicolette/nicolette-3.png";
import PeteImage1 from "./pete/pete-1.png";
import PeteImage2 from "./pete/pete-2.png";
import PeteImage3 from "./pete/pete-3.png";
import { AkumaImage1, AkumaImage2, AkumaImage3 } from "./akuma";

// all items must match the name from the json database, except for unselected
export const MapCharacterImages: Record<string, string[]> = {
    "": [ // prior name: unselected
        NicoletteImage1Alt, NicoletteImage2Alt, NicoletteImage3Alt
    ],
    "nicolette": [
        NicoletteImage1, NicoletteImage2, NicoletteImage3,
    ],
    "nutoilet": [
        NicoletteImage1Alt, NicoletteImage2Alt, NicoletteImage3Alt
    ],
    "akuma": [
        AkumaImage1, AkumaImage2, AkumaImage3
    ],
    "pete": [
        PeteImage1, PeteImage2, PeteImage3
    ]
};