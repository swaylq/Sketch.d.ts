/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDateCheckingResult<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
    range<R = _NSRange>(): R;
    resultType<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRange_date<R = unknown, P0 = _NSRange, P1 = unknown>(_initWithRange: P0, _date: P1): R;
    initWithRange_date_timeZone_duration<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = number>(_initWithRange: P0, _date: P1, _timeZone: P2, _duration: P3): R;
    initWithRange_date_timeZone_duration_referenceDate<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown>(_initWithRange: P0, _date: P1, _timeZone: P2, _duration: P3, _referenceDate: P4): R;
    initWithRange_date_timeZone_duration_referenceDate_underlyingResult<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown, P5 = void>(_initWithRange: P0, _date: P1, _timeZone: P2, _duration: P3, _referenceDate: P4, _underlyingResult: P5): R;
    initWithRange_date_timeZone_duration_referenceDate_underlyingResult_timeIsSignificant_timeIsApproximate<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown, P5 = void, P6 = boolean, P7 = boolean>(_initWithRange: P0, _date: P1, _timeZone: P2, _duration: P3, _referenceDate: P4, _underlyingResult: P5, _timeIsSignificant: P6, _timeIsApproximate: P7): R;
    initWithRange_date_timeZone_duration_referenceDate_underlyingResult_timeIsSignificant_timeIsApproximate_timeIsPast<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown, P5 = void, P6 = boolean, P7 = boolean, P8 = boolean>(_initWithRange: P0, _date: P1, _timeZone: P2, _duration: P3, _referenceDate: P4, _underlyingResult: P5, _timeIsSignificant: P6, _timeIsApproximate: P7, _timeIsPast: P8): R;
    initWithRange_date_timeZone_duration_referenceDate_underlyingResult_timeIsSignificant_timeIsApproximate_timeIsPast_leadingText_trailingText<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown, P5 = void, P6 = boolean, P7 = boolean, P8 = boolean, P9 = unknown, P10 = unknown>(_initWithRange: P0, _date: P1, _timeZone: P2, _duration: P3, _referenceDate: P4, _underlyingResult: P5, _timeIsSignificant: P6, _timeIsApproximate: P7, _timeIsPast: P8, _leadingText: P9, _trailingText: P10): R;
    timeIsPast<R = boolean>(): R;
    timeIsApproximate<R = boolean>(): R;
    timeIsSignificant<R = boolean>(): R;
    underlyingResult<R = void>(): R;
    referenceDate<R = NSDate>(): R;
    duration<R = number>(): R;
    timeZone<R = NSTimeZone>(): R;
  }
  namespace NSDateCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
      alloc<R = NSDateCheckingResult>(): R;
      new: <R = NSDateCheckingResult>() => R;
    }
  }
}

declare const NSDateCheckingResult: cocoa.NSDateCheckingResult.CLASS;
