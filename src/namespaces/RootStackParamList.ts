import { God } from './God';
import {Post} from './Post';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  HomeScreen: undefined;
  AudioPlayScreen: {image: string};
  VideoPlayScreen: {postItem: Post; relatedVodeos: Post[]};
  GodDetailsScreen: {godItem: God}
  YoutubeSaveScreen:undefined
};
