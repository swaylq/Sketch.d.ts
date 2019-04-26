/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCloudSharingPostShareViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSRemoteViewDelegateProtocol {
    disconnectionHandler<R = CDUnknownBlockType>(): R;
    setDisconnectionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    shouldRetainExportedObject<R = boolean>(): R;
  }
  namespace _NSCloudSharingPostShareViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSRemoteViewDelegateProtocol {
      alloc<R = _NSCloudSharingPostShareViewController>(): R;
      new: <R = _NSCloudSharingPostShareViewController>() => R;
      requestViewControllerForPopover_withItem_options_sharingServiceParameters_connectionHandler<R = void, P0 = boolean, P1 = unknown, P2 = number, P3 = unknown, P4 = CDUnknownBlockType>(_requestViewControllerForPopover: P0, _withItem: P1, _options: P2, _sharingServiceParameters: P3, _connectionHandler: P4): R;
    }
  }
}
