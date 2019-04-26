/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarGapItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    isSpace<R = boolean>(): R;
    proxiedToolbarItem<R = unknown>(): R;
    _resizeWeightSharedWithDuplicateItems<R = boolean>(): R;
    _resizeWeight<R = number>(): R;
    configureAsProxyForItem_usingMetrics<R = void, P0 = unknown, P1 = __NSToolbarMetrics>(_configureAsProxyForItem: P0, _usingMetrics: P1): R;
    wantsToDrawIconIntoLabelAreaInDisplayMode<R = boolean, P0 = number>(_wantsToDrawIconIntoLabelAreaInDisplayMode: P0): R;
    wantsToDrawLabelInDisplayMode<R = boolean, P0 = number>(_wantsToDrawLabelInDisplayMode: P0): R;
    wantsToDrawIconInDisplayMode<R = boolean, P0 = number>(_wantsToDrawIconInDisplayMode: P0): R;
  }
  namespace _NSToolbarGapItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = _NSToolbarGapItem>(): R;
      new: <R = _NSToolbarGapItem>() => R;
    }
  }
}
