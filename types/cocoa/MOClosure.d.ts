/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOClosure<T0 = void, T1 = void, T2 = void> extends NSObject {
    initWithBlock<R = unknown, P0 = unknown>(_initWithBlock: P0): R;
    block<R = unknown>(): R;
    callAddress<R = void>(): R;
    typeEncoding<R = string>(): R;
  
}
  namespace MOClosure {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOClosure>(): R;
      new: <R = MOClosure>() => R;
      closureWithBlock<R = MOClosure, P0 = unknown>(_closureWithBlock: P0): R;
  
  }
  }
}

declare const MOClosure: cocoa.MOClosure.CLASS;
