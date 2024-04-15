import { ICh5CommonInput } from "../../ch5-common-input/interfaces/i-ch5-common-input";
import { ICh5Common } from "../../ch5-common/interfaces";
import { ICh5TextInputAttributes } from "./i-ch5-text-input-attributes";
export interface ICh5TextInput extends ICh5TextInputAttributes, ICh5CommonInput, ICh5Common {
    onvaliditychange: string;
    value: string;
}
