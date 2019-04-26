/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBundleResourceRequest<T0 = void, T1 = void, T2 = void> extends NSObject, NSProgressReportingProtocol {
    endAccessingResources<R = void>(): R;
    conditionallyBeginAccessingResourcesWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_conditionallyBeginAccessingResourcesWithCompletionHandler: P0): R;
    beginAccessingResourcesWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_beginAccessingResourcesWithCompletionHandler: P0): R;
    initWithTags_bundle<R = unknown, P0 = unknown, P1 = unknown>(_initWithTags: P0, _bundle: P1): R;
    initWithTags<R = unknown, P0 = unknown>(_initWithTags: P0): R;
    loadingPriority<R = number>(): R;
    setLoadingPriority<R = void, P0 = number>(_v: P0): R;
    progress<R = NSProgress>(): R;
    bundle<R = NSBundle>(): R;
    tags<R = NSSet>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSBundleResourceRequest {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSProgressReportingProtocol {
      alloc<R = NSBundleResourceRequest>(): R;
      new: <R = NSBundleResourceRequest>() => R;
      _assetPackBundleForBundle_withAssetPackID<R = unknown, P0 = unknown, P1 = unknown>(__assetPackBundleForBundle: P0, _withAssetPackID: P1): R;
      _addExtensionEndpoint<R = void, P0 = unknown>(__addExtensionEndpoint: P0): R;
      _extensionEndpointForMainBundleOfHostApplication<R = unknown, P0 = unknown>(__extensionEndpointForMainBundleOfHostApplication: P0): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSBundleResourceRequest: cocoa.NSBundleResourceRequest.CLASS;
