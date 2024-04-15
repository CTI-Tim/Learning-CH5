import { ICh5CommonAttributesAnimation } from "../../ch5-common/interfaces/i-ch5-common-attributes-animation";
import { TCh5AnimationSize, TCh5AnimationStyle } from './t-ch5-animation';
export interface ICh5AnimationAttributes extends ICh5CommonAttributesAnimation {
    startAnimating: boolean;
    size: TCh5AnimationSize;
    animationStyle: TCh5AnimationStyle;
    receiveStateAnimate: string;
    receiveStateFramesPerSecond: string;
    receiveStateAnimationStyle: string;
}
