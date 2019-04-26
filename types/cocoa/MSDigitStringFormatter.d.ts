/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDigitStringFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter {}
  namespace MSDigitStringFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter {
      alloc<R = MSDigitStringFormatter>(): R;
      new: <R = MSDigitStringFormatter>() => R;
      isDigitString<R = boolean, P0 = unknown>(_isDigitString: P0): R;
    }
  }
}

declare const MSDigitStringFormatter: cocoa.MSDigitStringFormatter.CLASS;
