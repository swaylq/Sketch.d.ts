/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyle<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    moveStyleShadowIndex_toIndex<R = void, P0 = number, P1 = number>(_moveStyleShadowIndex: P0, _toIndex: P1): R;
    removeAllStyleShadows<R = void>(): R;
    removeStyleShadowsAtIndexes<R = void, P0 = unknown>(_removeStyleShadowsAtIndexes: P0): R;
    removeStyleShadowAtIndex<R = void, P0 = number>(_removeStyleShadowAtIndex: P0): R;
    removeStyleShadow<R = void, P0 = unknown>(_removeStyleShadow: P0): R;
    insertStyleShadows_afterStyleShadow<R = void, P0 = unknown, P1 = unknown>(_insertStyleShadows: P0, _afterStyleShadow: P1): R;
    insertStyleShadow_afterStyleShadow<R = void, P0 = unknown, P1 = unknown>(_insertStyleShadow: P0, _afterStyleShadow: P1): R;
    insertStyleShadows_beforeStyleShadow<R = void, P0 = unknown, P1 = unknown>(_insertStyleShadows: P0, _beforeStyleShadow: P1): R;
    insertStyleShadow_beforeStyleShadow<R = void, P0 = unknown, P1 = unknown>(_insertStyleShadow: P0, _beforeStyleShadow: P1): R;
    insertStyleShadow_atIndex<R = void, P0 = unknown, P1 = number>(_insertStyleShadow: P0, _atIndex: P1): R;
    addStyleShadows<R = void, P0 = unknown>(_addStyleShadows: P0): R;
    addStyleShadow<R = void, P0 = unknown>(_addStyleShadow: P0): R;
    moveStyleInnerShadowIndex_toIndex<R = void, P0 = number, P1 = number>(_moveStyleInnerShadowIndex: P0, _toIndex: P1): R;
    removeAllStyleInnerShadows<R = void>(): R;
    removeStyleInnerShadowsAtIndexes<R = void, P0 = unknown>(_removeStyleInnerShadowsAtIndexes: P0): R;
    removeStyleInnerShadowAtIndex<R = void, P0 = number>(_removeStyleInnerShadowAtIndex: P0): R;
    removeStyleInnerShadow<R = void, P0 = unknown>(_removeStyleInnerShadow: P0): R;
    insertStyleInnerShadows_afterStyleInnerShadow<R = void, P0 = unknown, P1 = unknown>(_insertStyleInnerShadows: P0, _afterStyleInnerShadow: P1): R;
    insertStyleInnerShadow_afterStyleInnerShadow<R = void, P0 = unknown, P1 = unknown>(_insertStyleInnerShadow: P0, _afterStyleInnerShadow: P1): R;
    insertStyleInnerShadows_beforeStyleInnerShadow<R = void, P0 = unknown, P1 = unknown>(_insertStyleInnerShadows: P0, _beforeStyleInnerShadow: P1): R;
    insertStyleInnerShadow_beforeStyleInnerShadow<R = void, P0 = unknown, P1 = unknown>(_insertStyleInnerShadow: P0, _beforeStyleInnerShadow: P1): R;
    insertStyleInnerShadow_atIndex<R = void, P0 = unknown, P1 = number>(_insertStyleInnerShadow: P0, _atIndex: P1): R;
    addStyleInnerShadows<R = void, P0 = unknown>(_addStyleInnerShadows: P0): R;
    addStyleInnerShadow<R = void, P0 = unknown>(_addStyleInnerShadow: P0): R;
    moveStyleFillIndex_toIndex<R = void, P0 = number, P1 = number>(_moveStyleFillIndex: P0, _toIndex: P1): R;
    removeAllStyleFills<R = void>(): R;
    removeStyleFillsAtIndexes<R = void, P0 = unknown>(_removeStyleFillsAtIndexes: P0): R;
    removeStyleFillAtIndex<R = void, P0 = number>(_removeStyleFillAtIndex: P0): R;
    removeStyleFill<R = void, P0 = unknown>(_removeStyleFill: P0): R;
    insertStyleFills_afterStyleFill<R = void, P0 = unknown, P1 = unknown>(_insertStyleFills: P0, _afterStyleFill: P1): R;
    insertStyleFill_afterStyleFill<R = void, P0 = unknown, P1 = unknown>(_insertStyleFill: P0, _afterStyleFill: P1): R;
    insertStyleFills_beforeStyleFill<R = void, P0 = unknown, P1 = unknown>(_insertStyleFills: P0, _beforeStyleFill: P1): R;
    insertStyleFill_beforeStyleFill<R = void, P0 = unknown, P1 = unknown>(_insertStyleFill: P0, _beforeStyleFill: P1): R;
    insertStyleFill_atIndex<R = void, P0 = unknown, P1 = number>(_insertStyleFill: P0, _atIndex: P1): R;
    addStyleFills<R = void, P0 = unknown>(_addStyleFills: P0): R;
    addStyleFill<R = void, P0 = unknown>(_addStyleFill: P0): R;
    moveStyleBorderIndex_toIndex<R = void, P0 = number, P1 = number>(_moveStyleBorderIndex: P0, _toIndex: P1): R;
    removeAllStyleBorders<R = void>(): R;
    removeStyleBordersAtIndexes<R = void, P0 = unknown>(_removeStyleBordersAtIndexes: P0): R;
    removeStyleBorderAtIndex<R = void, P0 = number>(_removeStyleBorderAtIndex: P0): R;
    removeStyleBorder<R = void, P0 = unknown>(_removeStyleBorder: P0): R;
    insertStyleBorders_afterStyleBorder<R = void, P0 = unknown, P1 = unknown>(_insertStyleBorders: P0, _afterStyleBorder: P1): R;
    insertStyleBorder_afterStyleBorder<R = void, P0 = unknown, P1 = unknown>(_insertStyleBorder: P0, _afterStyleBorder: P1): R;
    insertStyleBorders_beforeStyleBorder<R = void, P0 = unknown, P1 = unknown>(_insertStyleBorders: P0, _beforeStyleBorder: P1): R;
    insertStyleBorder_beforeStyleBorder<R = void, P0 = unknown, P1 = unknown>(_insertStyleBorder: P0, _beforeStyleBorder: P1): R;
    insertStyleBorder_atIndex<R = void, P0 = unknown, P1 = number>(_insertStyleBorder: P0, _atIndex: P1): R;
    addStyleBorders<R = void, P0 = unknown>(_addStyleBorders: P0): R;
    addStyleBorder<R = void, P0 = unknown>(_addStyleBorder: P0): R;
    hasDefaultValues<R = boolean>(): R;
    textStyle<R = MSTextStyle>(): R;
    setTextStyle<R = void, P0 = MSTextStyle>(_v: P0): R;
    shadows<R = NSArray>(): R;
    setShadows<R = void, P0 = NSArray>(_v: P0): R;
    innerShadows<R = NSArray>(): R;
    setInnerShadows<R = void, P0 = NSArray>(_v: P0): R;
    fills<R = NSArray>(): R;
    setFills<R = void, P0 = NSArray>(_v: P0): R;
    contextSettings<R = MSGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = MSGraphicsContextSettings>(_v: P0): R;
    colorControls<R = MSStyleColorControls>(): R;
    setColorControls<R = void, P0 = MSStyleColorControls>(_v: P0): R;
    borders<R = NSArray>(): R;
    setBorders<R = void, P0 = NSArray>(_v: P0): R;
    borderOptions<R = MSStyleBorderOptions>(): R;
    setBorderOptions<R = void, P0 = MSStyleBorderOptions>(_v: P0): R;
    blur<R = MSStyleBlur>(): R;
    setBlur<R = void, P0 = MSStyleBlur>(_v: P0): R;
    windingRule<R = number>(): R;
    setWindingRule<R = void, P0 = number>(_v: P0): R;
    startMarkerType<R = number>(): R;
    setStartMarkerType<R = void, P0 = number>(_v: P0): R;
    miterLimit<R = number>(): R;
    setMiterLimit<R = void, P0 = number>(_v: P0): R;
    endMarkerType<R = number>(): R;
    setEndMarkerType<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSStyle>(): R;
      new: <R = _MSStyle>() => R;
    }
  }
}
