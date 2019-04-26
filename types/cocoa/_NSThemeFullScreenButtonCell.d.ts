/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeFullScreenButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    _themeImageState<R = number>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
  }
  namespace _NSThemeFullScreenButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = _NSThemeFullScreenButtonCell>(): R;
      new: <R = _NSThemeFullScreenButtonCell>() => R;
    }
  }
}
