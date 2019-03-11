/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeZoomWidgetCell<T = any> extends cocoa._NSThemeWidgetCell {
    performHandoff<R = void, P0 = unknown>(_performHandoff: P0): R;
  }
  namespace classes {
    export interface _NSThemeZoomWidgetCell<T = any> extends cocoa.classes._NSThemeWidgetCell {
      alloc<R = _NSThemeZoomWidgetCell>(): R;
      new: <R = _NSThemeZoomWidgetCell>() => R;
    }
  }
}
