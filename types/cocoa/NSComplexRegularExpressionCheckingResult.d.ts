/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComplexRegularExpressionCheckingResult<T0 = void, T1 = void, T2 = void> extends NSRegularExpressionCheckingResult {
    rangeArray<R = unknown>(): R;
    range<R = _NSRange>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSComplexRegularExpressionCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSRegularExpressionCheckingResult {
      alloc<R = NSComplexRegularExpressionCheckingResult>(): R;
      new: <R = NSComplexRegularExpressionCheckingResult>() => R;
    }
  }
}

declare const NSComplexRegularExpressionCheckingResult: cocoa.NSComplexRegularExpressionCheckingResult.CLASS;
