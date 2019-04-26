/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPlaceholderCharacterSet<T0 = void, T1 = void, T2 = void> extends NSCharacterSet {
    replacementObjectForCoder<R = unknown, P0 = unknown>(_replacementObjectForCoder: P0): R;
    replacementObjectForKeyedArchiver<R = unknown, P0 = unknown>(_replacementObjectForKeyedArchiver: P0): R;
    dealloc<R = void>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
    invertedSet<R = unknown>(): R;
    bitmapRepresentation<R = unknown>(): R;
    _expandInverted<R = void>(): R;
    initWithSet_options<R = unknown, P0 = unknown, P1 = number>(_initWithSet: P0, _options: P1): R;
  }
  namespace _NSPlaceholderCharacterSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCharacterSet {
      alloc<R = _NSPlaceholderCharacterSet>(): R;
      new: <R = _NSPlaceholderCharacterSet>() => R;
    }
  }
}
