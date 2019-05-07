/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSlidersHSB<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliders {
    brightnessSlider<R = unknown>(): R;
    saturationSlider<R = unknown>(): R;
    hueSlider<R = unknown>(): R;
    _alphaArtworkProvider<R = NSTouchBarColorPickerSliderArtworkProvider>(): R;
    _brightnessArtworkProvider<R = NSTouchBarColorPickerSliderHSBArtworkProvider>(): R;
    _saturationArtworkProvider<R = NSTouchBarColorPickerSliderHSBArtworkProvider>(): R;
    _hueArtworkProvider<R = NSTouchBarColorPickerSliderHSBArtworkProvider>(): R;
    _displayedAlphaComponent<R = number>(): R;
    _displayedBrightnessComponent<R = number>(): R;
    _displayedSaturationComponent<R = number>(): R;
    _displayedHueComponent<R = number>(): R;
  }
  namespace NSTouchBarColorPickerSlidersHSB {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliders {
      alloc<R = NSTouchBarColorPickerSlidersHSB>(): R;
      new: <R = NSTouchBarColorPickerSlidersHSB>() => R;
      keyPathsForValuesAffecting_brightnessArtworkProvider<R = unknown>(): R;
      keyPathsForValuesAffecting_saturationArtworkProvider<R = unknown>(): R;
      keyPathsForValuesAffecting_hueArtworkProvider<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerSlidersHSB: cocoa.NSTouchBarColorPickerSlidersHSB.CLASS;
