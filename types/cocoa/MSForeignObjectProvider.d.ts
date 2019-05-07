/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignObjectProvider<T0 = void, T1 = void, T2 = void> extends NSObject, MSForeignObjectProviderProtocol {
    cxx_destruct<R = void>(): R;
    shareableObjectForInstance_inContainerOfType<R = MSModelObject, P0 = unknown, P1 = number>(_shareableObjectForInstance: P0, _inContainerOfType: P1): R;
    tempDocument<R = unknown>(): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    document<R = MSDocument>(): R;
    objectType<R = number>(): R;
    currentDocument<R = MSDocumentData>(): R;
    libraryController<R = MSAssetLibraryController>(): R;
    foreignObjects<R = NSArray>(): R;
  }
  namespace MSForeignObjectProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSForeignObjectProviderProtocol {
      alloc<R = MSForeignObjectProvider>(): R;
      new: <R = MSForeignObjectProvider>() => R;
      providerForLayers_inDocument<R = unknown, P0 = unknown, P1 = unknown>(_providerForLayers: P0, _inDocument: P1): R;
    }
  }
}

declare const MSForeignObjectProvider: cocoa.MSForeignObjectProvider.CLASS;
