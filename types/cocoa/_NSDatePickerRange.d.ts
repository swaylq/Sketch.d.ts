/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDatePickerRange<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    daysInMonth_year_forDatePickerCell<R = _NSRange, P0 = number, P1 = number, P2 = unknown>(_daysInMonth: P0, _year: P1, _forDatePickerCell: P2): R;
    containsMonth_year_forDatePickerCell<R = boolean, P0 = number, P1 = number, P2 = unknown>(_containsMonth: P0, _year: P1, _forDatePickerCell: P2): R;
    containsDayGranularityDate_forDatePickerCell<R = boolean, P0 = unknown, P1 = unknown>(_containsDayGranularityDate: P0, _forDatePickerCell: P1): R;
    dateRangeAnchoredSelectionWithDate<R = unknown, P0 = unknown>(_dateRangeAnchoredSelectionWithDate: P0): R;
    dateRangeTrimmedFromNearestEndWithDate<R = unknown, P0 = unknown>(_dateRangeTrimmedFromNearestEndWithDate: P0): R;
    dateRangeExtendedWithDate<R = unknown, P0 = unknown>(_dateRangeExtendedWithDate: P0): R;
    isAnchoredRight<R = boolean>(): R;
    isAnchoredLeft<R = boolean>(): R;
    setAnchorRight<R = void>(): R;
    setAnchorLeft<R = void>(): R;
    endDate<R = unknown>(): R;
    setTimeInterval<R = void, P0 = number>(_setTimeInterval: P0): R;
    setDate<R = void, P0 = unknown>(_setDate: P0): R;
    timeInterval<R = number>(): R;
    date<R = unknown>(): R;
    initWithDatePickerRange<R = unknown, P0 = unknown>(_initWithDatePickerRange: P0): R;
    initWithDate_timeInterval<R = unknown, P0 = unknown, P1 = number>(_initWithDate: P0, _timeInterval: P1): R;
    description<R = unknown>(): R;
  }
  namespace _NSDatePickerRange {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSDatePickerRange>(): R;
      new: <R = _NSDatePickerRange>() => R;
    }
  }
}
