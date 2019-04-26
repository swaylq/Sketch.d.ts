/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSubstitutionCheckingResult<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
    range<R = _NSRange>(): R;
    dealloc<R = void>(): R;
    initWithRange_replacementString<R = unknown, P0 = _NSRange, P1 = unknown>(_initWithRange: P0, _replacementString: P1): R;
  }
  namespace NSSubstitutionCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
      alloc<R = NSSubstitutionCheckingResult>(): R;
      new: <R = NSSubstitutionCheckingResult>() => R;
    }
  }
}

declare const NSSubstitutionCheckingResult: cocoa.NSSubstitutionCheckingResult.CLASS;
