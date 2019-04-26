/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewPulseView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    contentImage<R = NSImage>(): R;
    setContentImage<R = void, P0 = NSImage>(_v: P0): R;
    pulseColor<R = NSColor>(): R;
    setPulseColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPreviewPulseView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTouchBarCustomizationPreviewPulseView>(): R;
      new: <R = NSTouchBarCustomizationPreviewPulseView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewPulseView: cocoa.NSTouchBarCustomizationPreviewPulseView.CLASS;
