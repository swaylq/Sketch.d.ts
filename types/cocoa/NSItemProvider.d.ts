/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    // + NSItemProvider(NSCloudKitSharing): 
    _ckContainerID<R = unknown>(): R;
    _ckSourceAppBundleIdentifier<R = unknown>(): R;
    _ckContainerIdentifier<R = unknown>(): R;
    _ckShare<R = unknown>(): R;
    _ckDictionary<R = unknown>(): R;
    registerCloudKitShareWithPreparationHandler<R = void, P0 = CDUnknownBlockType>(_registerCloudKitShareWithPreparationHandler: P0): R;
    registerCloudKitShare_container<R = void, P0 = unknown, P1 = unknown>(_registerCloudKitShare: P0, _container: P1): R;
    // + NSItemProvider(NSItemSourceInfo): 
    _itemSourceInfo<R = unknown>(): R;
    // + NSItemProvider(NSPrivate): 
    setPreferredPresentationSize<R = void, P0 = CGSize>(_setPreferredPresentationSize: P0): R;
    setContainerFrame<R = void, P0 = CGRect>(_setContainerFrame: P0): R;
    setSourceFrame<R = void, P0 = CGRect>(_setSourceFrame: P0): R;
    // + NSItemProvider(NSItemSourceInfo):
    preferredPresentationSize<R = CGSize>(): R;
    containerFrame<R = CGRect>(): R;
    sourceFrame<R = CGRect>(): R;
  }
  namespace NSItemProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = NSItemProvider>(): R;
      new: <R = NSItemProvider>() => R;
  
  }
  }
}

declare const NSItemProvider: cocoa.NSItemProvider.CLASS;
