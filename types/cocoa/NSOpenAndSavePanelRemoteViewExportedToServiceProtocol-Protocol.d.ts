/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenAndSavePanelRemoteViewExportedToServiceProtocolProtocol<T0 = void, T1 = void, T2 = void> {
    requestAppEnabledStateForItems_replyToken<R = void, P0 = NSArray, P1 = number>(_requestAppEnabledStateForItems: P0, _replyToken: P1): R;
    _documentWindowFrameForPanelRunningAsASheetInService<R = void, P0 = CDUnknownBlockType>(__documentWindowFrameForPanelRunningAsASheetInService: P0): R;
  }
  namespace NSOpenAndSavePanelRemoteViewExportedToServiceProtocolProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
