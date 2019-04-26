/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSReplacementCheckingResult<T0 = void, T1 = void, T2 = void> extends NSSubstitutionCheckingResult {
    resultType<R = number>(): R;
  }
  namespace NSReplacementCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSubstitutionCheckingResult {
      alloc<R = NSReplacementCheckingResult>(): R;
      new: <R = NSReplacementCheckingResult>() => R;
    }
  }
}

declare const NSReplacementCheckingResult: cocoa.NSReplacementCheckingResult.CLASS;
