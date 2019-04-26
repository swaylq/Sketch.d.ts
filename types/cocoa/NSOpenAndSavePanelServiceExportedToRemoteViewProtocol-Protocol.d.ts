/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenAndSavePanelServiceExportedToRemoteViewProtocolProtocol<T0 = void, T1 = void, T2 = void> {
    setRemoteAccessoryViewDesiredSize<R = void, P0 = CGSize>(_setRemoteAccessoryViewDesiredSize: P0): R;
    processAppRespondedEnabledStates_forReplyToken<R = void, P0 = NSArray, P1 = number>(_processAppRespondedEnabledStates: P0, _forReplyToken: P1): R;
    validateVisibleColumns<R = void>(): R;
  }
  namespace NSOpenAndSavePanelServiceExportedToRemoteViewProtocolProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
