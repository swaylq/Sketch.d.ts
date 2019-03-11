/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFacetImageRep<T = any> extends cocoa.NSImageRep {
    hasFacetForState<R = boolean, P0 = number>(_hasFacetForState: P0): R;
    _facetForState<R = unknown, P0 = number>(__facetForState: P0): R;
    initWithBaseRenditionKey_appearance<R = unknown, P0 = unknown, P1 = unknown>(_initWithBaseRenditionKey: P0, _appearance: P1): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    appearance<R = cocoa.NSAppearance>(): R;
    setAppearance<R = void, P0 = cocoa.NSAppearance>(_v: P0): R;
    renditionKey<R = cocoa.CUIRenditionKey>(): R;
    setRenditionKey<R = void, P0 = cocoa.CUIRenditionKey>(_v: P0): R;
  }
  namespace classes {
    export interface NSFacetImageRep<T = any> extends cocoa.classes.NSImageRep {
      alloc<R = NSFacetImageRep>(): R;
      new: <R = NSFacetImageRep>() => R;
    }
  }
}

declare const NSFacetImageRep: cocoa.classes.NSFacetImageRep;
