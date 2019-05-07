/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSectionColor<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSectionWithPicker {
    hasAdvancedSettingsNib<R = boolean>(): R;
    setStyleParts<R = void, P0 = unknown>(_setStyleParts: P0): R;
    selectColorInAssetPicker<R = void, P0 = unknown>(_selectColorInAssetPicker: P0): R;
    highlightCurrentColor<R = void>(): R;
    pickedColor<R = MSColor>(): R;
    setPickedColor<R = void, P0 = MSColor>(_v: P0): R;
  }
  namespace MSColorInspectorSectionColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorSectionWithPicker {
      alloc<R = MSColorInspectorSectionColor>(): R;
      new: <R = MSColorInspectorSectionColor>() => R;
    }
  }
}

declare const MSColorInspectorSectionColor: cocoa.MSColorInspectorSectionColor.CLASS;
