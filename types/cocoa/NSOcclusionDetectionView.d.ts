/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOcclusionDetectionView<T0 = void, T1 = void, T2 = void> extends NSView {
    viewGeometryDidChangeNotification<R = void, P0 = unknown>(_viewGeometryDidChangeNotification: P0): R;
    wantsLayer<R = boolean>(): R;
    _registerForNotifications<R = void, P0 = boolean>(__registerForNotifications: P0): R;
    _cleanUpContext<R = void>(): R;
    validateNoOcclusionSinceToken<R = boolean, P0 = unknown>(_validateNoOcclusionSinceToken: P0): R;
  }
  namespace NSOcclusionDetectionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSOcclusionDetectionView>(): R;
      new: <R = NSOcclusionDetectionView>() => R;
    }
  }
}

declare const NSOcclusionDetectionView: cocoa.NSOcclusionDetectionView.CLASS;
