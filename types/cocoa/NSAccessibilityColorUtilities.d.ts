/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityColorUtilities<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSAccessibilityColorUtilities {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAccessibilityColorUtilities>(): R;
      new: <R = NSAccessibilityColorUtilities>() => R;
      hexValueForColor<R = unknown, P0 = unknown>(_hexValueForColor: P0): R;
      alphaValueFromAccessibilityValueString<R = number, P0 = unknown>(_alphaValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForAlpha<R = unknown, P0 = number>(_accessibilityValueStringForAlpha: P0): R;
      grayscaleValueFromAccessibilityValueString<R = number, P0 = unknown>(_grayscaleValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForGrayscale<R = unknown, P0 = number>(_accessibilityValueStringForGrayscale: P0): R;
      blackValueFromAccessibilityValueString<R = number, P0 = unknown>(_blackValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForBlack<R = unknown, P0 = number>(_accessibilityValueStringForBlack: P0): R;
      yellowValueFromAccessibilityValueString<R = number, P0 = unknown>(_yellowValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForYellow<R = unknown, P0 = number>(_accessibilityValueStringForYellow: P0): R;
      magentaValueFromAccessibilityValueString<R = number, P0 = unknown>(_magentaValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForMagenta<R = unknown, P0 = number>(_accessibilityValueStringForMagenta: P0): R;
      cyanValueFromAccessibilityValueString<R = number, P0 = unknown>(_cyanValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForCyan<R = unknown, P0 = number>(_accessibilityValueStringForCyan: P0): R;
      blueValueFromAccessibilityValueString<R = number, P0 = unknown>(_blueValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForBlue<R = unknown, P0 = number>(_accessibilityValueStringForBlue: P0): R;
      greenValueFromAccessibilityValueString<R = number, P0 = unknown>(_greenValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForGreen<R = unknown, P0 = number>(_accessibilityValueStringForGreen: P0): R;
      redValueFromAccessibilityValueString<R = number, P0 = unknown>(_redValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForRed<R = unknown, P0 = number>(_accessibilityValueStringForRed: P0): R;
      brightnessValueFromAccessibilityValueString<R = number, P0 = unknown>(_brightnessValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForBrightness<R = unknown, P0 = number>(_accessibilityValueStringForBrightness: P0): R;
      saturationValueFromAccessibilityValueString<R = number, P0 = unknown>(_saturationValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForSaturation<R = unknown, P0 = number>(_accessibilityValueStringForSaturation: P0): R;
      hueValueFromAccessibilityValueString<R = number, P0 = unknown>(_hueValueFromAccessibilityValueString: P0): R;
      accessibilityValueStringForHue<R = unknown, P0 = number>(_accessibilityValueStringForHue: P0): R;
    }
  }
}

declare const NSAccessibilityColorUtilities: cocoa.NSAccessibilityColorUtilities.CLASS;
