/// <reference types="react" />
export declare const NumberPicker: import('react').ForwardRefExoticComponent<
  Pick<
    Partial<
      import('antd').InputNumberProps<string | number> & {
        children?: import('react').ReactNode
      } & {
        ref?: import('react').Ref<HTMLInputElement>
      }
    >,
    keyof import('antd').InputNumberProps<string | number>
  > &
    import('react').RefAttributes<unknown>
>
export default NumberPicker
