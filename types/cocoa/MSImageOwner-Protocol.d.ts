/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageOwnerProtocol<T0 = void, T1 = void, T2 = void> {
    setReducedImage<R = void, P0 = MSImageData>(_setReducedImage: P0): R;
    canReduceImageSize<R = boolean>(): R;
    targetSizeForReduction<R = CGSize>(): R;
    image<R = MSImageData>(): R;
    setImage<R = void, P0 = MSImageData>(_v: P0): R;
  }
  namespace MSImageOwnerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
