/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHWindowController<T0 = void, T1 = void, T2 = void> extends NSWindowController {}
  namespace CHWindowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController {
      alloc<R = CHWindowController>(): R;
      new: <R = CHWindowController>() => R;
    }
  }
}

declare const CHWindowController: cocoa.CHWindowController.CLASS;
