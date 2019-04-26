/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtendedRegularExpressionCheckingResult<T0 = void, T1 = void, T2 = void> extends NSRegularExpressionCheckingResult {
    rangeArray<R = unknown>(): R;
    range<R = _NSRange>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSExtendedRegularExpressionCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSRegularExpressionCheckingResult {
      alloc<R = NSExtendedRegularExpressionCheckingResult>(): R;
      new: <R = NSExtendedRegularExpressionCheckingResult>() => R;
    }
  }
}

declare const NSExtendedRegularExpressionCheckingResult: cocoa.NSExtendedRegularExpressionCheckingResult.CLASS;
