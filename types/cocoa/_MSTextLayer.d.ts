/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSTextLayer<T0 = void, T1 = void, T2 = void> extends MSStyledLayer {
    textBehaviour<R = number>(): R;
    setTextBehaviour<R = void, P0 = number>(_v: P0): R;
    preview<R = MSImageData>(): R;
    setPreview<R = void, P0 = MSImageData>(_v: P0): R;
    lineSpacingBehaviour<R = number>(): R;
    setLineSpacingBehaviour<R = void, P0 = number>(_v: P0): R;
    glyphBounds<R = CGRect>(): R;
    setGlyphBounds<R = void, P0 = CGRect>(_v: P0): R;
    dontSynchroniseWithSymbol<R = boolean>(): R;
    setDontSynchroniseWithSymbol<R = void, P0 = boolean>(_v: P0): R;
    automaticallyDrawOnUnderlyingPath<R = boolean>(): R;
    setAutomaticallyDrawOnUnderlyingPath<R = void, P0 = boolean>(_v: P0): R;
    attributedString<R = MSAttributedString>(): R;
    setAttributedString<R = void, P0 = MSAttributedString>(_v: P0): R;
  }
  namespace _MSTextLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStyledLayer {
      alloc<R = _MSTextLayer>(): R;
      new: <R = _MSTextLayer>() => R;
    }
  }
}
