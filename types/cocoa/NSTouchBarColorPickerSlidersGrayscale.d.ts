/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSlidersGrayscale<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliders {
    _alphaArtworkProvider<R = NSTouchBarColorPickerSliderArtworkProvider>(): R;
    _grayscaleArtworkProvider<R = NSTouchBarColorPickerSliderGrayscaleArtworkProvider>(): R;
    _displayedAlphaComponent<R = number>(): R;
    _displayedGrayscaleComponent<R = number>(): R;
  }
  namespace NSTouchBarColorPickerSlidersGrayscale {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliders {
      alloc<R = NSTouchBarColorPickerSlidersGrayscale>(): R;
      new: <R = NSTouchBarColorPickerSlidersGrayscale>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSlidersGrayscale: cocoa.NSTouchBarColorPickerSlidersGrayscale.CLASS;
