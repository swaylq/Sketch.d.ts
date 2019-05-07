/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlexibleColor<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    colorForColorSpace<R = unknown, P0 = unknown>(_colorForColorSpace: P0): R;
    msColor<R = unknown>(): R;
    setPointersP1_p2_p3_p4_toValuesV1_v2_v3_v4<R = void, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number, P6 = number, P7 = number>(_setPointersP1: P0, _p2: P1, _p3: P2, _p4: P3, _toValuesV1: P4, _v2: P5, _v3: P6, _v4: P7): R;
    getHue_saturation_lightness_alpha<R = void, P0 = number, P1 = number, P2 = number, P3 = number>(_getHue: P0, _saturation: P1, _lightness: P2, _alpha: P3): R;
    getHue_saturation_brightness_alpha<R = void, P0 = number, P1 = number, P2 = number, P3 = number>(_getHue: P0, _saturation: P1, _brightness: P2, _alpha: P3): R;
    getClampedRed_green_blue_alpha<R = void, P0 = number, P1 = number, P2 = number, P3 = number>(_getClampedRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
    getRed_green_blue_alpha<R = void, P0 = number, P1 = number, P2 = number, P3 = number>(_getRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
    initWithModel_c1_c2_c3_c4<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number>(_initWithModel: P0, _c1: P1, _c2: P2, _c3: P3, _c4: P4): R;
    c4<R = number>(): R;
    setC4<R = void, P0 = number>(_v: P0): R;
    c3<R = number>(): R;
    setC3<R = void, P0 = number>(_v: P0): R;
    c2<R = number>(): R;
    setC2<R = void, P0 = number>(_v: P0): R;
    c1<R = number>(): R;
    setC1<R = void, P0 = number>(_v: P0): R;
    model<R = number>(): R;
    setModel<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSFlexibleColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFlexibleColor>(): R;
      new: <R = MSFlexibleColor>() => R;
      colorWithHue_sat_lightness_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithHue: P0, _sat: P1, _lightness: P2, _alpha: P3): R;
      colorWithHue_sat_bright_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithHue: P0, _sat: P1, _bright: P2, _alpha: P3): R;
      colorWithRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
    }
  }
}

declare const MSFlexibleColor: cocoa.MSFlexibleColor.CLASS;
