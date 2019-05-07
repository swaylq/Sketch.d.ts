/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderCMYKArtworkProvider<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderArtworkProvider {
    initWithComponent<R = unknown, P0 = number>(_initWithComponent: P0): R;
  }
  namespace NSTouchBarColorPickerSliderCMYKArtworkProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderCMYKArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderCMYKArtworkProvider>() => R;
      blackArtworkProvider<R = unknown>(): R;
      yellowArtworkProvider<R = unknown>(): R;
      magentaArtworkProvider<R = unknown>(): R;
      cyanArtworkProvider<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerSliderCMYKArtworkProvider: cocoa.NSTouchBarColorPickerSliderCMYKArtworkProvider.CLASS;
