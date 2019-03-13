/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuItemHighlightColor<T = any> extends NSCatalogColor {
    _backingColorSettingPhase<R = unknown, P0 = boolean>(__backingColorSettingPhase: P0): R;
  }
  namespace classes {
    export interface NSMenuItemHighlightColor<T = any> extends NSCatalogColor {
      alloc<R = NSMenuItemHighlightColor>(): R;
      new: <R = NSMenuItemHighlightColor>() => R;
    }
  }
}

declare const NSMenuItemHighlightColor: cocoa.classes.NSMenuItemHighlightColor;