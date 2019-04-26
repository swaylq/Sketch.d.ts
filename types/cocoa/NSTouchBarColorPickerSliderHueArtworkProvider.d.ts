/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderHueArtworkProvider<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderHSBArtworkProvider {
    representedHSBComponent<R = number>(): R;
  }
  namespace NSTouchBarColorPickerSliderHueArtworkProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderHSBArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderHueArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderHueArtworkProvider>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSliderHueArtworkProvider: cocoa.NSTouchBarColorPickerSliderHueArtworkProvider.CLASS;
