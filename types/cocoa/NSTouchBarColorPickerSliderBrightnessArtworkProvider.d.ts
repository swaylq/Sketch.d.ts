/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderBrightnessArtworkProvider<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderHSBArtworkProvider {
    representedHSBComponent<R = number>(): R;
    initWithDisplayHue_displaySaturation<R = unknown, P0 = number, P1 = number>(_initWithDisplayHue: P0, _displaySaturation: P1): R;
  }
  namespace NSTouchBarColorPickerSliderBrightnessArtworkProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderHSBArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderBrightnessArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderBrightnessArtworkProvider>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSliderBrightnessArtworkProvider: cocoa.NSTouchBarColorPickerSliderBrightnessArtworkProvider.CLASS;
