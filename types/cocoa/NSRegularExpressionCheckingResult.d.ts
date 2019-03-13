/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRegularExpressionCheckingResult<T = any> extends NSTextCheckingResult {
    resultType<R = number>(): R;
    initWithRangeArray_regularExpression<R = unknown, P0 = unknown, P1 = unknown>(_initWithRangeArray: P0, _regularExpression: P1): R;
    initWithRanges_count_regularExpression<R = unknown, P0 = _NSRange, P1 = number, P2 = unknown>(_initWithRanges: P0, _count: P1, _regularExpression: P2): R;
    rangeArray<R = NSArray>(): R;
    regularExpression<R = NSRegularExpression>(): R;
  }
  namespace classes {
    export interface NSRegularExpressionCheckingResult<T = any> extends NSTextCheckingResult {
      alloc<R = NSRegularExpressionCheckingResult>(): R;
      new: <R = NSRegularExpressionCheckingResult>() => R;
    }
  }
}

declare const NSRegularExpressionCheckingResult: cocoa.classes.NSRegularExpressionCheckingResult;
