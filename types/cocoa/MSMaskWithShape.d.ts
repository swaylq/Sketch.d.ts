/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMaskWithShape<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSMaskWithShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSMaskWithShape>(): R;
      new: <R = MSMaskWithShape>() => R;
      nameForMaskWithLayers<R = unknown, P0 = unknown>(_nameForMaskWithLayers: P0): R;
      createMaskWithShapeFromMultipleLayers<R = unknown, P0 = unknown>(_createMaskWithShapeFromMultipleLayers: P0): R;
      toggleMaskForSingleShape<R = unknown, P0 = unknown>(_toggleMaskForSingleShape: P0): R;
      createMaskForSingleBitmap<R = unknown, P0 = unknown>(_createMaskForSingleBitmap: P0): R;
      createMaskWithShapeForLayers<R = unknown, P0 = unknown>(_createMaskWithShapeForLayers: P0): R;
    }
  }
}

declare const MSMaskWithShape: cocoa.MSMaskWithShape.CLASS;
