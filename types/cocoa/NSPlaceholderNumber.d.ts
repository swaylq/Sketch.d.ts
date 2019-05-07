/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPlaceholderNumber<T0 = void, T1 = void, T2 = void> extends NSPlaceholderValue {
    initWithBool<R = unknown, P0 = boolean>(_initWithBool: P0): R;
    initWithDouble<R = unknown, P0 = number>(_initWithDouble: P0): R;
    initWithFloat<R = unknown, P0 = number>(_initWithFloat: P0): R;
    initWithUnsignedLongLong<R = unknown, P0 = number>(_initWithUnsignedLongLong: P0): R;
    initWithLongLong<R = unknown, P0 = number>(_initWithLongLong: P0): R;
    initWithUnsignedLong<R = unknown, P0 = number>(_initWithUnsignedLong: P0): R;
    initWithLong<R = unknown, P0 = number>(_initWithLong: P0): R;
    initWithUnsignedInteger<R = unknown, P0 = number>(_initWithUnsignedInteger: P0): R;
    initWithInteger<R = unknown, P0 = number>(_initWithInteger: P0): R;
    initWithUnsignedInt<R = unknown, P0 = number>(_initWithUnsignedInt: P0): R;
    initWithInt<R = unknown, P0 = number>(_initWithInt: P0): R;
    initWithUnsignedShort<R = unknown, P0 = number>(_initWithUnsignedShort: P0): R;
    initWithShort<R = unknown, P0 = number>(_initWithShort: P0): R;
    initWithUnsignedChar<R = unknown, P0 = number>(_initWithUnsignedChar: P0): R;
    initWithChar<R = unknown, P0 = boolean>(_initWithChar: P0): R;
  }
  namespace NSPlaceholderNumber {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPlaceholderValue {
      alloc<R = NSPlaceholderNumber>(): R;
      new: <R = NSPlaceholderNumber>() => R;
    }
  }
}

declare const NSPlaceholderNumber: cocoa.NSPlaceholderNumber.CLASS;
