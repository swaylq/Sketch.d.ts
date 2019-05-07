/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCloudKitShareProvider<T0 = void, T1 = void, T2 = void> extends NSItemProvider {
    initWithPreparationHandler<R = unknown, P0 = CDUnknownBlockType>(_initWithPreparationHandler: P0): R;
    initWithShare_container<R = unknown, P0 = unknown, P1 = unknown>(_initWithShare: P0, _container: P1): R;
  }
  namespace NSCloudKitShareProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSItemProvider {
      alloc<R = NSCloudKitShareProvider>(): R;
      new: <R = NSCloudKitShareProvider>() => R;
    }
  }
}

declare const NSCloudKitShareProvider: cocoa.NSCloudKitShareProvider.CLASS;
