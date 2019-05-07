/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSafariTransformLayer<T0 = void, T1 = void, T2 = void> extends CATransformLayer {
    setAllowsGroupBlending<R = void, P0 = boolean>(_setAllowsGroupBlending: P0): R;
    setBackgroundFilters<R = void, P0 = unknown>(_setBackgroundFilters: P0): R;
    setFilters<R = void, P0 = unknown>(_setFilters: P0): R;
    setMasksToBounds<R = void, P0 = boolean>(_setMasksToBounds: P0): R;
    setEdgeAntialiasingMask<R = void, P0 = number>(_setEdgeAntialiasingMask: P0): R;
    setShadowColor<R = void, P0 = CGColor>(_setShadowColor: P0): R;
  }
  namespace _NSSafariTransformLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CATransformLayer {}
  }
}
