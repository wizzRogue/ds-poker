import { GameState } from "../classes/GameState";
import { MessageHandler } from "./MessageHandler";
export class CreateGameHandler implements MessageHandler {
    
    handleMessage(message: any, gameState: GameState, playerID: string): string {
        gameState.addNewPlayer(playerID);
        // let response: any;
        // response["method"] = message["method"];
        // response["response"] = gameState.buildGameStateJson();

        // return JSON.stringify(response);
        return "";
    }
}