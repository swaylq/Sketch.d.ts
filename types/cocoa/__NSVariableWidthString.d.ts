/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSVariableWidthString<T0 = void, T1 = void, T2 = void> extends NSString {
    dealloc<R = void>(): R;
    initWithWidthContexts<R = unknown, P0 = unknown>(_initWithWidthContexts: P0): R;
    initWithWidthVariants<R = unknown, P0 = unknown>(_initWithWidthVariants: P0): R;
    initWithString_widthVariants<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _widthVariants: P1): R;
    length<R = number>(): R;
  }
  namespace __NSVariableWidthString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = __NSVariableWidthString>(): R;
      new: <R = __NSVariableWidthString>() => R;
    }
  }
}
