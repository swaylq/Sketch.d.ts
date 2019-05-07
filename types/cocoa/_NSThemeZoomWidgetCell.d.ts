/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeZoomWidgetCell<T0 = void, T1 = void, T2 = void> extends _NSThemeWidgetCell {
    performHandoff<R = void, P0 = unknown>(_performHandoff: P0): R;
  }
  namespace _NSThemeZoomWidgetCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSThemeWidgetCell {
      alloc<R = _NSThemeZoomWidgetCell>(): R;
      new: <R = _NSThemeZoomWidgetCell>() => R;
    }
  }
}
