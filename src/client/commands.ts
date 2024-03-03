import NW from "./client";

RegisterCommand("logout", async () => {
	if (!NW.CharacterData.loggedIn) return;
	setImmediate(() => {
		emitNet("NW:LogoutPlayer");
	});
}, false);