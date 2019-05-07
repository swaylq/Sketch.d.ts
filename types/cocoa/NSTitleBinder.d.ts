/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitleBinder<T0 = void, T1 = void, T2 = void> extends NSBinder {}
  namespace NSTitleBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBinder {
      alloc<R = NSTitleBinder>(): R;
      new: <R = NSTitleBinder>() => R;
    }
  }
}

declare const NSTitleBinder: cocoa.NSTitleBinder.CLASS;
