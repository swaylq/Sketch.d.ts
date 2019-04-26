/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLabelPopoverView<T0 = void, T1 = void, T2 = void> extends NSView {
    edgeInset<R = number>(): R;
    setEdgeInset<R = void, P0 = number>(_v: P0): R;
    minHeight<R = number>(): R;
    setMinHeight<R = void, P0 = number>(_v: P0): R;
    center<R = number>(): R;
    setCenter<R = void, P0 = number>(_v: P0): R;
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPaletteLabelPopoverView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTouchBarCustomizationPaletteLabelPopoverView>(): R;
      new: <R = NSTouchBarCustomizationPaletteLabelPopoverView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteLabelPopoverView: cocoa.NSTouchBarCustomizationPaletteLabelPopoverView.CLASS;
