/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSByteCountFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol {
    stringFromByteCount<R = unknown, P0 = number>(_stringFromByteCount: P0): R;
    _options<R = number>(): R;
    zeroPadsFractionDigits<R = boolean>(): R;
    setZeroPadsFractionDigits<R = void, P0 = boolean>(_v: P0): R;
    adaptive<R = boolean>(): R;
    setAdaptive<R = void, P0 = boolean>(_v: P0): R;
    includesActualByteCount<R = boolean>(): R;
    setIncludesActualByteCount<R = void, P0 = boolean>(_v: P0): R;
    includesCount<R = boolean>(): R;
    setIncludesCount<R = void, P0 = boolean>(_v: P0): R;
    includesUnit<R = boolean>(): R;
    setIncludesUnit<R = void, P0 = boolean>(_v: P0): R;
    allowsNonnumericFormatting<R = boolean>(): R;
    setAllowsNonnumericFormatting<R = void, P0 = boolean>(_v: P0): R;
    formattingContext<R = number>(): R;
    setFormattingContext<R = void, P0 = number>(_v: P0): R;
    countStyle<R = number>(): R;
    setCountStyle<R = void, P0 = number>(_v: P0): R;
    allowedUnits<R = number>(): R;
    setAllowedUnits<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSByteCountFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol {
      alloc<R = NSByteCountFormatter>(): R;
      new: <R = NSByteCountFormatter>() => R;
      stringFromByteCount_countStyle<R = unknown, P0 = number, P1 = number>(_stringFromByteCount: P0, _countStyle: P1): R;
    }
  }
}

declare const NSByteCountFormatter: cocoa.NSByteCountFormatter.CLASS;
