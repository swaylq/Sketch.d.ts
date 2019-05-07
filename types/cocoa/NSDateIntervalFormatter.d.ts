/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDateIntervalFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter {
    _stringFromDate_toDate<R = unknown, P0 = unknown, P1 = unknown>(__stringFromDate: P0, _toDate: P1): R;
    stringFromDateInterval<R = unknown, P0 = unknown>(_stringFromDateInterval: P0): R;
    stringFromDate_toDate<R = unknown, P0 = unknown, P1 = unknown>(_stringFromDate: P0, _toDate: P1): R;
    setBoundaryStyle<R = void, P0 = number>(_setBoundaryStyle: P0): R;
    boundaryStyle<R = number>(): R;
    finalize<R = void>(): R;
    dealloc<R = void>(): R;
    timeStyle<R = number>(): R;
    setTimeStyle<R = void, P0 = number>(_v: P0): R;
    dateStyle<R = number>(): R;
    setDateStyle<R = void, P0 = number>(_v: P0): R;
    dateTemplate<R = NSString>(): R;
    setDateTemplate<R = void, P0 = NSString>(_v: P0): R;
    timeZone<R = NSTimeZone>(): R;
    setTimeZone<R = void, P0 = NSTimeZone>(_v: P0): R;
    calendar<R = NSCalendar>(): R;
    setCalendar<R = void, P0 = NSCalendar>(_v: P0): R;
    locale<R = NSLocale>(): R;
    setLocale<R = void, P0 = NSLocale>(_v: P0): R;
  }
  namespace NSDateIntervalFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter {
      alloc<R = NSDateIntervalFormatter>(): R;
      new: <R = NSDateIntervalFormatter>() => R;
    }
  }
}

declare const NSDateIntervalFormatter: cocoa.NSDateIntervalFormatter.CLASS;
