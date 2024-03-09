import { Content } from "./Content";
import { Header } from "./Header";
import { LabelItem } from "./LabelItem";
import { Root } from "./Root";
import { NormalInput } from "./InputTypes/DefaultInput"
import { SquareInput } from "./InputTypes/SquaredTypeInput"
import { SwitchInput } from "./InputTypes/SwitchInput"
import {CheckBoxInput, CheckBoxInputItem} from "./InputTypes/CheckBoxInput"
export default {
    Root,
    Header,
    Content,
    Item: LabelItem
}

export {
    NormalInput,
    SquareInput,
    SwitchInput,
    CheckBoxInput,
    CheckBoxInputItem
}