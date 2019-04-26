/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolController<T0 = void, T1 = void, T2 = void> extends NSObject {
    reset<R = void>(): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSToolController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSToolController>(): R;
      new: <R = MSToolController>() => R;
    }
  }
}

declare const MSToolController: cocoa.MSToolController.CLASS;
