/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSlidersCMYK<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliders {
    _alphaArtworkProvider<R = NSTouchBarColorPickerSliderArtworkProvider>(): R;
    _blackArtworkProvider<R = NSTouchBarColorPickerSliderCMYKArtworkProvider>(): R;
    _yellowArtworkProvider<R = NSTouchBarColorPickerSliderCMYKArtworkProvider>(): R;
    _magentaArtworkProvider<R = NSTouchBarColorPickerSliderCMYKArtworkProvider>(): R;
    _cyanArtworkProvider<R = NSTouchBarColorPickerSliderCMYKArtworkProvider>(): R;
    _displayedAlphaComponent<R = number>(): R;
    _displayedBlackComponent<R = number>(): R;
    _displayedYellowComponent<R = number>(): R;
    _displayedMagentaComponent<R = number>(): R;
    _displayedCyanComponent<R = number>(): R;
  }
  namespace NSTouchBarColorPickerSlidersCMYK {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliders {
      alloc<R = NSTouchBarColorPickerSlidersCMYK>(): R;
      new: <R = NSTouchBarColorPickerSlidersCMYK>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSlidersCMYK: cocoa.NSTouchBarColorPickerSlidersCMYK.CLASS;
