import { ICh5CommonAttributesForCustomClass } from "./common/i-ch5-common-attributes-customclass";
import { ICh5CommonAttributesForCustomStyle } from "./common/i-ch5-common-attributes-customstyle";
import { ICh5CommonAttributesForDir } from "./common/i-ch5-common-attributes-dir";
import { ICh5CommonAttributesForId } from "./common/i-ch5-common-attributes-id";
import { ICh5CommonAttributesForNoShowType } from "./common/i-ch5-common-attributes-noshowtype";
import { ICh5CommonAttributesForReceiveStateCustomClass } from "./common/i-ch5-common-attributes-receivestatecustomclass";
import { ICh5CommonAttributesForReceiveStateCustomStyle } from "./common/i-ch5-common-attributes-receivestatecustomstyle";
import { ICh5CommonAttributesForReceiveStateShow } from "./common/i-ch5-common-attributes-receivestateshow";
import { ICh5CommonAttributesForShow } from "./common/i-ch5-common-attributes-show";
export interface ICh5AttributesDateTime extends ICh5CommonAttributesForDir, ICh5CommonAttributesForShow, ICh5CommonAttributesForReceiveStateShow, ICh5CommonAttributesForReceiveStateCustomStyle, ICh5CommonAttributesForReceiveStateCustomClass, ICh5CommonAttributesForNoShowType, ICh5CommonAttributesForCustomStyle, ICh5CommonAttributesForCustomClass, ICh5CommonAttributesForId {
}
