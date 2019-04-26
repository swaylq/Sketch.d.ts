/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeAutosaveButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    _themeImageState<R = number>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
  }
  namespace NSThemeAutosaveButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSThemeAutosaveButtonCell>(): R;
      new: <R = NSThemeAutosaveButtonCell>() => R;
    }
  }
}

declare const NSThemeAutosaveButtonCell: cocoa.NSThemeAutosaveButtonCell.CLASS;
