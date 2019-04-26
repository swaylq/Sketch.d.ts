/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableAssetCollection<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    imageCollection<R = MSImmutableImageCollection>(): R;
    setImageCollection<R = void, P0 = MSImmutableImageCollection>(_v: P0): R;
    gradients<R = NSArray>(): R;
    setGradients<R = void, P0 = NSArray>(_v: P0): R;
    exportPresets<R = NSArray>(): R;
    setExportPresets<R = void, P0 = NSArray>(_v: P0): R;
    colors<R = NSArray>(): R;
    setColors<R = void, P0 = NSArray>(_v: P0): R;
    images<R = NSArray>(): R;
    setImages<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace _MSImmutableAssetCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableAssetCollection>(): R;
      new: <R = _MSImmutableAssetCollection>() => R;
    }
  }
}
