/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarPressAndHoldTransposer<T0 = void, T1 = void, T2 = void> extends NSObject {
    initialXLocation<R = number>(): R;
  }
  namespace NSTouchBarPressAndHoldTransposer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTouchBarPressAndHoldTransposer>(): R;
      new: <R = NSTouchBarPressAndHoldTransposer>() => R;
    }
  }
}

declare const NSTouchBarPressAndHoldTransposer: cocoa.NSTouchBarPressAndHoldTransposer.CLASS;
