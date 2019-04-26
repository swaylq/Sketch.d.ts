/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleBasicFill<T0 = void, T1 = void, T2 = void> extends _MSStyleBasicFill, MSColorConvertibleProtocol {
    previewImageOfSize_colorSpace_clippingAsBorder_borderWidth<R = unknown, P0 = CGSize, P1 = unknown, P2 = boolean, P3 = number>(_previewImageOfSize: P0, _colorSpace: P1, _clippingAsBorder: P2, _borderWidth: P3): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSStyleBasicFill(EqualAppearance): 
    hasEqualAppearance<R = boolean, P0 = unknown>(_hasEqualAppearance: P0): R;
    // + MSStyleBasicFill(Previewing): 
    configureFillForPreview<R = void, P0 = unknown>(_configureFillForPreview: P0): R;
    // + MSStyleBasicFill(TouchBar): 
    previewImageOfSize_colorSpace_clippingAsBorder_borderWidth<R = unknown, P0 = CGSize, P1 = unknown, P2 = boolean, P3 = number>(_previewImageOfSize: P0, _colorSpace: P1, _clippingAsBorder: P2, _borderWidth: P3): R;
  }
  namespace MSStyleBasicFill {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStyleBasicFill, MSColorConvertibleProtocol {
      alloc<R = MSStyleBasicFill>(): R;
      new: <R = MSStyleBasicFill>() => R;
      defaultFillColor<R = unknown>(): R;
      drawNoiseFill_inRect_context<R = void, P0 = unknown, P1 = CGRect, P2 = CGContext>(_drawNoiseFill: P0, _inRect: P1, _context: P2): R;
      drawPatternFill_inRect<R = void, P0 = unknown, P1 = CGRect>(_drawPatternFill: P0, _inRect: P1): R;
      drawGradientFill_colorSpace_inRect<R = void, P0 = unknown, P1 = unknown, P2 = CGRect>(_drawGradientFill: P0, _colorSpace: P1, _inRect: P2): R;
      drawColorFill_colorSpace_inRect<R = void, P0 = unknown, P1 = unknown, P2 = CGRect>(_drawColorFill: P0, _colorSpace: P1, _inRect: P2): R;
      drawColor_enabled_inRect_checkerboardSize_forDarkAppearance<R = void, P0 = unknown, P1 = boolean, P2 = CGRect, P3 = number, P4 = boolean>(_drawColor: P0, _enabled: P1, _inRect: P2, _checkerboardSize: P3, _forDarkAppearance: P4): R;
      drawColor_enabled_inRect<R = void, P0 = unknown, P1 = boolean, P2 = CGRect>(_drawColor: P0, _enabled: P1, _inRect: P2): R;
      drawBasicFill_colorSpace_enabled_inRect<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = CGRect>(_drawBasicFill: P0, _colorSpace: P1, _enabled: P2, _inRect: P3): R;
      drawCheckerboardBackgroundInRect_checkerboardSize_forDarkAppearance_backgroundColor<R = void, P0 = CGRect, P1 = number, P2 = boolean, P3 = unknown>(_drawCheckerboardBackgroundInRect: P0, _checkerboardSize: P1, _forDarkAppearance: P2, _backgroundColor: P3): R;
      drawCheckerboardBackgroundInRect<R = void, P0 = CGRect>(_drawCheckerboardBackgroundInRect: P0): R;
      // + MSStyleBasicFill(TouchBar): 
      drawNoiseFill_inRect_context<R = void, P0 = unknown, P1 = CGRect, P2 = CGContext>(_drawNoiseFill: P0, _inRect: P1, _context: P2): R;
      drawPatternFill_inRect<R = void, P0 = unknown, P1 = CGRect>(_drawPatternFill: P0, _inRect: P1): R;
      drawGradientFill_colorSpace_inRect<R = void, P0 = unknown, P1 = unknown, P2 = CGRect>(_drawGradientFill: P0, _colorSpace: P1, _inRect: P2): R;
      drawColorFill_colorSpace_inRect<R = void, P0 = unknown, P1 = unknown, P2 = CGRect>(_drawColorFill: P0, _colorSpace: P1, _inRect: P2): R;
      drawColor_enabled_inRect_checkerboardSize_forDarkAppearance<R = void, P0 = unknown, P1 = boolean, P2 = CGRect, P3 = number, P4 = boolean>(_drawColor: P0, _enabled: P1, _inRect: P2, _checkerboardSize: P3, _forDarkAppearance: P4): R;
      drawColor_enabled_inRect<R = void, P0 = unknown, P1 = boolean, P2 = CGRect>(_drawColor: P0, _enabled: P1, _inRect: P2): R;
      drawBasicFill_colorSpace_enabled_inRect<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = CGRect>(_drawBasicFill: P0, _colorSpace: P1, _enabled: P2, _inRect: P3): R;
      drawCheckerboardBackgroundInRect_checkerboardSize_forDarkAppearance_backgroundColor<R = void, P0 = CGRect, P1 = number, P2 = boolean, P3 = unknown>(_drawCheckerboardBackgroundInRect: P0, _checkerboardSize: P1, _forDarkAppearance: P2, _backgroundColor: P3): R;
      drawCheckerboardBackgroundInRect<R = void, P0 = CGRect>(_drawCheckerboardBackgroundInRect: P0): R;
    }
  }
}

declare const MSStyleBasicFill: cocoa.MSStyleBasicFill.CLASS;
