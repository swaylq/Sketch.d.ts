/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSPage<T0 = void, T1 = void, T2 = void> extends MSLayerGroup {
    verticalRulerData<R = MSRulerData>(): R;
    setVerticalRulerData<R = void, P0 = MSRulerData>(_v: P0): R;
    layout<R = MSLayoutGrid>(): R;
    setLayout<R = void, P0 = MSLayoutGrid>(_v: P0): R;
    horizontalRulerData<R = MSRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = MSRulerData>(_v: P0): R;
    grid<R = MSSimpleGrid>(): R;
    setGrid<R = void, P0 = MSSimpleGrid>(_v: P0): R;
    includeInCloudUpload<R = boolean>(): R;
    setIncludeInCloudUpload<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSPage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayerGroup {
      alloc<R = _MSPage>(): R;
      new: <R = _MSPage>() => R;
    }
  }
}
