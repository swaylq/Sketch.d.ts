/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGDrawableElement<T0 = void, T1 = void, T2 = void> extends SVGElement {
    primitiveSetStroke<R = void, P0 = unknown>(_primitiveSetStroke: P0): R;
    primitiveSetMask<R = void, P0 = unknown>(_primitiveSetMask: P0): R;
    primitiveSetFont<R = void, P0 = unknown>(_primitiveSetFont: P0): R;
    primitiveSetFill<R = void, P0 = unknown>(_primitiveSetFill: P0): R;
    primitiveSetClip<R = void, P0 = unknown>(_primitiveSetClip: P0): R;
    transform<R = NSAffineTransform>(): R;
    setTransform<R = void, P0 = NSAffineTransform>(_v: P0): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
    opacity<R = number>(): R;
    setOpacity<R = void, P0 = number>(_v: P0): R;
    hidden<R = boolean>(): R;
    setHidden<R = void, P0 = boolean>(_v: P0): R;
    clips<R = boolean>(): R;
    setClips<R = void, P0 = boolean>(_v: P0): R;
    blendMode<R = NSString>(): R;
    setBlendMode<R = void, P0 = NSString>(_v: P0): R;
    stroke<R = SVGStroke>(): R;
    setStroke<R = void, P0 = SVGStroke>(_v: P0): R;
    mask<R = SVGMask>(): R;
    setMask<R = void, P0 = SVGMask>(_v: P0): R;
    font<R = SVGFont>(): R;
    setFont<R = void, P0 = SVGFont>(_v: P0): R;
    fill<R = SVGFill>(): R;
    setFill<R = void, P0 = SVGFill>(_v: P0): R;
    clip<R = SVGClipPath>(): R;
    setClip<R = void, P0 = SVGClipPath>(_v: P0): R;
  }
  namespace _SVGDrawableElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGElement {
      alloc<R = _SVGDrawableElement>(): R;
      new: <R = _SVGDrawableElement>() => R;
    }
  }
}
