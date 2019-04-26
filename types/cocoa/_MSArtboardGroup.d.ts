/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSArtboardGroup<T0 = void, T1 = void, T2 = void> extends MSLayerGroup {
    verticalRulerData<R = MSRulerData>(): R;
    setVerticalRulerData<R = void, P0 = MSRulerData>(_v: P0): R;
    layout<R = MSLayoutGrid>(): R;
    setLayout<R = void, P0 = MSLayoutGrid>(_v: P0): R;
    horizontalRulerData<R = MSRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = MSRulerData>(_v: P0): R;
    grid<R = MSSimpleGrid>(): R;
    setGrid<R = void, P0 = MSSimpleGrid>(_v: P0): R;
    backgroundColor<R = MSColor>(): R;
    setBackgroundColor<R = void, P0 = MSColor>(_v: P0): R;
    resizesContent<R = boolean>(): R;
    setResizesContent<R = void, P0 = boolean>(_v: P0): R;
    presetDictionary<R = NSDictionary>(): R;
    setPresetDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
    isFlowHome<R = boolean>(): R;
    setIsFlowHome<R = void, P0 = boolean>(_v: P0): R;
    includeInCloudUpload<R = boolean>(): R;
    setIncludeInCloudUpload<R = void, P0 = boolean>(_v: P0): R;
    includeBackgroundColorInExport<R = boolean>(): R;
    setIncludeBackgroundColorInExport<R = void, P0 = boolean>(_v: P0): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSArtboardGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayerGroup {
      alloc<R = _MSArtboardGroup>(): R;
      new: <R = _MSArtboardGroup>() => R;
    }
  }
}
