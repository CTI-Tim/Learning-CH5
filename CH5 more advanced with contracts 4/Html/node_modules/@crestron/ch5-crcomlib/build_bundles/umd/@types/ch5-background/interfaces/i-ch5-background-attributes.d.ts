import { ICh5CommonAttributes } from '../../ch5-common/interfaces';
import { TCh5BackgroundScale, TCh5BackgroundRepeat, TCh5BackgroundTransitionEffect } from './index';
export interface ICh5BackgroundAttributes extends ICh5CommonAttributes {
    url: string;
    backgroundColor: string;
    repeat: TCh5BackgroundRepeat | null;
    scale: TCh5BackgroundScale;
    refreshRate: number | string;
    imgBackgroundColor: string;
    transitionEffect: TCh5BackgroundTransitionEffect;
    transitionDuration: string;
    receiveStateRefreshRate: string;
    receiveStateUrl: string;
    receiveStateBackgroundColor: string;
}
