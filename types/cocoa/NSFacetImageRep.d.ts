/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFacetImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    hasFacetForState<R = boolean, P0 = number>(_hasFacetForState: P0): R;
    _facetForState<R = unknown, P0 = number>(__facetForState: P0): R;
    initWithBaseRenditionKey_appearance<R = unknown, P0 = unknown, P1 = unknown>(_initWithBaseRenditionKey: P0, _appearance: P1): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    appearance<R = NSAppearance>(): R;
    setAppearance<R = void, P0 = NSAppearance>(_v: P0): R;
    renditionKey<R = CUIRenditionKey>(): R;
    setRenditionKey<R = void, P0 = CUIRenditionKey>(_v: P0): R;
  }
  namespace NSFacetImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSFacetImageRep>(): R;
      new: <R = NSFacetImageRep>() => R;
    }
  }
}

declare const NSFacetImageRep: cocoa.NSFacetImageRep.CLASS;
