/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDatePickerCellExtraIvars<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    setDisabledTextColor<R = void, P0 = unknown>(_setDisabledTextColor: P0): R;
    disabledTextColor<R = unknown>(): R;
    releaseCalendarSpecificResources<R = void>(): R;
    calendarDisplayedMonthDateComponents<R = unknown>(): R;
    returnToHomeMonthButtonCellForDatePickerCell<R = unknown, P0 = unknown>(_returnToHomeMonthButtonCellForDatePickerCell: P0): R;
    arrowRightCellForDatePickerCell<R = unknown, P0 = unknown>(_arrowRightCellForDatePickerCell: P0): R;
    arrowLeftCellForDatePickerCell<R = unknown, P0 = unknown>(_arrowLeftCellForDatePickerCell: P0): R;
  }
  namespace _NSDatePickerCellExtraIvars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSDatePickerCellExtraIvars>(): R;
      new: <R = _NSDatePickerCellExtraIvars>() => R;
    }
  }
}
