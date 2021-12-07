/// <reference types="react" />
import {
  RadioProps,
  GroupProps as RadioGroupProps,
} from '@alifd/next/lib/radio'
declare type ComposedRadio = React.FC<RadioProps> & {
  Group?: React.FC<RadioGroupProps>
}
export declare const Radio: ComposedRadio
export default Radio
