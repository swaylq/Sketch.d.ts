/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyle<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    textStyle<R = MSImmutableTextStyle>(): R;
    setTextStyle<R = void, P0 = MSImmutableTextStyle>(_v: P0): R;
    shadows<R = NSArray>(): R;
    setShadows<R = void, P0 = NSArray>(_v: P0): R;
    innerShadows<R = NSArray>(): R;
    setInnerShadows<R = void, P0 = NSArray>(_v: P0): R;
    fills<R = NSArray>(): R;
    setFills<R = void, P0 = NSArray>(_v: P0): R;
    contextSettings<R = MSImmutableGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = MSImmutableGraphicsContextSettings>(_v: P0): R;
    colorControls<R = MSImmutableStyleColorControls>(): R;
    setColorControls<R = void, P0 = MSImmutableStyleColorControls>(_v: P0): R;
    borders<R = NSArray>(): R;
    setBorders<R = void, P0 = NSArray>(_v: P0): R;
    borderOptions<R = MSImmutableStyleBorderOptions>(): R;
    setBorderOptions<R = void, P0 = MSImmutableStyleBorderOptions>(_v: P0): R;
    blur<R = MSImmutableStyleBlur>(): R;
    setBlur<R = void, P0 = MSImmutableStyleBlur>(_v: P0): R;
    windingRule<R = number>(): R;
    setWindingRule<R = void, P0 = number>(_v: P0): R;
    startMarkerType<R = number>(): R;
    setStartMarkerType<R = void, P0 = number>(_v: P0): R;
    miterLimit<R = number>(): R;
    setMiterLimit<R = void, P0 = number>(_v: P0): R;
    endMarkerType<R = number>(): R;
    setEndMarkerType<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableStyle>(): R;
      new: <R = _MSImmutableStyle>() => R;
    }
  }
}
