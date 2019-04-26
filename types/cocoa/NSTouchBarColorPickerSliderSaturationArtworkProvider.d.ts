/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderSaturationArtworkProvider<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderHSBArtworkProvider {
    representedHSBComponent<R = number>(): R;
    initWithDisplayHue<R = unknown, P0 = number>(_initWithDisplayHue: P0): R;
  }
  namespace NSTouchBarColorPickerSliderSaturationArtworkProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderHSBArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderSaturationArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderSaturationArtworkProvider>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSliderSaturationArtworkProvider: cocoa.NSTouchBarColorPickerSliderSaturationArtworkProvider.CLASS;
