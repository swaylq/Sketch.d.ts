/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetInspectorItem<T = any> extends cocoa.MSInspectorItem, cocoa.MSArtboardPresetsViewControllerDelegateProtocol, cocoa.MSEditArtboardPresetViewControllerDelegateProtocol {
    dismissAllPresentedViewControllers<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    orientationOfArtboard<R = unknown, P0 = unknown>(_orientationOfArtboard: P0): R;
    orientation<R = unknown>(): R;
    didChangeOrientation<R = void, P0 = number>(_didChangeOrientation: P0): R;
    toggleOrientation<R = void, P0 = unknown>(_toggleOrientation: P0): R;
    applyOrientation<R = void, P0 = number>(_applyOrientation: P0): R;
    applyPreset<R = void, P0 = unknown>(_applyPreset: P0): R;
    selectedPreset<R = unknown>(): R;
    displayImageForPreset<R = unknown, P0 = unknown>(_displayImageForPreset: P0): R;
    sizeStringForPreset_match<R = unknown, P0 = unknown, P1 = number>(_sizeStringForPreset: P0, _match: P1): R;
    refreshPresetButtonAndPopover<R = void>(): R;
    showPresets<R = void, P0 = unknown>(_showPresets: P0): R;
    presetButton<R = cocoa.MSArtboardPresetButton>(): R;
    setPresetButton<R = void, P0 = cocoa.MSArtboardPresetButton>(_v: P0): R;
    presetStore<R = cocoa.MSArtboardPresetStore>(): R;
    presetsViewController<R = cocoa.MSArtboardPresetsViewController>(): R;
    setPresetsViewController<R = void, P0 = cocoa.MSArtboardPresetsViewController>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSArtboardPresetInspectorItem<T = any> extends cocoa.classes.MSInspectorItem, cocoa.classes.MSArtboardPresetsViewControllerDelegateProtocol, cocoa.classes.MSEditArtboardPresetViewControllerDelegateProtocol {
      alloc<R = MSArtboardPresetInspectorItem>(): R;
      new: <R = MSArtboardPresetInspectorItem>() => R;
    }
  }
}

declare const MSArtboardPresetInspectorItem: cocoa.classes.MSArtboardPresetInspectorItem;
