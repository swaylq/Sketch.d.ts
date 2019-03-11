/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeAutosaveButtonCell<T = any> extends cocoa.NSButtonCell {
    _themeImageState<R = number>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
  }
  namespace classes {
    export interface NSThemeAutosaveButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = NSThemeAutosaveButtonCell>(): R;
      new: <R = NSThemeAutosaveButtonCell>() => R;
    }
  }
}

declare const NSThemeAutosaveButtonCell: cocoa.classes.NSThemeAutosaveButtonCell;
