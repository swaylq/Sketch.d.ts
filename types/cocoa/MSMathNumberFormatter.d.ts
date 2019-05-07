/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMathNumberFormatter<T0 = void, T1 = void, T2 = void> extends NSNumberFormatter {}
  namespace MSMathNumberFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNumberFormatter {
      alloc<R = MSMathNumberFormatter>(): R;
      new: <R = MSMathNumberFormatter>() => R;
    }
  }
}

declare const MSMathNumberFormatter: cocoa.MSMathNumberFormatter.CLASS;
