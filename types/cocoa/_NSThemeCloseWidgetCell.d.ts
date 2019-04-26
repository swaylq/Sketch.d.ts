/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeCloseWidgetCell<T0 = void, T1 = void, T2 = void> extends _NSThemeWidgetCell {
    setEditedFlag<R = boolean, P0 = boolean>(_setEditedFlag: P0): R;
    accessibilityIsEditedAttributeSettable<R = boolean>(): R;
    accessibilityEditedAttribute<R = unknown>(): R;
  }
  namespace _NSThemeCloseWidgetCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSThemeWidgetCell {
      alloc<R = _NSThemeCloseWidgetCell>(): R;
      new: <R = _NSThemeCloseWidgetCell>() => R;
    }
  }
}
