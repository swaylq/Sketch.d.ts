/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGText<T0 = void, T1 = void, T2 = void> extends SVGDrawableElement {
    y<R = number>(): R;
    setY<R = void, P0 = number>(_v: P0): R;
    x<R = number>(): R;
    setX<R = void, P0 = number>(_v: P0): R;
    text<R = NSString>(): R;
    setText<R = void, P0 = NSString>(_v: P0): R;
    rotate<R = number>(): R;
    setRotate<R = void, P0 = number>(_v: P0): R;
    length<R = number>(): R;
    setLength<R = void, P0 = number>(_v: P0): R;
    dy<R = number>(): R;
    setDy<R = void, P0 = number>(_v: P0): R;
    dx<R = number>(): R;
    setDx<R = void, P0 = number>(_v: P0): R;
    anchor<R = number>(): R;
    setAnchor<R = void, P0 = number>(_v: P0): R;
    adjustSpacingAndGlyphs<R = boolean>(): R;
    setAdjustSpacingAndGlyphs<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _SVGText {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGDrawableElement {
      alloc<R = _SVGText>(): R;
      new: <R = _SVGText>() => R;
    }
  }
}
