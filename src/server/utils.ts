import { Crypto } from "@nativewrappers/client";

export const getLicense = (player: number): string | undefined => {
  const playerSrc: string = player.toString();

  const identifiers = getPlayerIdentifiers(playerSrc);
  for (const identifier of identifiers) {
    if (identifier.includes("license:")) return identifier;
  }
};

global.exports("GetLicense", getLicense);

export const generateUUIDv4 = (): string => Crypto.uuidv4();

global.exports("generateUUIDv4", generateUUIDv4);
