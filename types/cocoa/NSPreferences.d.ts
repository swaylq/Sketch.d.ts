/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPreferences<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowRestorationProtocol {
    toolbarSelectableItemIdentifiers<R = unknown, P0 = unknown>(_toolbarSelectableItemIdentifiers: P0): R;
    toolbarAllowedItemIdentifiers<R = unknown, P0 = unknown>(_toolbarAllowedItemIdentifiers: P0): R;
    toolbarDefaultItemIdentifiers<R = unknown, P0 = unknown>(_toolbarDefaultItemIdentifiers: P0): R;
    toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_toolbar: P0, _itemForItemIdentifier: P1, _willBeInsertedIntoToolbar: P2): R;
    toolbarItemClicked<R = void, P0 = unknown>(_toolbarItemClicked: P0): R;
    _itemIdentifierForModule<R = unknown, P0 = unknown>(__itemIdentifierForModule: P0): R;
    usesButtons<R = boolean>(): R;
    windowWillResize_toSize<R = CGSize, P0 = unknown, P1 = CGSize>(_windowWillResize: P0, _toSize: P1): R;
    windowDidResize<R = void, P0 = unknown>(_windowDidResize: P0): R;
    windowShouldClose<R = boolean, P0 = unknown>(_windowShouldClose: P0): R;
    confirmCloseSheetIsDone_returnCode_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(_confirmCloseSheetIsDone: P0, _returnCode: P1, _contextInfo: P2): R;
    windowTitle<R = unknown>(): R;
    _selectModuleOwner<R = void, P0 = unknown>(__selectModuleOwner: P0): R;
    apply<R = void, P0 = unknown>(_apply: P0): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    ok<R = void, P0 = unknown>(_ok: P0): R;
    showModalPreferencesPanel<R = number>(): R;
    showModalPreferencesPanelForOwner<R = number, P0 = unknown>(_showModalPreferencesPanelForOwner: P0): R;
    window_willEncodeRestorableState<R = void, P0 = unknown, P1 = unknown>(_window: P0, _willEncodeRestorableState: P1): R;
    showPreferencesPanelForOwner<R = void, P0 = unknown>(_showPreferencesPanelForOwner: P0): R;
    _setupPreferencesPanelForOwnerAtIndex<R = unknown, P0 = number>(__setupPreferencesPanelForOwnerAtIndex: P0): R;
    _setupPreferencesPanelForOwner<R = unknown, P0 = unknown>(__setupPreferencesPanelForOwner: P0): R;
    showPreferencesPanel<R = void>(): R;
    _setupUI<R = void>(): R;
    _setupToolbar<R = void>(): R;
    addPreferenceNamed_owner<R = void, P0 = unknown, P1 = unknown>(_addPreferenceNamed: P0, _owner: P1): R;
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSPreferences {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowRestorationProtocol {
      alloc<R = NSPreferences>(): R;
      new: <R = NSPreferences>() => R;
      defaultPreferencesClass<R = unknown>(): R;
      setDefaultPreferencesClass<R = void, P0 = unknown>(_setDefaultPreferencesClass: P0): R;
      sharedPreferences<R = unknown>(): R;
    }
  }
}

declare const NSPreferences: cocoa.NSPreferences.CLASS;
