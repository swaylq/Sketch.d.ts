/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTiledLayerContents<T0 = void, T1 = void, T2 = void> extends NSObject, CALayerDelegateProtocol {
    presentationRect<R = CGRect>(): R;
  }
  namespace _NSTiledLayerContents {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, CALayerDelegateProtocol {
      alloc<R = _NSTiledLayerContents>(): R;
      new: <R = _NSTiledLayerContents>() => R;
    }
  }
}
