/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompletionCheckingResult<T0 = void, T1 = void, T2 = void> extends NSSubstitutionCheckingResult {
    resultType<R = number>(): R;
  }
  namespace NSCompletionCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSubstitutionCheckingResult {
      alloc<R = NSCompletionCheckingResult>(): R;
      new: <R = NSCompletionCheckingResult>() => R;
    }
  }
}

declare const NSCompletionCheckingResult: cocoa.NSCompletionCheckingResult.CLASS;
