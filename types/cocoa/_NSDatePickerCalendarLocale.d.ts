/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDatePickerCalendarLocale<T0 = void, T1 = void, T2 = void> extends NSLocale {
    _prefs<R = unknown>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    dealloc<R = void>(): R;
    initWithLocale_calendar<R = unknown, P0 = unknown, P1 = unknown>(_initWithLocale: P0, _calendar: P1): R;
  }
  namespace _NSDatePickerCalendarLocale {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLocale {}
  }
}
