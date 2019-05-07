/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueAccessor<T0 = void, T1 = void, T2 = void> extends NSObject {
    extraArgument2<R = void>(): R;
    extraArgument1<R = void>(): R;
    extraArgumentCount<R = number>(): R;
    key<R = unknown>(): R;
    selector<R = string>(): R;
    containerClassID<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithContainerClassID_key_implementation_selector_extraArguments_count<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownFunctionPointerType, P3 = string, P4 = void, P5 = number>(_initWithContainerClassID: P0, _key: P1, _implementation: P2, _selector: P3, _extraArguments: P4, _count: P5): R;
  }
  namespace NSKeyValueAccessor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSKeyValueAccessor>(): R;
      new: <R = NSKeyValueAccessor>() => R;
    }
  }
}

declare const NSKeyValueAccessor: cocoa.NSKeyValueAccessor.CLASS;
