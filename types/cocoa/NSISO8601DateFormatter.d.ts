/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO8601DateFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSSecureCodingProtocol {
    dateFromString<R = unknown, P0 = unknown>(_dateFromString: P0): R;
    stringFromDate<R = unknown, P0 = unknown>(_stringFromDate: P0): R;
    updateFormatter<R = void>(): R;
    dealloc<R = void>(): R;
    formatOptions<R = number>(): R;
    setFormatOptions<R = void, P0 = number>(_v: P0): R;
    timeZone<R = NSTimeZone>(): R;
    setTimeZone<R = void, P0 = NSTimeZone>(_v: P0): R;
  }
  namespace NSISO8601DateFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSSecureCodingProtocol {
      alloc<R = NSISO8601DateFormatter>(): R;
      new: <R = NSISO8601DateFormatter>() => R;
      stringFromDate_timeZone_formatOptions<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_stringFromDate: P0, _timeZone: P1, _formatOptions: P2): R;
    }
  }
}

declare const NSISO8601DateFormatter: cocoa.NSISO8601DateFormatter.CLASS;
