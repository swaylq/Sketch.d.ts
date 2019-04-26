/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutablePage<T0 = void, T1 = void, T2 = void> extends MSImmutableLayerGroup {
    verticalRulerData<R = MSImmutableRulerData>(): R;
    setVerticalRulerData<R = void, P0 = MSImmutableRulerData>(_v: P0): R;
    layout<R = MSImmutableLayoutGrid>(): R;
    setLayout<R = void, P0 = MSImmutableLayoutGrid>(_v: P0): R;
    horizontalRulerData<R = MSImmutableRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = MSImmutableRulerData>(_v: P0): R;
    grid<R = MSImmutableSimpleGrid>(): R;
    setGrid<R = void, P0 = MSImmutableSimpleGrid>(_v: P0): R;
    includeInCloudUpload<R = boolean>(): R;
    setIncludeInCloudUpload<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSImmutablePage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableLayerGroup {
      alloc<R = _MSImmutablePage>(): R;
      new: <R = _MSImmutablePage>() => R;
    }
  }
}
