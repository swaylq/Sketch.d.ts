/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemView<T0 = void, T1 = void, T2 = void> extends NSTouchBarItemContainerView {}
  namespace NSTouchBarItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItemContainerView {
      alloc<R = NSTouchBarItemView>(): R;
      new: <R = NSTouchBarItemView>() => R;
    }
  }
}

declare const NSTouchBarItemView: cocoa.NSTouchBarItemView.CLASS;
