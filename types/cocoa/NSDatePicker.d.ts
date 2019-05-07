/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDatePicker<T0 = void, T1 = void, T2 = void> extends NSControl {
    _setWrapsDateComponentArithmetic<R = void, P0 = boolean>(__setWrapsDateComponentArithmetic: P0): R;
    _wrapsDateComponentArithmetic<R = boolean>(): R;
    _setForcesLeadingZeroes<R = void, P0 = boolean>(__setForcesLeadingZeroes: P0): R;
    _forcesLeadingZeroes<R = boolean>(): R;
    _setDisabledTextColor<R = void, P0 = unknown>(__setDisabledTextColor: P0): R;
    _disabledTextColor<R = unknown>(): R;
    ns_hasClockAndCalendar<R = boolean>(): R;
    ns_hasCalendar<R = boolean>(): R;
    ns_hasClock<R = boolean>(): R;
    ns_isGraphical<R = boolean>(): R;
    delegate<R = NSDatePickerCellDelegate>(): R;
    setDelegate<R = void, P0 = NSDatePickerCellDelegate>(_v: P0): R;
    maxDate<R = NSDate>(): R;
    setMaxDate<R = void, P0 = NSDate>(_v: P0): R;
    minDate<R = NSDate>(): R;
    setMinDate<R = void, P0 = NSDate>(_v: P0): R;
    timeInterval<R = number>(): R;
    setTimeInterval<R = void, P0 = number>(_v: P0): R;
    dateValue<R = NSDate>(): R;
    setDateValue<R = void, P0 = NSDate>(_v: P0): R;
    timeZone<R = NSTimeZone>(): R;
    setTimeZone<R = void, P0 = NSTimeZone>(_v: P0): R;
    locale<R = NSLocale>(): R;
    setLocale<R = void, P0 = NSLocale>(_v: P0): R;
    calendar<R = NSCalendar>(): R;
    setCalendar<R = void, P0 = NSCalendar>(_v: P0): R;
    datePickerElements<R = number>(): R;
    setDatePickerElements<R = void, P0 = number>(_v: P0): R;
    datePickerMode<R = number>(): R;
    setDatePickerMode<R = void, P0 = number>(_v: P0): R;
    textColor<R = NSColor>(): R;
    setTextColor<R = void, P0 = NSColor>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    drawsBackground<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_v: P0): R;
    bordered<R = boolean>(): R;
    setBordered<R = void, P0 = boolean>(_v: P0): R;
    bezeled<R = boolean>(): R;
    setBezeled<R = void, P0 = boolean>(_v: P0): R;
    datePickerStyle<R = number>(): R;
    setDatePickerStyle<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSDatePicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl {
      alloc<R = NSDatePicker>(): R;
      new: <R = NSDatePicker>() => R;
    }
  }
}

declare const NSDatePicker: cocoa.NSDatePicker.CLASS;
