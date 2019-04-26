/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSlidersRGB<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliders {
    _updateEntryMode<R = void>(): R;
    entryMode<R = number>(): R;
    setEntryMode<R = void, P0 = number>(_v: P0): R;
    _alphaArtworkProvider<R = NSTouchBarColorPickerSliderArtworkProvider>(): R;
    _blueArtworkProvider<R = NSTouchBarColorPickerSliderRGBArtworkProvider>(): R;
    _greenArtworkProvider<R = NSTouchBarColorPickerSliderRGBArtworkProvider>(): R;
    _redArtworkProvider<R = NSTouchBarColorPickerSliderRGBArtworkProvider>(): R;
    _displayedAlphaComponent<R = number>(): R;
    _displayedBlueComponent<R = number>(): R;
    _displayedGreenComponent<R = number>(): R;
    _displayedRedComponent<R = number>(): R;
  }
  namespace NSTouchBarColorPickerSlidersRGB {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliders {
      alloc<R = NSTouchBarColorPickerSlidersRGB>(): R;
      new: <R = NSTouchBarColorPickerSlidersRGB>() => R;
      keyPathsForValuesAffecting_blueArtworkProvider<R = unknown>(): R;
      keyPathsForValuesAffecting_greenArtworkProvider<R = unknown>(): R;
      keyPathsForValuesAffecting_redArtworkProvider<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerSlidersRGB: cocoa.NSTouchBarColorPickerSlidersRGB.CLASS;
