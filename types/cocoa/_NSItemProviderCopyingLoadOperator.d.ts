/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSItemProviderCopyingLoadOperator<T0 = void, T1 = void, T2 = void> extends NSObject, _NSItemProviderLoadingProtocol {
    _sandboxedResourceForItemIfNeeded_auditToken_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__sandboxedResourceForItemIfNeeded: P0, _auditToken: P1, _error: P2): R;
    _loadItemsForTypeIdentifiers_auditToken_itemProvider<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__loadItemsForTypeIdentifiers: P0, _auditToken: P1, _itemProvider: P2): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithItemProvider_destinationProcessAuditToken<R = unknown, P0 = unknown, P1 = unknown>(_initWithItemProvider: P0, _destinationProcessAuditToken: P1): R;
    destinationProcessAuditToken<R = unknown>(): R;
    setDestinationProcessAuditToken<R = void, P0 = unknown>(_v: P0): R;
    loadedItems<R = NSDictionary>(): R;
    setLoadedItems<R = void, P0 = NSDictionary>(_v: P0): R;
    itemProvider<R = NSItemProvider>(): R;
    setItemProvider<R = void, P0 = NSItemProvider>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSItemProviderCopyingLoadOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSItemProviderLoadingProtocol {
      alloc<R = _NSItemProviderCopyingLoadOperator>(): R;
      new: <R = _NSItemProviderCopyingLoadOperator>() => R;
    }
  }
}
