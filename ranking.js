import {firebaseConfig} from './firebase-config.js';
import {createLeaderboard} from './leaderboard-service.js';
export const leaderboard=createLeaderboard({config:firebaseConfig,gameId:'gohan_mada',maxScore:8640000});
