/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimpleRegularExpressionCheckingResult<T0 = void, T1 = void, T2 = void> extends NSRegularExpressionCheckingResult {
    rangeArray<R = unknown>(): R;
    range<R = _NSRange>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSSimpleRegularExpressionCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSRegularExpressionCheckingResult {
      alloc<R = NSSimpleRegularExpressionCheckingResult>(): R;
      new: <R = NSSimpleRegularExpressionCheckingResult>() => R;
    }
  }
}

declare const NSSimpleRegularExpressionCheckingResult: cocoa.NSSimpleRegularExpressionCheckingResult.CLASS;
