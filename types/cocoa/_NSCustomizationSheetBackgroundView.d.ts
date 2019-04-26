/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCustomizationSheetBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    wantsLayer<R = boolean>(): R;
    paletteScaleFactor<R = number>(): R;
    setPaletteScaleFactor<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSCustomizationSheetBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSCustomizationSheetBackgroundView>(): R;
      new: <R = _NSCustomizationSheetBackgroundView>() => R;
      keyPathsForValuesAffectingPaletteScaleFactor<R = unknown>(): R;
    }
  }
}
