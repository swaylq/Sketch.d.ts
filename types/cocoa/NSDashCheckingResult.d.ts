/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDashCheckingResult<T0 = void, T1 = void, T2 = void> extends NSSubstitutionCheckingResult {
    resultType<R = number>(): R;
  }
  namespace NSDashCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSubstitutionCheckingResult {
      alloc<R = NSDashCheckingResult>(): R;
      new: <R = NSDashCheckingResult>() => R;
    }
  }
}

declare const NSDashCheckingResult: cocoa.NSDashCheckingResult.CLASS;
