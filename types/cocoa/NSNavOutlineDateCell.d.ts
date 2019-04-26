/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavOutlineDateCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    minimumWidth<R = number>(): R;
    _interiorBoundsToDrawWithFrame<R = CGRect, P0 = CGRect>(__interiorBoundsToDrawWithFrame: P0): R;
    _stringToDraw<R = unknown>(): R;
    _isValidDate<R = boolean, P0 = unknown>(__isValidDate: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    _dateStringToDraw<R = unknown>(): R;
    _todayStringToDrawForDate<R = unknown, P0 = unknown>(__todayStringToDrawForDate: P0): R;
    _yesterdayStringToDrawForDate<R = unknown, P0 = unknown>(__yesterdayStringToDrawForDate: P0): R;
    _updateDetailLevel<R = void>(): R;
    _updateDetailLevelWidths<R = void>(): R;
    resetDateFormats<R = void>(): R;
    _dateFormatterForDetailLevel<R = unknown, P0 = number>(__dateFormatterForDetailLevel: P0): R;
    useRelativeDates<R = boolean>(): R;
    setUseRelativeDates<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSNavOutlineDateCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSNavOutlineDateCell>(): R;
      new: <R = NSNavOutlineDateCell>() => R;
    }
  }
}

declare const NSNavOutlineDateCell: cocoa.NSNavOutlineDateCell.CLASS;
