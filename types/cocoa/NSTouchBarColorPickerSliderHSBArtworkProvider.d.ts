/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderHSBArtworkProvider<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderArtworkProvider {
    representedHSBComponent<R = number>(): R;
  }
  namespace NSTouchBarColorPickerSliderHSBArtworkProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderHSBArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderHSBArtworkProvider>() => R;
      brightnessArtworkProviderWithDisplayHue_displaySaturation<R = unknown, P0 = number, P1 = number>(_brightnessArtworkProviderWithDisplayHue: P0, _displaySaturation: P1): R;
      saturationArtworkProviderWithDisplayHue<R = unknown, P0 = number>(_saturationArtworkProviderWithDisplayHue: P0): R;
      hueArtworkProvider<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerSliderHSBArtworkProvider: cocoa.NSTouchBarColorPickerSliderHSBArtworkProvider.CLASS;
