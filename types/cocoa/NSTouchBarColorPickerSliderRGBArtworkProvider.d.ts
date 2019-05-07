/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderRGBArtworkProvider<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderArtworkProvider {
    initWithComponent_entryMode<R = unknown, P0 = number, P1 = number>(_initWithComponent: P0, _entryMode: P1): R;
  }
  namespace NSTouchBarColorPickerSliderRGBArtworkProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarColorPickerSliderArtworkProvider {
      alloc<R = NSTouchBarColorPickerSliderRGBArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderRGBArtworkProvider>() => R;
      blueArtworkProviderWithEntryMode<R = unknown, P0 = number>(_blueArtworkProviderWithEntryMode: P0): R;
      greenArtworkProviderWithEntryMode<R = unknown, P0 = number>(_greenArtworkProviderWithEntryMode: P0): R;
      redArtworkProviderWithEntryMode<R = unknown, P0 = number>(_redArtworkProviderWithEntryMode: P0): R;
    }
  }
}

declare const NSTouchBarColorPickerSliderRGBArtworkProvider: cocoa.NSTouchBarColorPickerSliderRGBArtworkProvider.CLASS;
