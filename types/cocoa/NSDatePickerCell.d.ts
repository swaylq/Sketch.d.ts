/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDatePickerCell<T0 = void, T1 = void, T2 = void> extends NSActionCell {}
  namespace NSDatePickerCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSActionCell {
      alloc<R = NSDatePickerCell>(): R;
      new: <R = NSDatePickerCell>() => R;
      _sharedDateFormatter<R = unknown>(): R;
    }
  }
}

declare const NSDatePickerCell: cocoa.NSDatePickerCell.CLASS;
