/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenSavePanelDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    panelSelectionDidChange<R = void, P0 = unknown>(_panelSelectionDidChange: P0): R;
    panel_willExpand<R = void, P0 = unknown, P1 = boolean>(_panel: P0, _willExpand: P1): R;
    panel_userEnteredFilename_confirmed<R = NSString, P0 = unknown, P1 = NSString, P2 = boolean>(_panel: P0, _userEnteredFilename: P1, _confirmed: P2): R;
    panel_didChangeToDirectoryURL<R = void, P0 = unknown, P1 = NSURL>(_panel: P0, _didChangeToDirectoryURL: P1): R;
    panel_validateURL_error<R = boolean, P0 = unknown, P1 = NSURL, P2 = unknown>(_panel: P0, _validateURL: P1, _error: P2): R;
    panel_shouldEnableURL<R = boolean, P0 = unknown, P1 = NSURL>(_panel: P0, _shouldEnableURL: P1): R;
  }
  namespace NSOpenSavePanelDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
