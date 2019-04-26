/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderXPCInterfaceProtocol<T0 = void, T1 = void, T2 = void> extends NSFileCoordinationDebugInfoXPCIntefaceProtocol {
    observeEndOfWriteAtURL_forClaimWithID_fromProcessWithIdentifier<R = void, P0 = NSURL, P1 = unknown, P2 = number>(_observeEndOfWriteAtURL: P0, _forClaimWithID: P1, _fromProcessWithIdentifier: P2): R;
    observePresentationChangeOfKind_forPresenterWithID_fromProcessWithIdentifier_observedUbiquityAttributes_url_newURL<R = void, P0 = NSString, P1 = unknown, P2 = number, P3 = NSSet, P4 = NSURL, P5 = NSURL>(_observePresentationChangeOfKind: P0, _forPresenterWithID: P1, _fromProcessWithIdentifier: P2, _observedUbiquityAttributes: P3, _url: P4, _newURL: P5): R;
    providePhysicalItemForURL_completionHandler<R = void, P0 = NSURL, P1 = CDUnknownBlockType>(_providePhysicalItemForURL: P0, _completionHandler: P1): R;
    cancelProvidingItemAtURL_forClaimWithID<R = void, P0 = NSURL, P1 = unknown>(_cancelProvidingItemAtURL: P0, _forClaimWithID: P1): R;
    provideItemAtURL_forClaimWithID_madeByClientWithProcessIdentifier_options_completionHandler<R = void, P0 = NSURL, P1 = unknown, P2 = number, P3 = number, P4 = CDUnknownBlockType>(_provideItemAtURL: P0, _forClaimWithID: P1, _madeByClientWithProcessIdentifier: P2, _options: P3, _completionHandler: P4): R;
    checkInProviderWithReply<R = void, P0 = CDUnknownBlockType>(_checkInProviderWithReply: P0): R;
  }
  namespace NSFileProviderXPCInterfaceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileCoordinationDebugInfoXPCIntefaceProtocol {}
  }
}
