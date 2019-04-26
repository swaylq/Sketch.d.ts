/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessArbiterXPCInterfaceProtocol<T0 = void, T1 = void, T2 = void> extends NSFileAccessArbiterProtocol {
    performBarrierWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_performBarrierWithCompletionHandler: P0): R;
    provideSubarbiterDebugInfoIncludingEverything_completionHandler<R = void, P0 = boolean, P1 = CDUnknownBlockType>(_provideSubarbiterDebugInfoIncludingEverything: P0, _completionHandler: P1): R;
    provideDebugInfoWithLocalInfo_completionHandler<R = void, P0 = NSString, P1 = CDUnknownBlockType>(_provideDebugInfoWithLocalInfo: P0, _completionHandler: P1): R;
    getItemHasPresentersAtURL_completionHandler<R = void, P0 = NSURL, P1 = CDUnknownBlockType>(_getItemHasPresentersAtURL: P0, _completionHandler: P1): R;
    startArbitratingWithReply<R = void, P0 = CDUnknownBlockType>(_startArbitratingWithReply: P0): R;
    prepareToArbitrateForURLs<R = void, P0 = NSArray>(_prepareToArbitrateForURLs: P0): R;
    grantSubarbitrationClaim_withServer_reply<R = void, P0 = NSFileSubarbitrationClaim, P1 = NSXPCListenerEndpoint, P2 = CDUnknownBlockType>(_grantSubarbitrationClaim: P0, _withServer: P1, _reply: P2): R;
    removeProviderWithID_uniqueID<R = void, P0 = unknown, P1 = NSUUID>(_removeProviderWithID: P0, _uniqueID: P1): R;
    addProvider_withID_uniqueID_forProvidedItemsURL_options_withServer_reply<R = void, P0 = NSFileProviderXPCInterface, P1 = unknown, P2 = NSUUID, P3 = NSURL, P4 = number, P5 = NSXPCListenerEndpoint, P6 = CDUnknownBlockType>(_addProvider: P0, _withID: P1, _uniqueID: P2, _forProvidedItemsURL: P3, _options: P4, _withServer: P5, _reply: P6): R;
    removePresenterWithID<R = void, P0 = unknown>(_removePresenterWithID: P0): R;
    addPresenter_withID_fileURL_lastPresentedItemEventIdentifier_ubiquityAttributes_options_responses<R = void, P0 = NSFilePresenterXPCInterface, P1 = unknown, P2 = NSURL, P3 = NSNumber, P4 = NSSet, P5 = number, P6 = number>(_addPresenter: P0, _withID: P1, _fileURL: P2, _lastPresentedItemEventIdentifier: P3, _ubiquityAttributes: P4, _options: P5, _responses: P6): R;
    grantAccessClaim_withReply<R = void, P0 = NSFileAccessClaim, P1 = CDUnknownBlockType>(_grantAccessClaim: P0, _withReply: P1): R;
  }
  namespace NSFileAccessArbiterXPCInterfaceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileAccessArbiterProtocol {}
  }
}
