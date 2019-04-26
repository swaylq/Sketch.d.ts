/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSavePanelTextView<T0 = void, T1 = void, T2 = void> extends NSTextView {}
  namespace _NSSavePanelTextView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextView {
      alloc<R = _NSSavePanelTextView>(): R;
      new: <R = _NSSavePanelTextView>() => R;
    }
  }
}
