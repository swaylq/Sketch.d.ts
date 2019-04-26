/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDatePickerCellSubfield<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    dealloc<R = void>(): R;
    initWithElement_frame_dateFormat_stringValue<R = unknown, P0 = number, P1 = CGRect, P2 = unknown, P3 = unknown>(_initWithElement: P0, _frame: P1, _dateFormat: P2, _stringValue: P3): R;
    stringValue<R = NSString>(): R;
    setStringValue<R = void, P0 = NSString>(_v: P0): R;
    dateFormat<R = NSString>(): R;
    frame<R = CGRect>(): R;
    element<R = number>(): R;
  }
  namespace _NSDatePickerCellSubfield {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = _NSDatePickerCellSubfield>(): R;
      new: <R = _NSDatePickerCellSubfield>() => R;
    }
  }
}
