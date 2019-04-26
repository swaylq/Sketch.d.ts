/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPlaceholderValue<T0 = void, T1 = void, T2 = void> extends NSNumber {
    objCType<R = string>(): R;
    dealloc<R = void>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
  }
  namespace NSPlaceholderValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNumber {
      alloc<R = NSPlaceholderValue>(): R;
      new: <R = NSPlaceholderValue>() => R;
    }
  }
}

declare const NSPlaceholderValue: cocoa.NSPlaceholderValue.CLASS;
