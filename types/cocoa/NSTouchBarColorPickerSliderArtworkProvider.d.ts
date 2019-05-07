/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliderArtworkProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    lightnessForValue_baseColor_horizontallyFlipped_allowedColorSpaces<R = number, P0 = number, P1 = unknown, P2 = boolean, P3 = unknown>(_lightnessForValue: P0, _baseColor: P1, _horizontallyFlipped: P2, _allowedColorSpaces: P3): R;
    textEffectForValue_baseColor_horizontallyFlipped_allowedColorSpaces<R = number, P0 = number, P1 = unknown, P2 = boolean, P3 = unknown>(_textEffectForValue: P0, _baseColor: P1, _horizontallyFlipped: P2, _allowedColorSpaces: P3): R;
    sliderLabel<R = unknown>(): R;
    formattedValue<R = unknown, P0 = number>(_formattedValue: P0): R;
    trackLabelForValue<R = unknown, P0 = number>(_trackLabelForValue: P0): R;
    accessibilityValueStringForValue<R = unknown, P0 = number>(_accessibilityValueStringForValue: P0): R;
    valueFromAccessibilityValueString<R = number, P0 = unknown>(_valueFromAccessibilityValueString: P0): R;
    updateRootTrackLayer_color_horizontallyFlipped_allowedColorSpaces<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(_updateRootTrackLayer: P0, _color: P1, _horizontallyFlipped: P2, _allowedColorSpaces: P3): R;
  }
  namespace NSTouchBarColorPickerSliderArtworkProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSTouchBarColorPickerSliderArtworkProvider>(): R;
      new: <R = NSTouchBarColorPickerSliderArtworkProvider>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSliderArtworkProvider: cocoa.NSTouchBarColorPickerSliderArtworkProvider.CLASS;
