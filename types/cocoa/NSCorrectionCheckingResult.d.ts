/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionCheckingResult<T0 = void, T1 = void, T2 = void> extends NSSubstitutionCheckingResult {
    resultType<R = number>(): R;
    initWithRange_replacementString_alternativeStrings<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown>(_initWithRange: P0, _replacementString: P1, _alternativeStrings: P2): R;
  }
  namespace NSCorrectionCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSubstitutionCheckingResult {
      alloc<R = NSCorrectionCheckingResult>(): R;
      new: <R = NSCorrectionCheckingResult>() => R;
    }
  }
}

declare const NSCorrectionCheckingResult: cocoa.NSCorrectionCheckingResult.CLASS;
