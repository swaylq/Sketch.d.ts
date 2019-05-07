/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownController<T0 = void, T1 = void, T2 = void> extends MSUpDownController {}
  namespace MSInlineUpDownController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSUpDownController {
      alloc<R = MSInlineUpDownController>(): R;
      new: <R = MSInlineUpDownController>() => R;
    }
  }
}

declare const MSInlineUpDownController: cocoa.MSInlineUpDownController.CLASS;
