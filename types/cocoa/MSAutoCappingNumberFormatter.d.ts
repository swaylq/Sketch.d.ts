/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAutoCappingNumberFormatter<T0 = void, T1 = void, T2 = void> extends MSMathNumberFormatter {
    uncappedFormatter<R = unknown>(): R;
    cappedValueForString_errorDescription<R = unknown, P0 = unknown, P1 = unknown>(_cappedValueForString: P0, _errorDescription: P1): R;
  }
  namespace MSAutoCappingNumberFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSMathNumberFormatter {
      alloc<R = MSAutoCappingNumberFormatter>(): R;
      new: <R = MSAutoCappingNumberFormatter>() => R;
    }
  }
}

declare const MSAutoCappingNumberFormatter: cocoa.MSAutoCappingNumberFormatter.CLASS;
