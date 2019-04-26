/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableArtboardGroup<T0 = void, T1 = void, T2 = void> extends MSImmutableLayerGroup {
    verticalRulerData<R = MSImmutableRulerData>(): R;
    setVerticalRulerData<R = void, P0 = MSImmutableRulerData>(_v: P0): R;
    layout<R = MSImmutableLayoutGrid>(): R;
    setLayout<R = void, P0 = MSImmutableLayoutGrid>(_v: P0): R;
    horizontalRulerData<R = MSImmutableRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = MSImmutableRulerData>(_v: P0): R;
    grid<R = MSImmutableSimpleGrid>(): R;
    setGrid<R = void, P0 = MSImmutableSimpleGrid>(_v: P0): R;
    backgroundColor<R = MSImmutableColor>(): R;
    setBackgroundColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
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
  namespace _MSImmutableArtboardGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableLayerGroup {
      alloc<R = _MSImmutableArtboardGroup>(): R;
      new: <R = _MSImmutableArtboardGroup>() => R;
    }
  }
}
