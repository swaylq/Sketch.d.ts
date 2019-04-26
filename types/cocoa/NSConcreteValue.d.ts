/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteValue<T0 = void, T1 = void, T2 = void> extends NSValue {
    _value<R = void>(): R;
    objCType<R = string>(): R;
  }
  namespace NSConcreteValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValue {
      alloc<R = NSConcreteValue>(): R;
      new: <R = NSConcreteValue>() => R;
    }
  }
}

declare const NSConcreteValue: cocoa.NSConcreteValue.CLASS;
