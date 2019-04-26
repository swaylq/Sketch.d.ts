/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreferencesController<T0 = void, T1 = void, T2 = void> extends NSWindowController, NSToolbarDelegateProtocol, NSWindowDelegateProtocol {
    cxx_destruct<R = void>(): R;
    dismissAnyAlertSheet<R = void>(): R;
    validateToolbarItem<R = boolean, P0 = unknown>(_validateToolbarItem: P0): R;
    updateWindowFrame<R = void>(): R;
    existingPaneWithIdentifier<R = unknown, P0 = unknown>(_existingPaneWithIdentifier: P0): R;
    switchToPaneWithIdentifier<R = unknown, P0 = unknown>(_switchToPaneWithIdentifier: P0): R;
    switchPanes<R = void, P0 = unknown>(_switchPanes: P0): R;
    adjustColorsAction<R = void, P0 = unknown>(_adjustColorsAction: P0): R;
    awakeFromNib<R = void>(): R;
    toolbar<R = NSToolbar>(): R;
    setToolbar<R = void, P0 = NSToolbar>(_v: P0): R;
    preferencePanes<R = NSCache>(): R;
    setPreferencePanes<R = void, P0 = NSCache>(_v: P0): R;
    preferencePaneClasses<R = NSDictionary>(): R;
    setPreferencePaneClasses<R = void, P0 = NSDictionary>(_v: P0): R;
    toolbarItemIdentifiers<R = NSArray>(): R;
    setToolbarItemIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    currentPreferencePane<R = MSPreferencePane>(): R;
    setCurrentPreferencePane<R = void, P0 = MSPreferencePane>(_v: P0): R;
    selectedTabIndex<R = number>(): R;
    setSelectedTabIndex<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPreferencesController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController, NSToolbarDelegateProtocol, NSWindowDelegateProtocol {
      alloc<R = MSPreferencesController>(): R;
      new: <R = MSPreferencesController>() => R;
      sharedController<R = unknown>(): R;
    }
  }
}

declare const MSPreferencesController: cocoa.MSPreferencesController.CLASS;
