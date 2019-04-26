/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemProviderRepresentation<T0 = void, T1 = void, T2 = void> extends NSObject {
    loadOpenInPlaceWithOptions_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadOpenInPlaceWithOptions: P0, _completionHandler: P1): R;
    loadOpenInPlaceWithOptions_v2_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadOpenInPlaceWithOptions_v2: P0, _completionHandler: P1): R;
    loadFileCopyWithOptions_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadFileCopyWithOptions: P0, _completionHandler: P1): R;
    loadFileCopyWithOptions_v2_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadFileCopyWithOptions_v2: P0, _completionHandler: P1): R;
    loadDataWithOptions_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadDataWithOptions: P0, _completionHandler: P1): R;
    loadDataWithOptions_v2_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadDataWithOptions_v2: P0, _completionHandler: P1): R;
    setLoaderBlock<R = void, P0 = CDUnknownBlockType>(_setLoaderBlock: P0): R;
    setLoaderBlock_v2<R = void, P0 = CDUnknownBlockType>(_setLoaderBlock_v2: P0): R;
    loadWithOptions_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadWithOptions: P0, _completionHandler: P1): R;
    loadWithOptions_v2_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_loadWithOptions_v2: P0, _completionHandler: P1): R;
    _loadWithOptions_completionBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(__loadWithOptions: P0, _completionBlock: P1): R;
    performProgressTrackingWithLoaderBlock_onCancelCallback<R = unknown, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_performProgressTrackingWithLoaderBlock: P0, _onCancelCallback: P1): R;
    copyWithDoNothingLoaderBlock<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithType_preferredRepresentation_loader<R = unknown, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_initWithType: P0, _preferredRepresentation: P1, _loader: P2): R;
    initWithType_v2_preferredRepresentation_loader<R = unknown, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_initWithType_v2: P0, _preferredRepresentation: P1, _loader: P2): R;
    preferredRepresentation<R = number>(): R;
    setPreferredRepresentation<R = void, P0 = number>(_v: P0): R;
    visibility<R = number>(): R;
    setVisibility<R = void, P0 = number>(_v: P0): R;
    typeIdentifier<R = NSString>(): R;
  }
  namespace NSItemProviderRepresentation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSItemProviderRepresentation>(): R;
      new: <R = NSItemProviderRepresentation>() => R;
    }
  }
}

declare const NSItemProviderRepresentation: cocoa.NSItemProviderRepresentation.CLASS;
