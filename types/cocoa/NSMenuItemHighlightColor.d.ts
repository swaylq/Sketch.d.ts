/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuItemHighlightColor<T0 = void, T1 = void, T2 = void> extends NSCatalogColor {
    _backingColorSettingPhase<R = unknown, P0 = boolean>(__backingColorSettingPhase: P0): R;
  }
  namespace NSMenuItemHighlightColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCatalogColor {
      alloc<R = NSMenuItemHighlightColor>(): R;
      new: <R = NSMenuItemHighlightColor>() => R;
    }
  }
}

declare const NSMenuItemHighlightColor: cocoa.NSMenuItemHighlightColor.CLASS;
