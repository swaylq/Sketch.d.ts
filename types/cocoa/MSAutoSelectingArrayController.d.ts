/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAutoSelectingArrayController<T0 = void, T1 = void, T2 = void> extends NSArrayController {}
  namespace MSAutoSelectingArrayController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSArrayController {
      alloc<R = MSAutoSelectingArrayController>(): R;
      new: <R = MSAutoSelectingArrayController>() => R;
    }
  }
}

declare const MSAutoSelectingArrayController: cocoa.MSAutoSelectingArrayController.CLASS;
