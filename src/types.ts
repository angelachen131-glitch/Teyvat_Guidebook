export interface Character {
  id: string;
  name: string;
  element: string;
  weapon: string;
  nation: string;
  role: string;
  rarity: number;
  description: string;
  recommendedArtifactSet: string;
  recommendedArtifactStats: {
    sands: string;
    goblet: string;
    circlet: string;
    substats?: string[];
  };
  recommendedWeapon: string;
  recommendedWeaponStat: string;
  image: string;
}
