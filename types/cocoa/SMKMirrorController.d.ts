/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMirrorController<T0 = void, T1 = void, T2 = void> extends NSObject, SMKCommunicationResponseInterfaceProtocol {
    cxx_destruct<R = void>(): R;
    connectionInfo_didReceiveURLRequest<R = void, P0 = unknown, P1 = unknown>(_connectionInfo: P0, _didReceiveURLRequest: P1): R;
    connectionInfo_didReceiveMessage<R = void, P0 = unknown, P1 = unknown>(_connectionInfo: P0, _didReceiveMessage: P1): R;
    initiateConnectionWithInfo<R = void, P0 = unknown>(_initiateConnectionWithInfo: P0): R;
    updateAllClientsWithConnectionInfo<R = void, P0 = unknown>(_updateAllClientsWithConnectionInfo: P0): R;
    newClientWithConnectionInfo<R = unknown, P0 = unknown>(_newClientWithConnectionInfo: P0): R;
    sendConnectedMessageToConnectionID<R = void, P0 = unknown>(_sendConnectedMessageToConnectionID: P0): R;
    currentArtboardMessage<R = unknown>(): R;
    contentMessage<R = unknown>(): R;
    sendMessage_toConnectionID<R = void, P0 = unknown, P1 = unknown>(_sendMessage: P0, _toConnectionID: P1): R;
    broadcastMessage<R = void, P0 = unknown>(_broadcastMessage: P0): R;
    disconnect<R = void, P0 = unknown>(_disconnect: P0): R;
    connect<R = void, P0 = unknown>(_connect: P0): R;
    invalidateImageForArtboardIdentifier_inRect<R = void, P0 = unknown, P1 = CGRect>(_invalidateImageForArtboardIdentifier: P0, _inRect: P1): R;
    invalidateCurrentArtboard<R = void>(): R;
    invalidateContent<R = void>(): R;
    continueUserActivity<R = void, P0 = unknown>(_continueUserActivity: P0): R;
    isClientWhitelisted<R = boolean, P0 = unknown>(_isClientWhitelisted: P0): R;
    whitelistClientAdvertisementID<R = void, P0 = unknown>(_whitelistClientAdvertisementID: P0): R;
    helperOptions<R = number>(): R;
    helperDidTerminate<R = void>(): R;
    setupXPCConnection<R = void>(): R;
    dealloc<R = void>(): R;
    webServer<R = SMKWebServer>(): R;
    setWebServer<R = void, P0 = SMKWebServer>(_v: P0): R;
    advertisementWhiteList<R = NSMutableSet>(): R;
    setAdvertisementWhiteList<R = void, P0 = NSMutableSet>(_v: P0): R;
    advertisements<R = NSMutableDictionary>(): R;
    setAdvertisements<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    helperRestartCount<R = number>(): R;
    setHelperRestartCount<R = void, P0 = number>(_v: P0): R;
    helperConnection<R = NSXPCConnection>(): R;
    setHelperConnection<R = void, P0 = NSXPCConnection>(_v: P0): R;
    dataSource<R = SMKMirrorDataSource>(): R;
    setDataSource<R = void, P0 = SMKMirrorDataSource>(_v: P0): R;
    clients<R = NSArray>(): R;
    setClients<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = SMKMirrorControllerDelegate>(): R;
    setDelegate<R = void, P0 = SMKMirrorControllerDelegate>(_v: P0): R;
    hasConnectedClients<R = boolean>(): R;
    authorizedWebURL<R = NSURL>(): R;
    webURL<R = NSURL>(): R;
    helperObject<R = SMKCommunicationInterface>(): R;
    netserviceEnabled<R = boolean>(): R;
    webEnabled<R = boolean>(): R;
    usbEnabled<R = boolean>(): R;
    expectedHelperInterface<R = NSXPCInterface>(): R;
    exportedHelperInterface<R = NSXPCInterface>(): R;
    helperInterfaceClasses<R = NSSet>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace SMKMirrorController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, SMKCommunicationResponseInterfaceProtocol {
      alloc<R = SMKMirrorController>(): R;
      new: <R = SMKMirrorController>() => R;
    }
  }
}

declare const SMKMirrorController: cocoa.SMKMirrorController.CLASS;
