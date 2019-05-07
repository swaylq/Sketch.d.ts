/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOMethod<T0 = void, T1 = void, T2 = void> extends NSObject {
    target<R = unknown>(): R;
    selector<R = string>(): R;
    // + MOMethod(MOMethod):
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    selector<R = string>(): R;
    setSelector<R = void, P0 = string>(_v: P0): R;
    block<R = unknown>(): R;
    setBlock<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace MOMethod {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOMethod>(): R;
      new: <R = MOMethod>() => R;
      methodWithTarget_selector<R = MOMethod, P0 = unknown, P1 = string>(_methodWithTarget: P0, _selector: P1): R;
  
  }
  }
}

declare const MOMethod: cocoa.MOMethod.CLASS;
