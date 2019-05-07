/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverSettings<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    createFlowHotspotImage<R = CGImage, P0 = number>(_createFlowHotspotImage: P0): R;
    createFlowDotImage<R = CGImage, P0 = number>(_createFlowDotImage: P0): R;
    flowColor<R = CGColor>(): R;
    flowOtherPageImage<R = CGImage>(): R;
    flowBackImage<R = CGImage>(): R;
    flowTipImage<R = CGImage>(): R;
    createTintedImageFromImage<R = CGImage, P0 = CGImage>(_createTintedImageFromImage: P0): R;
    initWithGridLightColor_gridDarkColor_layoutGridStyle_flowColor_flowTipImage_flowBackImage_flowOtherPageImage<R = unknown, P0 = CGColor, P1 = CGColor, P2 = number, P3 = CGColor, P4 = CGImage, P5 = CGImage, P6 = CGImage>(_initWithGridLightColor: P0, _gridDarkColor: P1, _layoutGridStyle: P2, _flowColor: P3, _flowTipImage: P4, _flowBackImage: P5, _flowOtherPageImage: P6): R;
    gridDarkColor<R = CGColor>(): R;
    gridLightColor<R = CGColor>(): R;
    layoutGridStyle<R = number>(): R;
  }
  namespace MSRenderingDriverSettings {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSRenderingDriverSettings>(): R;
      new: <R = MSRenderingDriverSettings>() => R;
    }
  }
}

declare const MSRenderingDriverSettings: cocoa.MSRenderingDriverSettings.CLASS;
