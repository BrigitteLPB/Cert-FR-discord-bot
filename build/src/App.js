"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@discordjs/rest");
const ws_1 = require("@discordjs/ws");
const core_1 = require("@discordjs/core");
const rest = new rest_1.REST({ version: '10' }).setToken((_a = process.env.DISCORD_TOKEN) !== null && _a !== void 0 ? _a : "");
const gateway = new ws_1.WebSocketManager({
    token: (_b = process.env.DISCORD_TOKEN) !== null && _b !== void 0 ? _b : "",
    intents: core_1.GatewayIntentBits.GuildMessages | core_1.GatewayIntentBits.MessageContent,
    rest,
});
const client = new core_1.Client({ rest, gateway });
client.on(core_1.GatewayDispatchEvents.InteractionCreate, ({ data: interaction, api }) => __awaiter(void 0, void 0, void 0, function* () {
    if (interaction.type !== core_1.InteractionType.ApplicationCommand || interaction.data.name !== 'ping') {
        return;
    }
    yield api.interactions.reply(interaction.id, interaction.token, { content: 'Pong!', flags: core_1.MessageFlags.Ephemeral });
}));
client.once(core_1.GatewayDispatchEvents.Ready, () => console.log('Ready!'));
gateway.connect();
//# sourceMappingURL=App.js.map