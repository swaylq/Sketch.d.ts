/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSQuoteCheckingResult<T0 = void, T1 = void, T2 = void> extends NSSubstitutionCheckingResult {
    resultType<R = number>(): R;
  }
  namespace NSQuoteCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSubstitutionCheckingResult {
      alloc<R = NSQuoteCheckingResult>(): R;
      new: <R = NSQuoteCheckingResult>() => R;
    }
  }
}

declare const NSQuoteCheckingResult: cocoa.NSQuoteCheckingResult.CLASS;
